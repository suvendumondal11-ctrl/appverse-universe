import CommonTypes "../types/common";
import TemplateTypes "../types/templates";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func seedTemplates(templates : List.List<TemplateTypes.Template>) {
    // Only seed if empty to avoid duplicates on upgrades
    if (templates.size() > 0) return;

    let seeds : [TemplateTypes.Template] = [
      {
        id = 1;
        name = "Beauty Booking App";
        category = "Booking";
        description = "A complete beautician booking platform with scheduling and payments.";
        featureList = ["Appointment booking", "Beautician profiles", "Payment integration", "Review system"];
      },
      {
        id = 2;
        name = "Skincare Tracker";
        category = "Health";
        description = "Track your daily skincare routine and monitor skin improvements over time.";
        featureList = ["Daily routine logging", "Progress photos", "Product tracking", "Skin health reports"];
      },
      {
        id = 3;
        name = "Beauty Tips Blog";
        category = "Content";
        description = "A curated beauty tips and tutorials platform for skincare and makeup.";
        featureList = ["Article publishing", "Video tutorials", "Category filtering", "User comments"];
      },
      {
        id = 4;
        name = "AI Beauty Advisor";
        category = "AI";
        description = "AI-powered personalized beauty recommendations and face analysis.";
        featureList = ["AI chat assistant", "Personalized plans", "Face analysis", "Product recommendations"];
      },
      {
        id = 5;
        name = "Beautician Directory";
        category = "Directory";
        description = "Search and discover local beauticians by location and specialty.";
        featureList = ["Search by location", "Filter by specialty", "Map view", "Contact details"];
      },
    ];

    for (t in seeds.vals()) {
      templates.add(t);
    };
  };

  public func listAll(
    templates : List.List<TemplateTypes.Template>,
  ) : [TemplateTypes.Template] {
    templates.toArray();
  };

  public func listByCategory(
    templates : List.List<TemplateTypes.Template>,
    category : Text,
  ) : [TemplateTypes.Template] {
    templates.filter(func(t) { t.category == category }).toArray();
  };

  public func getById(
    templates : List.List<TemplateTypes.Template>,
    id : CommonTypes.TemplateId,
  ) : ?TemplateTypes.Template {
    templates.find(func(t) { t.id == id });
  };
};
