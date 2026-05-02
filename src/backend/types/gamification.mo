import CommonTypes "common";

module {
  public type XpAmount = Nat;

  public type CreatorLevel = {
    #Dreamer;
    #Builder;
    #Creator;
    #Legend;
  };

  public type XpAction = {
    #GenerateIdea;
    #ShareIdea;
    #RemixIdea;
    #ReceiveLike;
  };

  public type XpRecord = {
    action : XpAction;
    amount : Nat;
    timestamp : CommonTypes.Timestamp;
  };

  public type CreatorStats = {
    userId : Principal;
    totalXp : Nat;
    level : CreatorLevel;
    ideasGenerated : Nat;
    totalLikes : Nat;
    totalRemixes : Nat;
    streak : Nat;
  };
};
