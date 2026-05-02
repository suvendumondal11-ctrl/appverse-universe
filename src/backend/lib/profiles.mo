import CommonTypes "../types/common";
import ProfileTypes "../types/profiles";
import Map "mo:core/Map";
import Time "mo:core/Time";

module {
  public func getOrCreate(
    profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
    userId : CommonTypes.UserId,
  ) : ProfileTypes.UserProfile {
    switch (profiles.get(userId)) {
      case (?profile) { profile };
      case null {
        let newProfile : ProfileTypes.UserProfile = {
          userId;
          displayName = userId.toText();
          createdAt = Time.now();
          totalProjects = 0;
        };
        profiles.add(userId, newProfile);
        newProfile;
      };
    };
  };

  public func get(
    profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
    userId : CommonTypes.UserId,
  ) : ?ProfileTypes.UserProfile {
    profiles.get(userId);
  };

  public func updateDisplayName(
    profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
    userId : CommonTypes.UserId,
    displayName : Text,
  ) : Bool {
    switch (profiles.get(userId)) {
      case null { false };
      case (?profile) {
        profiles.add(userId, { profile with displayName });
        true;
      };
    };
  };

  public func incrementProjectCount(
    profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
    userId : CommonTypes.UserId,
  ) {
    let profile = getOrCreate(profiles, userId);
    profiles.add(userId, { profile with totalProjects = profile.totalProjects + 1 });
  };

  public func decrementProjectCount(
    profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
    userId : CommonTypes.UserId,
  ) {
    switch (profiles.get(userId)) {
      case null {};
      case (?profile) {
        let newCount = if (profile.totalProjects > 0) profile.totalProjects - 1 else 0;
        profiles.add(userId, { profile with totalProjects = newCount });
      };
    };
  };
};
