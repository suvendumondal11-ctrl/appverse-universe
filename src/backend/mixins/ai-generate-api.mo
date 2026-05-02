import Text "mo:core/Text";
import Blob "mo:core/Blob";
import Runtime "mo:core/Runtime";

mixin () {

  // IC management canister — used for http_request (http outcalls)
  let ic = actor "aaaaa-aa" : actor {
    http_request : ({
      url : Text;
      max_response_bytes : ?Nat64;
      method : { #get; #head; #post };
      headers : [{ name : Text; value : Text }];
      body : ?Blob;
      transform : ?{
        function : shared query ({ response : { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob }; context : Blob }) -> async { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob };
        context : Blob;
      };
      is_replicated : ?Bool;
    }) -> async { status : Nat; headers : [{ name : Text; value : Text }]; body : Blob };
  };

  // Curated fallback trend quotes — used when quotable.io is unreachable
  let fallbackTrends : [Text] = [
    "The future belongs to those who believe in the beauty of their dreams.",
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to create it.",
    "Technology is best when it brings people together.",
    "Simplicity is the soul of efficiency.",
    "Move fast and build things that last.",
    "Great things are not done by impulse, but by a series of small things brought together.",
    "The only way to do great work is to love what you do.",
    "Ideas are the beginning points of all fortunes.",
    "Code is poetry in motion — the art of turning imagination into reality.",
  ];

  // Pick a fallback trend quote using a deterministic seed from the prompt
  func getFallbackTrend(prompt : Text) : Text {
    let idx = prompt.size() % fallbackTrends.size();
    fallbackTrends[idx];
  };

  // Fetch a live inspirational quote from quotable.io; falls back to curated list on any failure
  func fetchTrendQuote(prompt : Text) : async Text {
    try {
      let response = await ic.http_request({
        url = "https://api.quotable.io/random";
        max_response_bytes = ?2048;
        method = #get;
        headers = [
          { name = "Accept"; value = "application/json" },
        ];
        body = null;
        transform = null;
        is_replicated = ?false;
      });

      if (response.status == 200) {
        let bodyText = switch (response.body.decodeUtf8()) {
          case (?t) t;
          case null { return getFallbackTrend(prompt) };
        };
        switch (parseJsonField(bodyText, "content")) {
          case (?content) {
            if (content.size() > 0) content
            else getFallbackTrend(prompt)
          };
          case null getFallbackTrend(prompt);
        };
      } else {
        getFallbackTrend(prompt);
      };
    } catch (_) {
      getFallbackTrend(prompt);
    };
  };

  // Curated lucky phrases for the lucky field
  func getLuckyMessage(prompt : Text) : Text {
    let lower = prompt.toLower();
    let seed = lower.size() % 10;
    if (seed == 0) {
      "🌟 Lucky insight: The simplest ideas often become the biggest platforms — your timing is perfect"
    } else if (seed == 1) {
      "⚡ Lucky spark: This idea has viral DNA — 3 features + 1 surprise mechanic = unstoppable growth loop"
    } else if (seed == 2) {
      "🎲 Lucky drop: Ideas like this get funded in 48 hours — the market is ready and waiting for you"
    } else if (seed == 3) {
      "🔥 Lucky fire: You're one bold feature away from a 10 million user app — don't hold back"
    } else if (seed == 4) {
      "💎 Rare insight: The creators who ship imperfect v1s always beat those waiting for perfect — launch now"
    } else if (seed == 5) {
      "🌍 Lucky global: This concept works across 50+ markets with zero translation — that's unicorn territory"
    } else if (seed == 6) {
      "🧠 Lucky brain: Your idea sits at the intersection of 3 megatrends — that's where billion-dollar apps are born"
    } else if (seed == 7) {
      "🎯 Lucky aim: Every successful app started as a 'too simple' idea — yours is exactly that kind of brilliant"
    } else if (seed == 8) {
      "✨ Legendary drop: The universe is aligning — this is your moment to build something that outlasts trends"
    } else {
      "🚀 Lucky launch: The next 90 days are your window — build fast, ship boldly, and let AI do the heavy lifting"
    };
  };

  // Curated smart fallback AI responses when http outcall fails
  func getMockAiResponse(prompt : Text) : Text {
    let lower = prompt.toLower();
    if (lower.contains(#text "health") or lower.contains(#text "fitness")) {
      "HealthAI Pro — an intelligent wellness companion that tracks biometrics, predicts health risks 30 days early using wearable data, and delivers personalized micro-coaching sessions. Features: AI symptom checker, smart meal planner, daily movement quests, and a social accountability network where friends complete wellness challenges together."
    } else if (lower.contains(#text "finance") or lower.contains(#text "money")) {
      "MoneyMind — an AI financial co-pilot that learns your spending DNA, auto-categorizes transactions, and runs silent background simulations to show you the future cost of every decision. Features: predictive savings alerts, AI-negotiated bill reduction, group savings circles, and a crypto bridge for seamless Web3 integration."
    } else if (lower.contains(#text "learn") or lower.contains(#text "educat")) {
      "BrainBurst — a micro-learning platform where AI breaks any topic into 90-second knowledge drops personalized to your learning style. Features: voice-activated lessons, spaced repetition powered by neuroscience, peer teaching rewards, skill certification NFTs, and a live AI tutor that adapts to your confusion in real time."
    } else if (lower.contains(#text "social") or lower.contains(#text "community")) {
      "SphereConnect — a location-aware social platform that uses AI to match you with people who share your energy, not just your interests. Features: vibe-based matching, real-world event auto-generation, anonymous confession walls, collaborative world-building, and a reputation system where kindness earns real rewards."
    } else if (lower.contains(#text "game") or lower.contains(#text "play")) {
      "QuestForge — an AI game engine that turns your daily life into an RPG adventure. Every step, task, and social interaction earns XP. Features: AI-generated quests based on your real schedule, multiplayer city-wide challenges, rare item drops for real achievements, a guild economy with in-app marketplace, and AR battle modes."
    } else if (lower.contains(#text "food") or lower.contains(#text "eat")) {
      "FlavorAI — a hyper-personalized food discovery app that maps your taste genome from 3 swipes. Features: AI recipe generation from what's in your fridge, instant restaurant matching by mood, group order coordination with split payment, nutritional DNA analysis, and a creator economy where home chefs monetize their recipes."
    } else {
      "IdeaForge Ultra — an AI-powered creation engine that transforms rough concepts into fully-spec'd digital products in minutes. Features: multi-modal input (voice, sketch, text), instant market viability scoring, competitor gap analysis, one-tap prototype generation, global trend matching, and an auto-pitch deck builder that secures investor interest."
    };
  };

  // Parse a simple JSON string value for a given key from a flat JSON object
  func parseJsonField(json : Text, fieldName : Text) : ?Text {
    let needle = "\"" # fieldName # "\"";
    // Find the key position manually via split
    let parts = json.split(#text needle);
    var result : ?Text = null;
    var isFirst = true;
    for (part in parts) {
      if (isFirst) {
        isFirst := false;
      } else if (result == null) {
        // part starts after the key, look for :"value"
        let trimmed = part.trimStart(#text " ").trimStart(#text ":").trimStart(#text " ");
        if (trimmed.startsWith(#text "\"")) {
          let inner = trimmed.stripStart(#text "\"");
          switch (inner) {
            case (?afterQuote) {
              // find the closing quote — split on \" and take first segment
              let segments = afterQuote.split(#text "\"");
              var gotFirst = false;
              for (seg in segments) {
                if (not gotFirst) {
                  result := ?seg;
                  gotFirst := true;
                };
              };
            };
            case null {};
          };
        };
      };
    };
    result;
  };

  // Extract the AI message content from an OpenAI-style JSON response
  func extractAiContent(responseBody : Text) : ?Text {
    // Look for "content":"<value>" pattern in the response
    parseJsonField(responseBody, "content");
  };

  // Fetch a DALL-E generated image URL for the given prompt; returns "" on any failure
  func fetchDalleImage(prompt : Text) : async Text {
    try {
      let reqBody = "{\"prompt\":\"" # prompt # "\",\"n\":1,\"size\":\"512x512\"}";
      let response = await ic.http_request({
        url = "https://api.openai.com/v1/images/generations";
        max_response_bytes = ?4096;
        method = #post;
        headers = [
          { name = "Content-Type"; value = "application/json" },
          { name = "Authorization"; value = "Bearer OPENAI_API_KEY" },
        ];
        body = ?reqBody.encodeUtf8();
        transform = null;
        is_replicated = ?false;
      });

      if (response.status == 200) {
        let bodyText = switch (response.body.decodeUtf8()) {
          case (?t) t;
          case null { return "" };
        };
        switch (parseJsonField(bodyText, "url")) {
          case (?url) url;
          case null "";
        };
      } else {
        "";
      };
    } catch (_) {
      "";
    };
  };

  public shared func generate(prompt : Text, device : Text) : async { ai : Text; trend : Text; lucky : Text; image : Text } {
    let lucky = getLuckyMessage(prompt);

    // Prepend device context to the user message — matching the prototype pattern
    let devicePrompt = "Device: " # device # ". Give best optimized output for this device. " # prompt;

    // Build OpenAI chat completions request body with device-aware prompt
    let requestBody = "{\"model\":\"gpt-4o-mini\",\"messages\":[{\"role\":\"system\",\"content\":\"You are a futuristic app idea generator. Given a prompt, generate a single compelling, specific app idea in 2-3 sentences. Include the app name, core concept, and 3 key features. Be creative, concrete, and exciting.\"},{\"role\":\"user\",\"content\":" # "\"" # devicePrompt # "\"" # "}],\"max_tokens\":200}";

    let bodyBlob = requestBody.encodeUtf8();

    // Call OpenAI chat, quotable.io, and DALL-E concurrently
    let aiResultFut = async {
      try {
        let response = await ic.http_request({
          url = "https://api.openai.com/v1/chat/completions";
          max_response_bytes = ?4096;
          method = #post;
          headers = [
            { name = "Content-Type"; value = "application/json" },
            { name = "Authorization"; value = "Bearer OPENAI_API_KEY" },
          ];
          body = ?bodyBlob;
          transform = null;
          is_replicated = ?false;
        });

        if (response.status == 200) {
          let bodyText = switch (response.body.decodeUtf8()) {
            case (?t) t;
            case null getMockAiResponse(prompt);
          };
          switch (extractAiContent(bodyText)) {
            case (?content) content;
            case null getMockAiResponse(prompt);
          };
        } else {
          getMockAiResponse(prompt);
        };
      } catch (_) {
        getMockAiResponse(prompt);
      };
    };

    let trendFut = fetchTrendQuote(prompt);
    let imageFut = fetchDalleImage(prompt);

    let ai = await aiResultFut;
    let trend = await trendFut;
    let image = await imageFut;

    { ai; trend; lucky; image };
  };
};
