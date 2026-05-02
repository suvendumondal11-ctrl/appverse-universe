import CommonTypes "../types/common";
import GamificationTypes "../types/gamification";
import SocialTypes "../types/social";
import ProfileTypes "../types/profiles";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

module {
  func xpForAction(action : GamificationTypes.XpAction) : Nat {
    switch action {
      case (#GenerateIdea) 50;
      case (#ShareIdea) 30;
      case (#RemixIdea) 40;
      case (#ReceiveLike) 5;
    };
  };

  public func computeLevel(xp : Nat) : GamificationTypes.CreatorLevel {
    if (xp >= 2000) #Legend
    else if (xp >= 500) #Creator
    else if (xp >= 100) #Builder
    else #Dreamer;
  };

  public func getOrCreateStats(
    statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
    userId : CommonTypes.UserId,
  ) : GamificationTypes.CreatorStats {
    switch (statsMap.get(userId)) {
      case (?stats) stats;
      case null {
        let defaultStats : GamificationTypes.CreatorStats = {
          userId;
          totalXp = 0;
          level = #Dreamer;
          ideasGenerated = 0;
          totalLikes = 0;
          totalRemixes = 0;
          streak = 0;
        };
        statsMap.add(userId, defaultStats);
        defaultStats;
      };
    };
  };

  public func awardXp(
    statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
    userId : CommonTypes.UserId,
    action : GamificationTypes.XpAction,
  ) : Nat {
    let stats = getOrCreateStats(statsMap, userId);
    let earned = xpForAction(action);
    let newXp = stats.totalXp + earned;
    let newLevel = computeLevel(newXp);
    let newIdeasGenerated = switch action {
      case (#GenerateIdea) stats.ideasGenerated + 1;
      case _ stats.ideasGenerated;
    };
    let newRemixes = switch action {
      case (#RemixIdea) stats.totalRemixes + 1;
      case _ stats.totalRemixes;
    };
    let newLikes = switch action {
      case (#ReceiveLike) stats.totalLikes + 1;
      case _ stats.totalLikes;
    };
    statsMap.add(
      userId,
      {
        stats with
        totalXp = newXp;
        level = newLevel;
        ideasGenerated = newIdeasGenerated;
        totalRemixes = newRemixes;
        totalLikes = newLikes;
      },
    );
    newXp;
  };

  public func getStats(
    statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
    userId : CommonTypes.UserId,
  ) : GamificationTypes.CreatorStats {
    getOrCreateStats(statsMap, userId);
  };

  public func getLeaderboard(
    statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
    profilesMap : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
    limit : Nat,
  ) : [SocialTypes.LeaderboardEntry] {
    let allStats = statsMap.entries()
      .toArray()
      .sort(func((_, a : GamificationTypes.CreatorStats), (_, b : GamificationTypes.CreatorStats)) : Order.Order =
        if (b.totalXp > a.totalXp) #less
        else if (b.totalXp < a.totalXp) #greater
        else #equal
      );

    let capped = if (allStats.size() < limit) allStats.size() else limit;

    Array.tabulate<SocialTypes.LeaderboardEntry>(
      capped,
      func(i) {
        let (uid, stats) = allStats[i];
        let displayName = switch (profilesMap.get(uid)) {
          case (?p) p.displayName;
          case null uid.toText();
        };
        {
          rank = i + 1;
          userId = uid;
          displayName;
          level = stats.level;
          totalXp = stats.totalXp;
          ideasCount = stats.ideasGenerated;
        };
      },
    );
  };
};
