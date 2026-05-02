import CommonTypes "common";

module {
  public type Template = {
    id : CommonTypes.TemplateId;
    name : Text;
    category : Text;
    description : Text;
    featureList : [Text];
  };
};
