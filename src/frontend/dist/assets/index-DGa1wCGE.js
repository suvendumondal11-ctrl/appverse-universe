var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _QueryObserver_instances, executeFetch_fn, updateStaleTimeout_fn, computeRefetchInterval_fn, updateRefetchInterval_fn, updateTimers_fn, clearStaleTimeout_fn, clearRefetchInterval_fn, updateQuery_fn, notify_fn, _a, _client2, _currentResult2, _currentMutation, _mutateOptions, _MutationObserver_instances, updateResult_fn, notify_fn2, _b;
import { P as ProtocolError, T as TimeoutWaitingForResponseErrorCode, k as utf8ToBytes, E as ExternalError, M as MissingRootKeyErrorCode, C as Certificate, l as lookupResultToBuffer, m as RequestStatusResponseStatus, U as UnknownError, n as RequestStatusDoneNoReplyErrorCode, o as RejectError, p as CertifiedRejectErrorCode, q as UNREACHABLE_ERROR, I as InputError, s as InvalidReadStateRequestErrorCode, t as ReadRequestType, v as Principal, w as IDL, x as MissingCanisterIdErrorCode, H as HttpAgent, y as encode, Q as QueryResponseStatus, z as UncertifiedRejectErrorCode, A as isV3ResponseBody, B as isV2ResponseBody, D as UncertifiedRejectUpdateErrorCode, F as UnexpectedErrorCode, G as decode, J as Subscribable, K as pendingThenable, N as resolveEnabled, O as shallowEqualObjects, V as resolveStaleTime, W as noop, Y as environmentManager, Z as isValidTimeout, _ as timeUntilStale, $ as timeoutManager, a0 as focusManager, a1 as fetchState, a2 as replaceData, a3 as notifyManager, a4 as hashKey, a5 as getDefaultState, r as reactExports, a6 as shouldThrowError, a7 as useQueryClient, a as useInternetIdentity, a8 as createActorWithConfig, a9 as Variant, aa as Record, ab as Vec, ac as Service, ad as Func, ae as Opt, af as Nat, ag as Text, ah as Null, ai as Int, aj as Principal$1, ak as Bool, al as useXpStore } from "./index-BB65hrJ6.js";
const FIVE_MINUTES_IN_MSEC = 5 * 60 * 1e3;
function defaultStrategy() {
  return chain(conditionalDelay(once(), 1e3), backoff(1e3, 1.2), timeout(FIVE_MINUTES_IN_MSEC));
}
function once() {
  let first = true;
  return async () => {
    if (first) {
      first = false;
      return true;
    }
    return false;
  };
}
function conditionalDelay(condition, timeInMsec) {
  return async (canisterId, requestId, status) => {
    if (await condition(canisterId, requestId, status)) {
      return new Promise((resolve) => setTimeout(resolve, timeInMsec));
    }
  };
}
function timeout(timeInMsec) {
  const end = Date.now() + timeInMsec;
  return async (_canisterId, requestId, status) => {
    if (Date.now() > end) {
      throw ProtocolError.fromCode(new TimeoutWaitingForResponseErrorCode(`Request timed out after ${timeInMsec} msec`, requestId, status));
    }
  };
}
function backoff(startingThrottleInMsec, backoffFactor) {
  let currentThrottling = startingThrottleInMsec;
  return () => new Promise((resolve) => setTimeout(() => {
    currentThrottling *= backoffFactor;
    resolve();
  }, currentThrottling));
}
function chain(...strategies) {
  return async (canisterId, requestId, status) => {
    for (const a of strategies) {
      await a(canisterId, requestId, status);
    }
  };
}
const DEFAULT_POLLING_OPTIONS = {
  preSignReadStateRequest: false
};
function hasProperty(value, property) {
  return Object.prototype.hasOwnProperty.call(value, property);
}
function isObjectWithProperty(value, property) {
  return value !== null && typeof value === "object" && hasProperty(value, property);
}
function hasFunction(value, property) {
  return hasProperty(value, property) && typeof value[property] === "function";
}
function isSignedReadStateRequestWithExpiry(value) {
  return isObjectWithProperty(value, "body") && isObjectWithProperty(value.body, "content") && value.body.content.request_type === ReadRequestType.ReadState && isObjectWithProperty(value.body.content, "ingress_expiry") && typeof value.body.content.ingress_expiry === "object" && value.body.content.ingress_expiry !== null && hasFunction(value.body.content.ingress_expiry, "toHash");
}
async function pollForResponse(agent, canisterId, requestId, options = {}) {
  const path = [utf8ToBytes("request_status"), requestId];
  let state;
  let currentRequest;
  const preSignReadStateRequest = options.preSignReadStateRequest ?? false;
  if (preSignReadStateRequest) {
    currentRequest = await constructRequest({
      paths: [path],
      agent,
      pollingOptions: options
    });
    state = await agent.readState(canisterId, { paths: [path] }, void 0, currentRequest);
  } else {
    state = await agent.readState(canisterId, { paths: [path] });
  }
  if (agent.rootKey == null) {
    throw ExternalError.fromCode(new MissingRootKeyErrorCode());
  }
  const cert = await Certificate.create({
    certificate: state.certificate,
    rootKey: agent.rootKey,
    canisterId,
    blsVerify: options.blsVerify,
    agent
  });
  const maybeBuf = lookupResultToBuffer(cert.lookup_path([...path, utf8ToBytes("status")]));
  let status;
  if (typeof maybeBuf === "undefined") {
    status = RequestStatusResponseStatus.Unknown;
  } else {
    status = new TextDecoder().decode(maybeBuf);
  }
  switch (status) {
    case RequestStatusResponseStatus.Replied: {
      return {
        reply: lookupResultToBuffer(cert.lookup_path([...path, "reply"])),
        certificate: cert
      };
    }
    case RequestStatusResponseStatus.Received:
    case RequestStatusResponseStatus.Unknown:
    case RequestStatusResponseStatus.Processing: {
      const strategy = options.strategy ?? defaultStrategy();
      await strategy(canisterId, requestId, status);
      return pollForResponse(agent, canisterId, requestId, {
        ...options,
        // Pass over either the strategy already provided or the new one created above
        strategy,
        request: currentRequest
      });
    }
    case RequestStatusResponseStatus.Rejected: {
      const rejectCode = new Uint8Array(lookupResultToBuffer(cert.lookup_path([...path, "reject_code"])))[0];
      const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(cert.lookup_path([...path, "reject_message"])));
      const errorCodeBuf = lookupResultToBuffer(cert.lookup_path([...path, "error_code"]));
      const errorCode = errorCodeBuf ? new TextDecoder().decode(errorCodeBuf) : void 0;
      throw RejectError.fromCode(new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, errorCode));
    }
    case RequestStatusResponseStatus.Done:
      throw UnknownError.fromCode(new RequestStatusDoneNoReplyErrorCode(requestId));
  }
  throw UNREACHABLE_ERROR;
}
async function constructRequest(options) {
  var _a2;
  const { paths, agent, pollingOptions } = options;
  if (pollingOptions.request && isSignedReadStateRequestWithExpiry(pollingOptions.request)) {
    return pollingOptions.request;
  }
  const request = await ((_a2 = agent.createReadStateRequest) == null ? void 0 : _a2.call(agent, {
    paths
  }, void 0));
  if (!isSignedReadStateRequestWithExpiry(request)) {
    throw InputError.fromCode(new InvalidReadStateRequestErrorCode(request));
  }
  return request;
}
const metadataSymbol = Symbol.for("ic-agent-metadata");
class Actor {
  /**
   * Get the Agent class this Actor would call, or undefined if the Actor would use
   * the default agent (global.ic.agent).
   * @param actor The actor to get the agent of.
   */
  static agentOf(actor) {
    return actor[metadataSymbol].config.agent;
  }
  /**
   * Get the interface of an actor, in the form of an instance of a Service.
   * @param actor The actor to get the interface of.
   */
  static interfaceOf(actor) {
    return actor[metadataSymbol].service;
  }
  static canisterIdOf(actor) {
    return Principal.from(actor[metadataSymbol].config.canisterId);
  }
  static createActorClass(interfaceFactory, options) {
    const service = interfaceFactory({ IDL });
    class CanisterActor extends Actor {
      constructor(config) {
        if (!config.canisterId) {
          throw InputError.fromCode(new MissingCanisterIdErrorCode(config.canisterId));
        }
        const canisterId = typeof config.canisterId === "string" ? Principal.fromText(config.canisterId) : config.canisterId;
        super({
          config: {
            ...DEFAULT_ACTOR_CONFIG,
            ...config,
            canisterId
          },
          service
        });
        for (const [methodName, func] of service._fields) {
          if (options == null ? void 0 : options.httpDetails) {
            func.annotations.push(ACTOR_METHOD_WITH_HTTP_DETAILS);
          }
          if (options == null ? void 0 : options.certificate) {
            func.annotations.push(ACTOR_METHOD_WITH_CERTIFICATE);
          }
          this[methodName] = _createActorMethod(this, methodName, func, config.blsVerify);
        }
      }
    }
    return CanisterActor;
  }
  /**
   * Creates an actor with the given interface factory and configuration.
   *
   * The [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package can be used to generate the interface factory for your canister.
   * @param interfaceFactory - the interface factory for the actor, typically generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package
   * @param configuration - the configuration for the actor
   * @returns an actor with the given interface factory and configuration
   * @example
   * Using the interface factory generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { Actor, HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { idlFactory } from './api/declarations/hello-world.did';
   *
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = Actor.createActor(idlFactory, {
   *   agent,
   *   canisterId,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   * @example
   * Using the `createActor` wrapper function generated by the [`@icp-sdk/bindgen`](https://js.icp.build/bindgen/) package:
   * ```ts
   * import { HttpAgent } from '@icp-sdk/core/agent';
   * import { Principal } from '@icp-sdk/core/principal';
   * import { createActor } from './api/hello-world';
   *
   * const canisterId = Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai');
   *
   * const agent = await HttpAgent.create({
   *   host: 'https://icp-api.io',
   * });
   *
   * const actor = createActor(canisterId, {
   *   agent,
   * });
   *
   * const response = await actor.greet('world');
   * console.log(response);
   * ```
   */
  static createActor(interfaceFactory, configuration) {
    if (!configuration.canisterId) {
      throw InputError.fromCode(new MissingCanisterIdErrorCode(configuration.canisterId));
    }
    return new (this.createActorClass(interfaceFactory))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @deprecated - use createActor with actorClassOptions instead
   */
  static createActorWithHttpDetails(interfaceFactory, configuration) {
    return new (this.createActorClass(interfaceFactory, { httpDetails: true }))(configuration);
  }
  /**
   * Returns an actor with methods that return the http response details along with the result
   * @param interfaceFactory - the interface factory for the actor
   * @param configuration - the configuration for the actor
   * @param actorClassOptions - options for the actor class extended details to return with the result
   */
  static createActorWithExtendedDetails(interfaceFactory, configuration, actorClassOptions = {
    httpDetails: true,
    certificate: true
  }) {
    return new (this.createActorClass(interfaceFactory, actorClassOptions))(configuration);
  }
  constructor(metadata) {
    this[metadataSymbol] = Object.freeze(metadata);
  }
}
function decodeReturnValue(types, msg) {
  const returnValues = decode(types, msg);
  switch (returnValues.length) {
    case 0:
      return void 0;
    case 1:
      return returnValues[0];
    default:
      return returnValues;
  }
}
const DEFAULT_ACTOR_CONFIG = {
  pollingOptions: DEFAULT_POLLING_OPTIONS
};
const ACTOR_METHOD_WITH_HTTP_DETAILS = "http-details";
const ACTOR_METHOD_WITH_CERTIFICATE = "certificate";
function _createActorMethod(actor, methodName, func, blsVerify) {
  let caller;
  if (func.annotations.includes("query") || func.annotations.includes("composite_query")) {
    caller = async (options, ...args) => {
      var _a2, _b2;
      options = {
        ...options,
        ...(_b2 = (_a2 = actor[metadataSymbol].config).queryTransform) == null ? void 0 : _b2.call(_a2, methodName, args, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || new HttpAgent();
      const cid = Principal.from(options.canisterId || actor[metadataSymbol].config.canisterId);
      const arg = encode(func.argTypes, args);
      const result = await agent.query(cid, {
        methodName,
        arg,
        effectiveCanisterId: options.effectiveCanisterId
      });
      const httpDetails = {
        ...result.httpDetails,
        requestDetails: result.requestDetails
      };
      switch (result.status) {
        case QueryResponseStatus.Rejected: {
          const uncertifiedRejectErrorCode = new UncertifiedRejectErrorCode(result.requestId, result.reject_code, result.reject_message, result.error_code, result.signatures);
          uncertifiedRejectErrorCode.callContext = {
            canisterId: cid,
            methodName,
            httpDetails
          };
          throw RejectError.fromCode(uncertifiedRejectErrorCode);
        }
        case QueryResponseStatus.Replied:
          return func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS) ? {
            httpDetails,
            result: decodeReturnValue(func.retTypes, result.reply.arg)
          } : decodeReturnValue(func.retTypes, result.reply.arg);
      }
    };
  } else {
    caller = async (options, ...args) => {
      var _a2, _b2;
      options = {
        ...options,
        ...(_b2 = (_a2 = actor[metadataSymbol].config).callTransform) == null ? void 0 : _b2.call(_a2, methodName, args, {
          ...actor[metadataSymbol].config,
          ...options
        })
      };
      const agent = options.agent || actor[metadataSymbol].config.agent || HttpAgent.createSync();
      const { canisterId, effectiveCanisterId, pollingOptions } = {
        ...DEFAULT_ACTOR_CONFIG,
        ...actor[metadataSymbol].config,
        ...options
      };
      const cid = Principal.from(canisterId);
      const ecid = effectiveCanisterId !== void 0 ? Principal.from(effectiveCanisterId) : cid;
      const arg = encode(func.argTypes, args);
      const { requestId, response, requestDetails } = await agent.call(cid, {
        methodName,
        arg,
        effectiveCanisterId: ecid,
        nonce: options.nonce
      });
      let reply;
      let certificate;
      if (isV3ResponseBody(response.body)) {
        if (agent.rootKey == null) {
          throw ExternalError.fromCode(new MissingRootKeyErrorCode());
        }
        const cert = response.body.certificate;
        certificate = await Certificate.create({
          certificate: cert,
          rootKey: agent.rootKey,
          canisterId: ecid,
          blsVerify,
          agent
        });
        const path = [utf8ToBytes("request_status"), requestId];
        const status = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "status"])));
        switch (status) {
          case "replied":
            reply = lookupResultToBuffer(certificate.lookup_path([...path, "reply"]));
            break;
          case "rejected": {
            const rejectCode = new Uint8Array(lookupResultToBuffer(certificate.lookup_path([...path, "reject_code"])))[0];
            const rejectMessage = new TextDecoder().decode(lookupResultToBuffer(certificate.lookup_path([...path, "reject_message"])));
            const error_code_buf = lookupResultToBuffer(certificate.lookup_path([...path, "error_code"]));
            const error_code = error_code_buf ? new TextDecoder().decode(error_code_buf) : void 0;
            const certifiedRejectErrorCode = new CertifiedRejectErrorCode(requestId, rejectCode, rejectMessage, error_code);
            certifiedRejectErrorCode.callContext = {
              canisterId: cid,
              methodName,
              httpDetails: response
            };
            throw RejectError.fromCode(certifiedRejectErrorCode);
          }
        }
      } else if (isV2ResponseBody(response.body)) {
        const { reject_code, reject_message, error_code } = response.body;
        const errorCode = new UncertifiedRejectUpdateErrorCode(requestId, reject_code, reject_message, error_code);
        errorCode.callContext = {
          canisterId: cid,
          methodName,
          httpDetails: response
        };
        throw RejectError.fromCode(errorCode);
      }
      if (response.status === 202) {
        const pollOptions = {
          ...pollingOptions,
          blsVerify
        };
        const response2 = await pollForResponse(agent, ecid, requestId, pollOptions);
        certificate = response2.certificate;
        reply = response2.reply;
      }
      const shouldIncludeHttpDetails = func.annotations.includes(ACTOR_METHOD_WITH_HTTP_DETAILS);
      const shouldIncludeCertificate = func.annotations.includes(ACTOR_METHOD_WITH_CERTIFICATE);
      const httpDetails = { ...response, requestDetails };
      if (reply !== void 0) {
        if (shouldIncludeHttpDetails && shouldIncludeCertificate) {
          return {
            httpDetails,
            certificate,
            result: decodeReturnValue(func.retTypes, reply)
          };
        } else if (shouldIncludeCertificate) {
          return {
            certificate,
            result: decodeReturnValue(func.retTypes, reply)
          };
        } else if (shouldIncludeHttpDetails) {
          return {
            httpDetails,
            result: decodeReturnValue(func.retTypes, reply)
          };
        }
        return decodeReturnValue(func.retTypes, reply);
      } else {
        const errorCode = new UnexpectedErrorCode(`Call was returned undefined. We cannot determine if the call was successful or not. Return types: [${func.retTypes.map((t) => t.display()).join(",")}].`);
        errorCode.callContext = {
          canisterId: cid,
          methodName,
          httpDetails
        };
        throw UnknownError.fromCode(errorCode);
      }
    };
  }
  const handler = (...args) => caller({}, ...args);
  handler.withOptions = (options) => (...args) => caller(options, ...args);
  return handler;
}
var QueryObserver = (_a = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _QueryObserver_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _currentQuery);
    __privateAdd(this, _currentQueryInitialState);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentResultState);
    __privateAdd(this, _currentResultOptions);
    __privateAdd(this, _currentThenable);
    __privateAdd(this, _selectError);
    __privateAdd(this, _selectFn);
    __privateAdd(this, _selectResult);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    __privateAdd(this, _lastQueryWithDefinedData);
    __privateAdd(this, _staleTimeoutId);
    __privateAdd(this, _refetchIntervalId);
    __privateAdd(this, _currentRefetchInterval);
    __privateAdd(this, _trackedProps, /* @__PURE__ */ new Set());
    this.options = options;
    __privateSet(this, _client, client);
    __privateSet(this, _selectError, null);
    __privateSet(this, _currentThenable, pendingThenable());
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _currentQuery).addObserver(this);
      if (shouldFetchOnMount(__privateGet(this, _currentQuery), this.options)) {
        __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
      } else {
        this.updateResult();
      }
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
    __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
    __privateGet(this, _currentQuery).removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = __privateGet(this, _currentQuery);
    this.options = __privateGet(this, _client).defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
    __privateGet(this, _currentQuery).setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _currentQuery),
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      __privateGet(this, _currentQuery),
      prevQuery,
      this.options,
      prevOptions
    )) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
    this.updateResult();
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, __privateGet(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, __privateGet(this, _currentQuery)))) {
      __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
    }
    const nextRefetchInterval = __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || nextRefetchInterval !== __privateGet(this, _currentRefetchInterval))) {
      __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      __privateSet(this, _currentResult, result);
      __privateSet(this, _currentResultOptions, this.options);
      __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    }
    return result;
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked == null ? void 0 : onPropTracked(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && __privateGet(this, _currentThenable).status === "pending") {
            __privateGet(this, _currentThenable).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    __privateGet(this, _trackedProps).add(key);
  }
  getCurrentQuery() {
    return __privateGet(this, _currentQuery);
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = __privateGet(this, _client).defaultQueryOptions(options);
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this, {
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return __privateGet(this, _currentResult);
    });
  }
  createResult(query, options) {
    var _a2;
    const prevQuery = __privateGet(this, _currentQuery);
    const prevOptions = this.options;
    const prevResult = __privateGet(this, _currentResult);
    const prevResultState = __privateGet(this, _currentResultState);
    const prevResultOptions = __privateGet(this, _currentResultOptions);
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : __privateGet(this, _currentQueryInitialState);
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          (_a2 = __privateGet(this, _lastQueryWithDefinedData)) == null ? void 0 : _a2.state.data,
          __privateGet(this, _lastQueryWithDefinedData)
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult == null ? void 0 : prevResult.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === __privateGet(this, _selectFn)) {
        data = __privateGet(this, _selectResult);
      } else {
        try {
          __privateSet(this, _selectFn, options.select);
          data = options.select(data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          __privateSet(this, _selectResult, data);
          __privateSet(this, _selectError, null);
        } catch (selectError) {
          __privateSet(this, _selectError, selectError);
        }
      }
    }
    if (__privateGet(this, _selectError)) {
      error = __privateGet(this, _selectError);
      data = __privateGet(this, _selectResult);
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: query.isFetched(),
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: __privateGet(this, _currentThenable),
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = (thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = __privateSet(this, _currentThenable, nextResult.promise = pendingThenable());
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = __privateGet(this, _currentThenable);
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = __privateGet(this, _currentResult);
    const nextResult = this.createResult(__privateGet(this, _currentQuery), this.options);
    __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    __privateSet(this, _currentResultOptions, this.options);
    if (__privateGet(this, _currentResultState).data !== void 0) {
      __privateSet(this, _lastQueryWithDefinedData, __privateGet(this, _currentQuery));
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    __privateSet(this, _currentResult, nextResult);
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !__privateGet(this, _trackedProps).size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? __privateGet(this, _trackedProps)
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(__privateGet(this, _currentResult)).some((key) => {
        const typedKey = key;
        const changed = __privateGet(this, _currentResult)[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    __privateMethod(this, _QueryObserver_instances, notify_fn).call(this, { listeners: shouldNotifyListeners() });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
}, _client = new WeakMap(), _currentQuery = new WeakMap(), _currentQueryInitialState = new WeakMap(), _currentResult = new WeakMap(), _currentResultState = new WeakMap(), _currentResultOptions = new WeakMap(), _currentThenable = new WeakMap(), _selectError = new WeakMap(), _selectFn = new WeakMap(), _selectResult = new WeakMap(), _lastQueryWithDefinedData = new WeakMap(), _staleTimeoutId = new WeakMap(), _refetchIntervalId = new WeakMap(), _currentRefetchInterval = new WeakMap(), _trackedProps = new WeakMap(), _QueryObserver_instances = new WeakSet(), executeFetch_fn = function(fetchOptions) {
  __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
  let promise = __privateGet(this, _currentQuery).fetch(
    this.options,
    fetchOptions
  );
  if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
    promise = promise.catch(noop);
  }
  return promise;
}, updateStaleTimeout_fn = function() {
  __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
  const staleTime = resolveStaleTime(
    this.options.staleTime,
    __privateGet(this, _currentQuery)
  );
  if (environmentManager.isServer() || __privateGet(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
    return;
  }
  const time = timeUntilStale(__privateGet(this, _currentResult).dataUpdatedAt, staleTime);
  const timeout2 = time + 1;
  __privateSet(this, _staleTimeoutId, timeoutManager.setTimeout(() => {
    if (!__privateGet(this, _currentResult).isStale) {
      this.updateResult();
    }
  }, timeout2));
}, computeRefetchInterval_fn = function() {
  return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(__privateGet(this, _currentQuery)) : this.options.refetchInterval) ?? false;
}, updateRefetchInterval_fn = function(nextInterval) {
  __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
  __privateSet(this, _currentRefetchInterval, nextInterval);
  if (environmentManager.isServer() || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) === false || !isValidTimeout(__privateGet(this, _currentRefetchInterval)) || __privateGet(this, _currentRefetchInterval) === 0) {
    return;
  }
  __privateSet(this, _refetchIntervalId, timeoutManager.setInterval(() => {
    if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
  }, __privateGet(this, _currentRefetchInterval)));
}, updateTimers_fn = function() {
  __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
  __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this));
}, clearStaleTimeout_fn = function() {
  if (__privateGet(this, _staleTimeoutId)) {
    timeoutManager.clearTimeout(__privateGet(this, _staleTimeoutId));
    __privateSet(this, _staleTimeoutId, void 0);
  }
}, clearRefetchInterval_fn = function() {
  if (__privateGet(this, _refetchIntervalId)) {
    timeoutManager.clearInterval(__privateGet(this, _refetchIntervalId));
    __privateSet(this, _refetchIntervalId, void 0);
  }
}, updateQuery_fn = function() {
  const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), this.options);
  if (query === __privateGet(this, _currentQuery)) {
    return;
  }
  const prevQuery = __privateGet(this, _currentQuery);
  __privateSet(this, _currentQuery, query);
  __privateSet(this, _currentQueryInitialState, query.state);
  if (this.hasListeners()) {
    prevQuery == null ? void 0 : prevQuery.removeObserver(this);
    query.addObserver(this);
  }
}, notify_fn = function(notifyOptions) {
  notifyManager.batch(() => {
    if (notifyOptions.listeners) {
      this.listeners.forEach((listener) => {
        listener(__privateGet(this, _currentResult));
      });
    }
    __privateGet(this, _client).getQueryCache().notify({
      query: __privateGet(this, _currentQuery),
      type: "observerResultsUpdated"
    });
  });
}, _a);
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
var MutationObserver = (_b = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _MutationObserver_instances);
    __privateAdd(this, _client2);
    __privateAdd(this, _currentResult2);
    __privateAdd(this, _currentMutation);
    __privateAdd(this, _mutateOptions);
    __privateSet(this, _client2, client);
    this.setOptions(options);
    this.bindMethods();
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _a2;
    const prevOptions = this.options;
    this.options = __privateGet(this, _client2).defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client2).getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: __privateGet(this, _currentMutation),
        observer: this
      });
    }
    if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state.status) === "pending") {
      __privateGet(this, _currentMutation).setOptions(this.options);
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn2).call(this, action);
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult2);
  }
  reset() {
    var _a2;
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, void 0);
    __privateMethod(this, _MutationObserver_instances, updateResult_fn).call(this);
    __privateMethod(this, _MutationObserver_instances, notify_fn2).call(this);
  }
  mutate(variables, options) {
    var _a2;
    __privateSet(this, _mutateOptions, options);
    (_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.removeObserver(this);
    __privateSet(this, _currentMutation, __privateGet(this, _client2).getMutationCache().build(__privateGet(this, _client2), this.options));
    __privateGet(this, _currentMutation).addObserver(this);
    return __privateGet(this, _currentMutation).execute(variables);
  }
}, _client2 = new WeakMap(), _currentResult2 = new WeakMap(), _currentMutation = new WeakMap(), _mutateOptions = new WeakMap(), _MutationObserver_instances = new WeakSet(), updateResult_fn = function() {
  var _a2;
  const state = ((_a2 = __privateGet(this, _currentMutation)) == null ? void 0 : _a2.state) ?? getDefaultState();
  __privateSet(this, _currentResult2, {
    ...state,
    isPending: state.status === "pending",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    isIdle: state.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, notify_fn2 = function(action) {
  notifyManager.batch(() => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    if (__privateGet(this, _mutateOptions) && this.hasListeners()) {
      const variables = __privateGet(this, _currentResult2).variables;
      const onMutateResult = __privateGet(this, _currentResult2).context;
      const context = {
        client: __privateGet(this, _client2),
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
      if ((action == null ? void 0 : action.type) === "success") {
        try {
          (_b2 = (_a2 = __privateGet(this, _mutateOptions)).onSuccess) == null ? void 0 : _b2.call(
            _a2,
            action.data,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_d = (_c = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _d.call(
            _c,
            action.data,
            null,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      } else if ((action == null ? void 0 : action.type) === "error") {
        try {
          (_f = (_e = __privateGet(this, _mutateOptions)).onError) == null ? void 0 : _f.call(
            _e,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
        try {
          (_h = (_g = __privateGet(this, _mutateOptions)).onSettled) == null ? void 0 : _h.call(
            _g,
            void 0,
            action.error,
            variables,
            onMutateResult,
            context
          );
        } catch (e) {
          void Promise.reject(e);
        }
      }
    }
    this.listeners.forEach((listener) => {
      listener(__privateGet(this, _currentResult2));
    });
  });
}, _b);
var IsRestoringContext = reactExports.createContext(false);
var useIsRestoring = () => reactExports.useContext(IsRestoringContext);
IsRestoringContext.Provider;
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = reactExports.createContext(createValue());
var useQueryErrorResetBoundary = () => reactExports.useContext(QueryErrorResetBoundaryContext);
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
  const throwOnError = (query == null ? void 0 : query.state.error) && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  reactExports.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
function useBaseQuery(options, Observer, queryClient) {
  var _a2, _b2, _c, _d;
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client = useQueryClient();
  const defaultedOptions = client.defaultQueryOptions(options);
  (_b2 = (_a2 = client.getDefaultOptions().queries) == null ? void 0 : _a2._experimental_beforeQuery) == null ? void 0 : _b2.call(
    _a2,
    defaultedOptions
  );
  const query = client.getQueryCache().get(defaultedOptions.queryHash);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = reactExports.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  reactExports.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query,
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  (_d = (_c = client.getDefaultOptions().queries) == null ? void 0 : _c._experimental_afterQuery) == null ? void 0 : _d.call(
    _c,
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !environmentManager.isServer() && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      query == null ? void 0 : query.promise
    );
    promise == null ? void 0 : promise.catch(noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}
function useMutation(options, queryClient) {
  const client = useQueryClient();
  const [observer] = reactExports.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  reactExports.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = reactExports.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}
function hasAccessControl(actor) {
  return typeof actor === "object" && actor !== null && "_initializeAccessControl" in actor;
}
const ACTOR_QUERY_KEY = "actor";
function useActor(createActor2) {
  const { identity, isAuthenticated } = useInternetIdentity();
  const queryClient = useQueryClient();
  const actorQuery = useQuery({
    queryKey: [ACTOR_QUERY_KEY, identity == null ? void 0 : identity.getPrincipal().toString()],
    queryFn: async () => {
      if (!isAuthenticated) {
        return await createActorWithConfig(createActor2);
      }
      const actorOptions = {
        agentOptions: {
          identity
        }
      };
      const actor = await createActorWithConfig(createActor2, actorOptions);
      if (hasAccessControl(actor)) {
        await actor._initializeAccessControl();
      }
      return actor;
    },
    // Only refetch when identity changes
    staleTime: Number.POSITIVE_INFINITY,
    // This will cause the actor to be recreated when the identity changes
    enabled: true
  });
  reactExports.useEffect(() => {
    if (actorQuery.data) {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return !query.queryKey.includes(ACTOR_QUERY_KEY);
        }
      });
      queryClient.refetchQueries({
        predicate: (query) => {
          return !query.queryKey.includes(ACTOR_QUERY_KEY);
        }
      });
    }
  }, [actorQuery.data, queryClient]);
  return {
    actor: actorQuery.data || null,
    isFetching: actorQuery.isFetching
  };
}
const XpAction = Variant({
  "RemixIdea": Null,
  "ShareIdea": Null,
  "ReceiveLike": Null,
  "GenerateIdea": Null
});
const CreateProjectInput = Record({
  "name": Text,
  "tags": Vec(Text),
  "description": Text,
  "featureList": Vec(Text)
});
const ProjectId = Nat;
const ProjectStatus = Variant({
  "deployed": Null,
  "active": Null,
  "draft": Null
});
const UserId = Principal$1;
const Timestamp = Int;
const Project = Record({
  "id": ProjectId,
  "status": ProjectStatus,
  "owner": UserId,
  "name": Text,
  "createdAt": Timestamp,
  "tags": Vec(Text),
  "description": Text,
  "updatedAt": Timestamp,
  "featureList": Vec(Text)
});
const AiFeatureSuggestion = Record({
  "id": Nat,
  "title": Text,
  "description": Text,
  "category": Text,
  "priority": Nat
});
const CreatorLevel = Variant({
  "Dreamer": Null,
  "Builder": Null,
  "Legend": Null,
  "Creator": Null
});
const LeaderboardEntry = Record({
  "displayName": Text,
  "userId": Principal$1,
  "totalXp": Nat,
  "rank": Nat,
  "ideasCount": Nat,
  "level": CreatorLevel
});
const UserProfile = Record({
  "displayName": Text,
  "userId": UserId,
  "createdAt": Timestamp,
  "totalProjects": Nat
});
const CreatorStats = Record({
  "streak": Nat,
  "userId": Principal$1,
  "totalXp": Nat,
  "level": CreatorLevel,
  "ideasGenerated": Nat,
  "totalLikes": Nat,
  "totalRemixes": Nat
});
const PublicIdea = Record({
  "id": Nat,
  "uniquenessScore": Nat,
  "features": Vec(Text),
  "likeCount": Nat,
  "remixCount": Nat,
  "earningModel": Text,
  "colorTheme": Text,
  "appName": Text,
  "createdAt": Timestamp,
  "creatorId": Principal$1,
  "description": Text,
  "marketScore": Nat,
  "creatorName": Text,
  "viewCount": Nat,
  "viralScore": Nat,
  "successScore": Nat,
  "category": Text,
  "isPublic": Bool,
  "monetizationScore": Nat
});
const TemplateId = Nat;
const Template = Record({
  "id": TemplateId,
  "name": Text,
  "description": Text,
  "category": Text,
  "featureList": Vec(Text)
});
const PublishIdeaInput = Record({
  "features": Vec(Text),
  "earningModel": Text,
  "colorTheme": Text,
  "appName": Text,
  "description": Text,
  "category": Text
});
const UpdateProjectInput = Record({
  "status": ProjectStatus,
  "name": Text,
  "tags": Vec(Text),
  "description": Text,
  "featureList": Vec(Text)
});
Service({
  "awardXpForAction": Func([XpAction], [Nat], []),
  "createProject": Func([CreateProjectInput], [Project], []),
  "deleteProject": Func([ProjectId], [Bool], []),
  "generate": Func(
    [Text, Text],
    [
      Record({
        "ai": Text,
        "trend": Text,
        "lucky": Text,
        "image": Text
      })
    ],
    []
  ),
  "getAiSuggestions": Func(
    [ProjectId],
    [Vec(AiFeatureSuggestion)],
    ["query"]
  ),
  "getLeaderboard": Func(
    [Nat],
    [Vec(LeaderboardEntry)],
    ["query"]
  ),
  "getMyProfile": Func([], [UserProfile], []),
  "getMyStats": Func([], [CreatorStats], []),
  "getProject": Func([ProjectId], [Opt(Project)], ["query"]),
  "getPublicIdea": Func([Nat], [Opt(PublicIdea)], ["query"]),
  "getTemplate": Func([TemplateId], [Opt(Template)], ["query"]),
  "incrementViewCount": Func([Nat], [], []),
  "likeIdea": Func([Nat], [Nat], []),
  "listMyProjects": Func([], [Vec(Project)], ["query"]),
  "listPublicIdeas": Func(
    [
      Variant({
        "trending": Null,
        "newest": Null,
        "mostRemixed": Null,
        "mostLiked": Null
      }),
      Opt(Text),
      Nat
    ],
    [Vec(PublicIdea)],
    ["query"]
  ),
  "listTemplates": Func(
    [Opt(Text)],
    [Vec(Template)],
    ["query"]
  ),
  "publishIdea": Func([PublishIdeaInput], [Nat], []),
  "remixIdea": Func([Nat], [PublicIdea], []),
  "updateDisplayName": Func([Text], [Bool], []),
  "updateProject": Func([ProjectId, UpdateProjectInput], [Bool], [])
});
const idlFactory = ({ IDL: IDL2 }) => {
  const XpAction2 = IDL2.Variant({
    "RemixIdea": IDL2.Null,
    "ShareIdea": IDL2.Null,
    "ReceiveLike": IDL2.Null,
    "GenerateIdea": IDL2.Null
  });
  const CreateProjectInput2 = IDL2.Record({
    "name": IDL2.Text,
    "tags": IDL2.Vec(IDL2.Text),
    "description": IDL2.Text,
    "featureList": IDL2.Vec(IDL2.Text)
  });
  const ProjectId2 = IDL2.Nat;
  const ProjectStatus2 = IDL2.Variant({
    "deployed": IDL2.Null,
    "active": IDL2.Null,
    "draft": IDL2.Null
  });
  const UserId2 = IDL2.Principal;
  const Timestamp2 = IDL2.Int;
  const Project2 = IDL2.Record({
    "id": ProjectId2,
    "status": ProjectStatus2,
    "owner": UserId2,
    "name": IDL2.Text,
    "createdAt": Timestamp2,
    "tags": IDL2.Vec(IDL2.Text),
    "description": IDL2.Text,
    "updatedAt": Timestamp2,
    "featureList": IDL2.Vec(IDL2.Text)
  });
  const AiFeatureSuggestion2 = IDL2.Record({
    "id": IDL2.Nat,
    "title": IDL2.Text,
    "description": IDL2.Text,
    "category": IDL2.Text,
    "priority": IDL2.Nat
  });
  const CreatorLevel2 = IDL2.Variant({
    "Dreamer": IDL2.Null,
    "Builder": IDL2.Null,
    "Legend": IDL2.Null,
    "Creator": IDL2.Null
  });
  const LeaderboardEntry2 = IDL2.Record({
    "displayName": IDL2.Text,
    "userId": IDL2.Principal,
    "totalXp": IDL2.Nat,
    "rank": IDL2.Nat,
    "ideasCount": IDL2.Nat,
    "level": CreatorLevel2
  });
  const UserProfile2 = IDL2.Record({
    "displayName": IDL2.Text,
    "userId": UserId2,
    "createdAt": Timestamp2,
    "totalProjects": IDL2.Nat
  });
  const CreatorStats2 = IDL2.Record({
    "streak": IDL2.Nat,
    "userId": IDL2.Principal,
    "totalXp": IDL2.Nat,
    "level": CreatorLevel2,
    "ideasGenerated": IDL2.Nat,
    "totalLikes": IDL2.Nat,
    "totalRemixes": IDL2.Nat
  });
  const PublicIdea2 = IDL2.Record({
    "id": IDL2.Nat,
    "uniquenessScore": IDL2.Nat,
    "features": IDL2.Vec(IDL2.Text),
    "likeCount": IDL2.Nat,
    "remixCount": IDL2.Nat,
    "earningModel": IDL2.Text,
    "colorTheme": IDL2.Text,
    "appName": IDL2.Text,
    "createdAt": Timestamp2,
    "creatorId": IDL2.Principal,
    "description": IDL2.Text,
    "marketScore": IDL2.Nat,
    "creatorName": IDL2.Text,
    "viewCount": IDL2.Nat,
    "viralScore": IDL2.Nat,
    "successScore": IDL2.Nat,
    "category": IDL2.Text,
    "isPublic": IDL2.Bool,
    "monetizationScore": IDL2.Nat
  });
  const TemplateId2 = IDL2.Nat;
  const Template2 = IDL2.Record({
    "id": TemplateId2,
    "name": IDL2.Text,
    "description": IDL2.Text,
    "category": IDL2.Text,
    "featureList": IDL2.Vec(IDL2.Text)
  });
  const PublishIdeaInput2 = IDL2.Record({
    "features": IDL2.Vec(IDL2.Text),
    "earningModel": IDL2.Text,
    "colorTheme": IDL2.Text,
    "appName": IDL2.Text,
    "description": IDL2.Text,
    "category": IDL2.Text
  });
  const UpdateProjectInput2 = IDL2.Record({
    "status": ProjectStatus2,
    "name": IDL2.Text,
    "tags": IDL2.Vec(IDL2.Text),
    "description": IDL2.Text,
    "featureList": IDL2.Vec(IDL2.Text)
  });
  return IDL2.Service({
    "awardXpForAction": IDL2.Func([XpAction2], [IDL2.Nat], []),
    "createProject": IDL2.Func([CreateProjectInput2], [Project2], []),
    "deleteProject": IDL2.Func([ProjectId2], [IDL2.Bool], []),
    "generate": IDL2.Func(
      [IDL2.Text, IDL2.Text],
      [
        IDL2.Record({
          "ai": IDL2.Text,
          "trend": IDL2.Text,
          "lucky": IDL2.Text,
          "image": IDL2.Text
        })
      ],
      []
    ),
    "getAiSuggestions": IDL2.Func(
      [ProjectId2],
      [IDL2.Vec(AiFeatureSuggestion2)],
      ["query"]
    ),
    "getLeaderboard": IDL2.Func(
      [IDL2.Nat],
      [IDL2.Vec(LeaderboardEntry2)],
      ["query"]
    ),
    "getMyProfile": IDL2.Func([], [UserProfile2], []),
    "getMyStats": IDL2.Func([], [CreatorStats2], []),
    "getProject": IDL2.Func([ProjectId2], [IDL2.Opt(Project2)], ["query"]),
    "getPublicIdea": IDL2.Func([IDL2.Nat], [IDL2.Opt(PublicIdea2)], ["query"]),
    "getTemplate": IDL2.Func([TemplateId2], [IDL2.Opt(Template2)], ["query"]),
    "incrementViewCount": IDL2.Func([IDL2.Nat], [], []),
    "likeIdea": IDL2.Func([IDL2.Nat], [IDL2.Nat], []),
    "listMyProjects": IDL2.Func([], [IDL2.Vec(Project2)], ["query"]),
    "listPublicIdeas": IDL2.Func(
      [
        IDL2.Variant({
          "trending": IDL2.Null,
          "newest": IDL2.Null,
          "mostRemixed": IDL2.Null,
          "mostLiked": IDL2.Null
        }),
        IDL2.Opt(IDL2.Text),
        IDL2.Nat
      ],
      [IDL2.Vec(PublicIdea2)],
      ["query"]
    ),
    "listTemplates": IDL2.Func(
      [IDL2.Opt(IDL2.Text)],
      [IDL2.Vec(Template2)],
      ["query"]
    ),
    "publishIdea": IDL2.Func([PublishIdeaInput2], [IDL2.Nat], []),
    "remixIdea": IDL2.Func([IDL2.Nat], [PublicIdea2], []),
    "updateDisplayName": IDL2.Func([IDL2.Text], [IDL2.Bool], []),
    "updateProject": IDL2.Func([ProjectId2, UpdateProjectInput2], [IDL2.Bool], [])
  });
};
function candid_some(value) {
  return [
    value
  ];
}
function candid_none() {
  return [];
}
class Backend {
  constructor(actor, _uploadFile, _downloadFile, processError) {
    this.actor = actor;
    this._uploadFile = _uploadFile;
    this._downloadFile = _downloadFile;
    this.processError = processError;
  }
  async awardXpForAction(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.awardXpForAction(to_candid_XpAction_n1(this._uploadFile, this._downloadFile, arg0));
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.awardXpForAction(to_candid_XpAction_n1(this._uploadFile, this._downloadFile, arg0));
      return result;
    }
  }
  async createProject(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.createProject(arg0);
        return from_candid_Project_n3(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.createProject(arg0);
      return from_candid_Project_n3(this._uploadFile, this._downloadFile, result);
    }
  }
  async deleteProject(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.deleteProject(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.deleteProject(arg0);
      return result;
    }
  }
  async generate(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.generate(arg0, arg1);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.generate(arg0, arg1);
      return result;
    }
  }
  async getAiSuggestions(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getAiSuggestions(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAiSuggestions(arg0);
      return result;
    }
  }
  async getLeaderboard(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getLeaderboard(arg0);
        return from_candid_vec_n7(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getLeaderboard(arg0);
      return from_candid_vec_n7(this._uploadFile, this._downloadFile, result);
    }
  }
  async getMyProfile() {
    if (this.processError) {
      try {
        const result = await this.actor.getMyProfile();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getMyProfile();
      return result;
    }
  }
  async getMyStats() {
    if (this.processError) {
      try {
        const result = await this.actor.getMyStats();
        return from_candid_CreatorStats_n12(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getMyStats();
      return from_candid_CreatorStats_n12(this._uploadFile, this._downloadFile, result);
    }
  }
  async getProject(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getProject(arg0);
        return from_candid_opt_n14(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getProject(arg0);
      return from_candid_opt_n14(this._uploadFile, this._downloadFile, result);
    }
  }
  async getPublicIdea(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getPublicIdea(arg0);
        return from_candid_opt_n15(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getPublicIdea(arg0);
      return from_candid_opt_n15(this._uploadFile, this._downloadFile, result);
    }
  }
  async getTemplate(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getTemplate(arg0);
        return from_candid_opt_n16(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getTemplate(arg0);
      return from_candid_opt_n16(this._uploadFile, this._downloadFile, result);
    }
  }
  async incrementViewCount(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.incrementViewCount(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.incrementViewCount(arg0);
      return result;
    }
  }
  async likeIdea(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.likeIdea(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.likeIdea(arg0);
      return result;
    }
  }
  async listMyProjects() {
    if (this.processError) {
      try {
        const result = await this.actor.listMyProjects();
        return from_candid_vec_n17(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.listMyProjects();
      return from_candid_vec_n17(this._uploadFile, this._downloadFile, result);
    }
  }
  async listPublicIdeas(arg0, arg1, arg2) {
    if (this.processError) {
      try {
        const result = await this.actor.listPublicIdeas(to_candid_variant_n18(this._uploadFile, this._downloadFile, arg0), to_candid_opt_n19(this._uploadFile, this._downloadFile, arg1), arg2);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.listPublicIdeas(to_candid_variant_n18(this._uploadFile, this._downloadFile, arg0), to_candid_opt_n19(this._uploadFile, this._downloadFile, arg1), arg2);
      return result;
    }
  }
  async listTemplates(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.listTemplates(to_candid_opt_n19(this._uploadFile, this._downloadFile, arg0));
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.listTemplates(to_candid_opt_n19(this._uploadFile, this._downloadFile, arg0));
      return result;
    }
  }
  async publishIdea(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.publishIdea(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.publishIdea(arg0);
      return result;
    }
  }
  async remixIdea(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.remixIdea(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.remixIdea(arg0);
      return result;
    }
  }
  async updateDisplayName(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.updateDisplayName(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.updateDisplayName(arg0);
      return result;
    }
  }
  async updateProject(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.updateProject(arg0, to_candid_UpdateProjectInput_n20(this._uploadFile, this._downloadFile, arg1));
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.updateProject(arg0, to_candid_UpdateProjectInput_n20(this._uploadFile, this._downloadFile, arg1));
      return result;
    }
  }
}
function from_candid_CreatorLevel_n10(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n11(_uploadFile, _downloadFile, value);
}
function from_candid_CreatorStats_n12(_uploadFile, _downloadFile, value) {
  return from_candid_record_n13(_uploadFile, _downloadFile, value);
}
function from_candid_LeaderboardEntry_n8(_uploadFile, _downloadFile, value) {
  return from_candid_record_n9(_uploadFile, _downloadFile, value);
}
function from_candid_ProjectStatus_n5(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n6(_uploadFile, _downloadFile, value);
}
function from_candid_Project_n3(_uploadFile, _downloadFile, value) {
  return from_candid_record_n4(_uploadFile, _downloadFile, value);
}
function from_candid_opt_n14(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_Project_n3(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n15(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
function from_candid_opt_n16(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
function from_candid_record_n13(_uploadFile, _downloadFile, value) {
  return {
    streak: value.streak,
    userId: value.userId,
    totalXp: value.totalXp,
    level: from_candid_CreatorLevel_n10(_uploadFile, _downloadFile, value.level),
    ideasGenerated: value.ideasGenerated,
    totalLikes: value.totalLikes,
    totalRemixes: value.totalRemixes
  };
}
function from_candid_record_n4(_uploadFile, _downloadFile, value) {
  return {
    id: value.id,
    status: from_candid_ProjectStatus_n5(_uploadFile, _downloadFile, value.status),
    owner: value.owner,
    name: value.name,
    createdAt: value.createdAt,
    tags: value.tags,
    description: value.description,
    updatedAt: value.updatedAt,
    featureList: value.featureList
  };
}
function from_candid_record_n9(_uploadFile, _downloadFile, value) {
  return {
    displayName: value.displayName,
    userId: value.userId,
    totalXp: value.totalXp,
    rank: value.rank,
    ideasCount: value.ideasCount,
    level: from_candid_CreatorLevel_n10(_uploadFile, _downloadFile, value.level)
  };
}
function from_candid_variant_n11(_uploadFile, _downloadFile, value) {
  return "Dreamer" in value ? "Dreamer" : "Builder" in value ? "Builder" : "Legend" in value ? "Legend" : "Creator" in value ? "Creator" : value;
}
function from_candid_variant_n6(_uploadFile, _downloadFile, value) {
  return "deployed" in value ? "deployed" : "active" in value ? "active" : "draft" in value ? "draft" : value;
}
function from_candid_vec_n17(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_Project_n3(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n7(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_LeaderboardEntry_n8(_uploadFile, _downloadFile, x));
}
function to_candid_ProjectStatus_n22(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n23(_uploadFile, _downloadFile, value);
}
function to_candid_UpdateProjectInput_n20(_uploadFile, _downloadFile, value) {
  return to_candid_record_n21(_uploadFile, _downloadFile, value);
}
function to_candid_XpAction_n1(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n2(_uploadFile, _downloadFile, value);
}
function to_candid_opt_n19(_uploadFile, _downloadFile, value) {
  return value === null ? candid_none() : candid_some(value);
}
function to_candid_record_n21(_uploadFile, _downloadFile, value) {
  return {
    status: to_candid_ProjectStatus_n22(_uploadFile, _downloadFile, value.status),
    name: value.name,
    tags: value.tags,
    description: value.description,
    featureList: value.featureList
  };
}
function to_candid_variant_n18(_uploadFile, _downloadFile, value) {
  return value == "trending" ? {
    trending: null
  } : value == "newest" ? {
    newest: null
  } : value == "mostRemixed" ? {
    mostRemixed: null
  } : value == "mostLiked" ? {
    mostLiked: null
  } : value;
}
function to_candid_variant_n2(_uploadFile, _downloadFile, value) {
  return value == "RemixIdea" ? {
    RemixIdea: null
  } : value == "ShareIdea" ? {
    ShareIdea: null
  } : value == "ReceiveLike" ? {
    ReceiveLike: null
  } : value == "GenerateIdea" ? {
    GenerateIdea: null
  } : value;
}
function to_candid_variant_n23(_uploadFile, _downloadFile, value) {
  return value == "deployed" ? {
    deployed: null
  } : value == "active" ? {
    active: null
  } : value == "draft" ? {
    draft: null
  } : value;
}
function createActor(canisterId, _uploadFile, _downloadFile, options = {}) {
  const agent = options.agent || HttpAgent.createSync({
    ...options.agentOptions
  });
  if (options.agent && options.agentOptions) {
    console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.");
  }
  const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions
  });
  return new Backend(actor, _uploadFile, _downloadFile, options.processError);
}
function useBackendActor() {
  const { actor, isFetching } = useActor(createActor);
  return { actor, isFetching };
}
function useListProjects() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listMyProjects();
    },
    enabled: !!actor && !isFetching
  });
}
function useCreateProject() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.createProject(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] })
  });
}
function useListTemplates(category) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["templates", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listTemplates([]);
    },
    enabled: !!actor && !isFetching
  });
}
function useGetProfile() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!actor) throw new Error("Not authenticated");
      return actor.getMyProfile();
    },
    enabled: !!actor && !isFetching
  });
}
function useUpdateDisplayName() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (name) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateDisplayName(name);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["profile"] })
  });
}
function useGetMyStats() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["my-stats"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyStats();
    },
    enabled: !!actor && !isFetching
  });
}
function useGetLeaderboard(limit) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["leaderboard", limit],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeaderboard(BigInt(limit));
    },
    enabled: !!actor && !isFetching
  });
}
function useAwardXp() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const addXpToast = useXpStore((s) => s.addXpToast);
  const XP_AMOUNTS = {
    GenerateIdea: 50,
    ShareIdea: 30,
    RemixIdea: 40,
    ReceiveLike: 5
  };
  const XP_LABELS = {
    GenerateIdea: "Generated an idea",
    ShareIdea: "Shared your idea",
    RemixIdea: "Remixed an idea",
    ReceiveLike: "Someone liked your idea"
  };
  return useMutation({
    mutationFn: async (action) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.awardXpForAction(action);
    },
    onSuccess: (xp, action) => {
      qc.invalidateQueries({ queryKey: ["my-stats"] });
      qc.invalidateQueries({ queryKey: ["leaderboard"] });
      const actionKey = Object.keys(action)[0];
      const amount = XP_AMOUNTS[actionKey] ?? Number(xp);
      const label = XP_LABELS[actionKey] ?? "XP earned";
      addXpToast(amount, label);
    }
  });
}
function usePublishIdea() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.publishIdea(input);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["public-ideas"] });
      qc.invalidateQueries({ queryKey: ["my-stats"] });
    }
  });
}
function useListPublicIdeas(sort, category, limit = 20) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["public-ideas", sort ?? "recent", category ?? "all", limit],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listPublicIdeas(
        sort ? [sort] : [],
        category ? [category] : [],
        BigInt(limit)
      );
    },
    enabled: !!actor && !isFetching
  });
}
function useLikeIdea() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (ideaId) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.likeIdea(ideaId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["public-ideas"] })
  });
}
function useRemixIdea() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (ideaId) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.remixIdea(ideaId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["public-ideas"] });
      qc.invalidateQueries({ queryKey: ["my-stats"] });
    }
  });
}
function useIncrementView() {
  const { actor } = useBackendActor();
  return useMutation({
    mutationFn: async (ideaId) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.incrementViewCount(ideaId);
    }
  });
}
function useGenerate() {
  const { actor } = useBackendActor();
  return useMutation({
    mutationFn: async ({ prompt, device }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.generate(prompt, device);
    }
  });
}
function getLevelThresholds() {
  return {
    Dreamer: [0, 99],
    Builder: [100, 499],
    Creator: [500, 1999],
    Legend: [2e3, Number.POSITIVE_INFINITY]
  };
}
function getLevelFromXp(xp) {
  if (xp >= 2e3) return "Legend";
  if (xp >= 500) return "Creator";
  if (xp >= 100) return "Builder";
  return "Dreamer";
}
function getProjectStatusLabel(status) {
  if ("draft" in status) return "draft";
  if ("active" in status) return "active";
  return "deployed";
}
function formatTimestamp(ts) {
  const ms = Number(ts) / 1e6;
  const now = Date.now();
  const diff = now - ms;
  if (diff < 6e4) return "just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  return `${Math.floor(diff / 864e5)}d ago`;
}
const CHARACTER_PERSONAS = [
  {
    id: "Hero",
    name: "The Hero",
    description: "Born to solve big problems. You build apps that change lives.",
    emoji: "🦸",
    colorTheme: "oklch(0.7 0.25 30)",
    xpMultiplier: 1.5
  },
  {
    id: "Creator",
    name: "The Creator",
    description: "Art meets tech. You craft experiences people remember forever.",
    emoji: "🎨",
    colorTheme: "oklch(0.75 0.22 280)",
    xpMultiplier: 1.4
  },
  {
    id: "Influencer",
    name: "The Influencer",
    description: "Trends start with you. Build apps that go viral overnight.",
    emoji: "⭐",
    colorTheme: "oklch(0.8 0.2 60)",
    xpMultiplier: 1.6
  },
  {
    id: "Dreamer",
    name: "The Dreamer",
    description: "Imagination unlimited. You see the future before it exists.",
    emoji: "🌙",
    colorTheme: "oklch(0.7 0.18 260)",
    xpMultiplier: 1.2
  },
  {
    id: "Pioneer",
    name: "The Pioneer",
    description: "First mover. You enter markets nobody thought to explore.",
    emoji: "🚀",
    colorTheme: "oklch(0.72 0.24 195)",
    xpMultiplier: 1.8
  },
  {
    id: "Rebel",
    name: "The Rebel",
    description: "Rules are meant to be broken. You disrupt everything.",
    emoji: "⚡",
    colorTheme: "oklch(0.68 0.28 10)",
    xpMultiplier: 2
  }
];
const MEMORY_IDEAS = [
  {
    id: "mem-1",
    prompt: "Fitness app with AI coach, daily streak rewards, and friend challenges",
    category: "Health",
    timestamp: new Date(Date.now() - 2 * 864e5),
    cloneCount: 12
  },
  {
    id: "mem-2",
    prompt: "Language learning game where you battle others in vocab duels",
    category: "Education",
    timestamp: new Date(Date.now() - 5 * 864e5),
    cloneCount: 8
  },
  {
    id: "mem-3",
    prompt: "Freelance marketplace for Gen Z designers with crypto payouts",
    category: "Business",
    timestamp: new Date(Date.now() - 7 * 864e5),
    cloneCount: 24
  },
  {
    id: "mem-4",
    prompt: "Music collab platform where DJs remix tracks in real-time",
    category: "Entertainment",
    timestamp: new Date(Date.now() - 10 * 864e5),
    cloneCount: 31
  },
  {
    id: "mem-5",
    prompt: "Mental health journaling app with AI mood analysis and therapist matching",
    category: "Health",
    timestamp: new Date(Date.now() - 14 * 864e5),
    cloneCount: 19
  },
  {
    id: "mem-6",
    prompt: "Study group finder with Pomodoro timer and shared notes board",
    category: "Education",
    timestamp: new Date(Date.now() - 21 * 864e5),
    cloneCount: 7
  },
  {
    id: "mem-7",
    prompt: "Street food discovery map with review reels and order-ahead",
    category: "Lifestyle",
    timestamp: new Date(Date.now() - 28 * 864e5),
    cloneCount: 15
  },
  {
    id: "mem-8",
    prompt: "Sustainability tracker that gamifies eco habits and rewards green actions",
    category: "Environment",
    timestamp: new Date(Date.now() - 35 * 864e5),
    cloneCount: 22
  }
];
const MOOD_CONFIG = {
  happy: {
    label: "Happy",
    emoji: "😊",
    primaryColor: "oklch(0.82 0.22 85)",
    bgGradient: "linear-gradient(135deg, oklch(0.97 0.05 85), oklch(0.94 0.08 60))",
    suggestionTheme: "fun, social, games, celebrations"
  },
  calm: {
    label: "Calm",
    emoji: "😌",
    primaryColor: "oklch(0.75 0.18 220)",
    bgGradient: "linear-gradient(135deg, oklch(0.97 0.03 220), oklch(0.94 0.06 200))",
    suggestionTheme: "meditation, journaling, wellness, mindfulness"
  },
  inspired: {
    label: "Inspired",
    emoji: "✨",
    primaryColor: "oklch(0.78 0.25 290)",
    bgGradient: "linear-gradient(135deg, oklch(0.97 0.04 290), oklch(0.94 0.09 310))",
    suggestionTheme: "creativity, art, innovation, big ideas"
  },
  focused: {
    label: "Focused",
    emoji: "🎯",
    primaryColor: "oklch(0.72 0.2 255)",
    bgGradient: "linear-gradient(135deg, oklch(0.97 0.03 255), oklch(0.94 0.07 240))",
    suggestionTheme: "productivity, tools, dashboards, analytics"
  }
};
function generateViralAngles(appName) {
  return [
    {
      id: "va-1",
      hookHeadline: `POV: You built ${appName} in 30 seconds using AI 🤯`,
      clipSimulation: `Open with shocked face, cut to app demo, end with download counter spinning up. Text overlay: "I can't believe this actually works." Trending sound: lo-fi beat drop.`,
      hashtags: [
        "#AIApp",
        "#AppVerse",
        "#BuildWithAI",
        "#GenZCreator",
        "#TechTok"
      ],
      viralScore: 91,
      platform: "TikTok"
    },
    {
      id: "va-2",
      hookHeadline: `This ${appName} idea just hit 10K users in 24 hours 📈`,
      clipSimulation: `Before/after split screen. Left: blank screen. Right: live analytics dashboard showing growing numbers. Voiceover: "All I did was describe my idea." End card: "Your turn →"`,
      hashtags: [
        "#StartupLife",
        "#MadeWithAI",
        `#${appName.replace(/\s/g, "")}`,
        "#CreatorEconomy",
        "#Viral"
      ],
      viralScore: 87,
      platform: "Instagram"
    },
    {
      id: "va-3",
      hookHeadline: `Why is nobody talking about ${appName}? Thread 🧵`,
      clipSimulation: "Tweet thread: Tweet 1 introduces the problem. Tweet 2 shows the solution. Tweet 3 shares first user reaction. Tweet 4 drops the link. Each tweet gets progressively more engagement.",
      hashtags: [
        "#BuildInPublic",
        "#Indiehacker",
        "#AITools",
        "#AppVerse",
        "#FutureOfApps"
      ],
      viralScore: 78,
      platform: "Twitter"
    }
  ];
}
function generateSessionCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
export {
  CHARACTER_PERSONAS as C,
  MEMORY_IDEAS as M,
  useListTemplates as a,
  useGetProfile as b,
  useGetMyStats as c,
  useCreateProject as d,
  useGenerate as e,
  formatTimestamp as f,
  getProjectStatusLabel as g,
  getLevelThresholds as h,
  getLevelFromXp as i,
  usePublishIdea as j,
  useAwardXp as k,
  MOOD_CONFIG as l,
  generateViralAngles as m,
  useUpdateDisplayName as n,
  useListPublicIdeas as o,
  useLikeIdea as p,
  useRemixIdea as q,
  useIncrementView as r,
  useGetLeaderboard as s,
  generateSessionCode as t,
  useListProjects as u
};
