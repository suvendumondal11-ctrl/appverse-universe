import CommonTypes "../types/common";
import GamificationTypes "../types/gamification";
import SocialTypes "../types/social";
import ProfileTypes "../types/profiles";
import GamificationLib "../lib/gamification";
import Map "mo:core/Map";

mixin (
  statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
  profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
) {
  public shared ({ caller }) func getMyStats() : async GamificationTypes.CreatorStats {
    GamificationLib.getOrCreateStats(statsMap, caller);
  };

  public query func getLeaderboard(limit : Nat) : async [SocialTypes.LeaderboardEntry] {
    GamificationLib.getLeaderboard(statsMap, profiles, limit);
  };

  public shared ({ caller }) func awardXpForAction(action : GamificationTypes.XpAction) : async Nat {
    GamificationLib.awardXp(statsMap, caller, action);
  };
};
