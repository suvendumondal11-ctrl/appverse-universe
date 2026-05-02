import CommonTypes "common";
import GamificationTypes "gamification";

module {
  public type PublicIdea = {
    id : Nat;
    creatorId : Principal;
    creatorName : Text;
    appName : Text;
    description : Text;
    category : Text;
    colorTheme : Text;
    features : [Text];
    earningModel : Text;
    successScore : Nat;
    marketScore : Nat;
    uniquenessScore : Nat;
    monetizationScore : Nat;
    viralScore : Nat;
    likeCount : Nat;
    viewCount : Nat;
    remixCount : Nat;
    createdAt : CommonTypes.Timestamp;
    isPublic : Bool;
  };

  public type LeaderboardEntry = {
    rank : Nat;
    userId : Principal;
    displayName : Text;
    level : GamificationTypes.CreatorLevel;
    totalXp : Nat;
    ideasCount : Nat;
  };

  public type PublishIdeaInput = {
    appName : Text;
    description : Text;
    category : Text;
    colorTheme : Text;
    features : [Text];
    earningModel : Text;
  };
};
