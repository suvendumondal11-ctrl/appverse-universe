import CommonTypes "../types/common";
import SocialTypes "../types/social";
import GamificationTypes "../types/gamification";
import ProfileTypes "../types/profiles";
import SocialLib "../lib/social";
import GamificationLib "../lib/gamification";
import ProfileLib "../lib/profiles";
import Map "mo:core/Map";

mixin (
  ideasMap : Map.Map<Nat, SocialTypes.PublicIdea>,
  nextIdeaId : [var Nat],
  statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
  profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
) {
  public shared ({ caller }) func publishIdea(
    input : SocialTypes.PublishIdeaInput
  ) : async Nat {
    let profile = ProfileLib.getOrCreate(profiles, caller);
    let ideaId = SocialLib.publishIdea(ideasMap, nextIdeaId, statsMap, caller, profile.displayName, input);
    // Award XP to caller for generating an idea
    ignore GamificationLib.awardXp(statsMap, caller, #GenerateIdea);
    ideaId;
  };

  public query func listPublicIdeas(
    sort : { #trending; #newest; #mostLiked; #mostRemixed },
    category : ?Text,
    limit : Nat,
  ) : async [SocialTypes.PublicIdea] {
    SocialLib.listPublicIdeas(ideasMap, sort, category, limit);
  };

  public shared ({ caller }) func likeIdea(ideaId : Nat) : async Nat {
    // Award XP to liker for sharing engagement
    ignore GamificationLib.awardXp(statsMap, caller, #ShareIdea);
    switch (SocialLib.likeIdea(ideasMap, statsMap, caller, ideaId)) {
      case (?count) count;
      case null 0;
    };
  };

  public shared ({ caller }) func remixIdea(ideaId : Nat) : async SocialTypes.PublicIdea {
    switch (SocialLib.remixIdea(ideasMap, statsMap, caller, ideaId)) {
      case (?idea) idea;
      case null Runtime.trap("Idea not found");
    };
  };

  public shared ({ caller }) func incrementViewCount(ideaId : Nat) : async () {
    SocialLib.incrementViewCount(ideasMap, ideaId);
  };

  public query func getPublicIdea(ideaId : Nat) : async ?SocialTypes.PublicIdea {
    SocialLib.getIdea(ideasMap, ideaId);
  };
};
