import CommonTypes "common";

module {
  public type UserProfile = {
    userId : CommonTypes.UserId;
    displayName : Text;
    createdAt : CommonTypes.Timestamp;
    totalProjects : Nat;
  };
};
