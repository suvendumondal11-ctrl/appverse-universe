import CommonTypes "../types/common";
import TemplateTypes "../types/templates";
import TemplateLib "../lib/templates";
import List "mo:core/List";

mixin (
  templates : List.List<TemplateTypes.Template>,
) {
  public query func listTemplates(
    category : ?Text
  ) : async [TemplateTypes.Template] {
    switch (category) {
      case null { TemplateLib.listAll(templates) };
      case (?cat) { TemplateLib.listByCategory(templates, cat) };
    };
  };

  public query func getTemplate(
    id : CommonTypes.TemplateId
  ) : async ?TemplateTypes.Template {
    TemplateLib.getById(templates, id);
  };
};
