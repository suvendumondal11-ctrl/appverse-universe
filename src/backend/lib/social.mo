import CommonTypes "../types/common";
import SocialTypes "../types/social";
import GamificationTypes "../types/gamification";
import GamificationLib "gamification";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Time "mo:core/Time";

module {
  func scoresForCategory(category : Text) : { market : Nat; uniqueness : Nat; monetization : Nat; viral : Nat } {
    let lower = category.toLower();
    if (lower == "fitness") {
      { market = 85; uniqueness = 70; monetization = 75; viral = 80 }
    } else if (lower == "education") {
      { market = 80; uniqueness = 65; monetization = 70; viral = 65 }
    } else if (lower == "social") {
      { market = 90; uniqueness = 60; monetization = 65; viral = 95 }
    } else if (lower == "business") {
      { market = 85; uniqueness = 70; monetization = 90; viral = 60 }
    } else {
      { market = 75; uniqueness = 70; monetization = 70; viral = 70 }
    };
  };

  public func publishIdea(
    ideasMap : Map.Map<Nat, SocialTypes.PublicIdea>,
    nextIdRef : [var Nat],
    statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
    caller : CommonTypes.UserId,
    creatorName : Text,
    input : SocialTypes.PublishIdeaInput,
  ) : Nat {
    let ideaId = nextIdRef[0];
    nextIdRef[0] += 1;

    let s = scoresForCategory(input.category);
    let successScore = (s.market + s.uniqueness + s.monetization + s.viral) / 4;

    let idea : SocialTypes.PublicIdea = {
      id = ideaId;
      creatorId = caller;
      creatorName;
      appName = input.appName;
      description = input.description;
      category = input.category;
      colorTheme = input.colorTheme;
      features = input.features;
      earningModel = input.earningModel;
      successScore;
      marketScore = s.market;
      uniquenessScore = s.uniqueness;
      monetizationScore = s.monetization;
      viralScore = s.viral;
      likeCount = 0;
      viewCount = 0;
      remixCount = 0;
      createdAt = Time.now();
      isPublic = true;
    };

    ideasMap.add(ideaId, idea);
    ideaId;
  };

  public func listPublicIdeas(
    ideasMap : Map.Map<Nat, SocialTypes.PublicIdea>,
    sort : { #trending; #newest; #mostLiked; #mostRemixed },
    category : ?Text,
    limit : Nat,
  ) : [SocialTypes.PublicIdea] {
    var ideas = ideasMap.values()
      .filter(func(idea : SocialTypes.PublicIdea) : Bool = idea.isPublic)
      .toArray();

    // Category filter
    switch (category) {
      case (?cat) {
        let lower = cat.toLower();
        ideas := ideas.filter(func(idea : SocialTypes.PublicIdea) : Bool =
          idea.category.toLower() == lower
        );
      };
      case null {};
    };

    // Sort
    ideas := ideas.sort(
      func(a : SocialTypes.PublicIdea, b : SocialTypes.PublicIdea) : Order.Order =
        switch sort {
          case (#newest)
            if (b.createdAt > a.createdAt) #less
            else if (b.createdAt < a.createdAt) #greater
            else #equal;
          case (#mostLiked)
            if (b.likeCount > a.likeCount) #less
            else if (b.likeCount < a.likeCount) #greater
            else #equal;
          case (#mostRemixed)
            if (b.remixCount > a.remixCount) #less
            else if (b.remixCount < a.remixCount) #greater
            else #equal;
          case (#trending) {
            let scoreA = a.likeCount * 2 + a.remixCount * 3 + a.viewCount;
            let scoreB = b.likeCount * 2 + b.remixCount * 3 + b.viewCount;
            if (scoreB > scoreA) #less
            else if (scoreB < scoreA) #greater
            else #equal
          };
        }
    );

    let capped = if (ideas.size() < limit) ideas.size() else limit;
    ideas.sliceToArray(0, capped);
  };

  public func likeIdea(
    ideasMap : Map.Map<Nat, SocialTypes.PublicIdea>,
    statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
    callerId : CommonTypes.UserId,
    ideaId : Nat,
  ) : ?Nat {
    switch (ideasMap.get(ideaId)) {
      case null null;
      case (?idea) {
        let newCount = idea.likeCount + 1;
        ideasMap.add(ideaId, { idea with likeCount = newCount });
        // Award XP to idea creator for receiving a like
        ignore GamificationLib.awardXp(statsMap, idea.creatorId, #ReceiveLike);
        ?newCount;
      };
    };
  };

  public func remixIdea(
    ideasMap : Map.Map<Nat, SocialTypes.PublicIdea>,
    statsMap : Map.Map<CommonTypes.UserId, GamificationTypes.CreatorStats>,
    callerId : CommonTypes.UserId,
    ideaId : Nat,
  ) : ?SocialTypes.PublicIdea {
    switch (ideasMap.get(ideaId)) {
      case null null;
      case (?idea) {
        let newCount = idea.remixCount + 1;
        ideasMap.add(ideaId, { idea with remixCount = newCount });
        // Award XP to remixer
        ignore GamificationLib.awardXp(statsMap, callerId, #RemixIdea);
        ?idea;
      };
    };
  };

  public func incrementViewCount(
    ideasMap : Map.Map<Nat, SocialTypes.PublicIdea>,
    ideaId : Nat,
  ) {
    switch (ideasMap.get(ideaId)) {
      case null {};
      case (?idea) {
        ideasMap.add(ideaId, { idea with viewCount = idea.viewCount + 1 });
      };
    };
  };

  public func getIdea(
    ideasMap : Map.Map<Nat, SocialTypes.PublicIdea>,
    ideaId : Nat,
  ) : ?SocialTypes.PublicIdea {
    ideasMap.get(ideaId);
  };
};
