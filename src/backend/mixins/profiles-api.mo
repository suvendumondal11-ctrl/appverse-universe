import CommonTypes "../types/common";
import ProfileTypes "../types/profiles";
import ProfileLib "../lib/profiles";
import Map "mo:core/Map";

mixin (
  profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
) {
  public shared ({ caller }) func getMyProfile() : async ProfileTypes.UserProfile {
    ProfileLib.getOrCreate(profiles, caller);
  };

  public shared ({ caller }) func updateDisplayName(name : Text) : async Bool {
    // Ensure profile exists before updating
    ignore ProfileLib.getOrCreate(profiles, caller);
    ProfileLib.updateDisplayName(profiles, caller, name);
  };
};
