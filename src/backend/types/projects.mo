import CommonTypes "common";

module {
  public type ProjectStatus = { #draft; #active; #deployed };

  public type AiFeatureSuggestion = {
    id : Nat;
    title : Text;
    description : Text;
    category : Text;
    priority : Nat; // 1 = high, 2 = medium, 3 = low
  };

  public type Project = {
    id : CommonTypes.ProjectId;
    owner : CommonTypes.UserId;
    name : Text;
    description : Text;
    tags : [Text];
    status : ProjectStatus;
    createdAt : CommonTypes.Timestamp;
    updatedAt : CommonTypes.Timestamp;
    featureList : [Text];
  };

  public type CreateProjectInput = {
    name : Text;
    description : Text;
    tags : [Text];
    featureList : [Text];
  };

  public type UpdateProjectInput = {
    name : Text;
    description : Text;
    tags : [Text];
    status : ProjectStatus;
    featureList : [Text];
  };
};
