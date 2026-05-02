import CommonTypes "../types/common";
import ProjectTypes "../types/projects";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func create(
    projects : List.List<ProjectTypes.Project>,
    nextId : Nat,
    owner : CommonTypes.UserId,
    input : ProjectTypes.CreateProjectInput,
  ) : ProjectTypes.Project {
    let now = Time.now();
    let project : ProjectTypes.Project = {
      id = nextId;
      owner;
      name = input.name;
      description = input.description;
      tags = input.tags;
      status = #draft;
      createdAt = now;
      updatedAt = now;
      featureList = input.featureList;
    };
    projects.add(project);
    project;
  };

  public func getById(
    projects : List.List<ProjectTypes.Project>,
    id : CommonTypes.ProjectId,
  ) : ?ProjectTypes.Project {
    projects.find(func(p) { p.id == id });
  };

  public func listByOwner(
    projects : List.List<ProjectTypes.Project>,
    owner : CommonTypes.UserId,
  ) : [ProjectTypes.Project] {
    projects.filter(func(p) { p.owner == owner }).toArray();
  };

  public func update(
    projects : List.List<ProjectTypes.Project>,
    id : CommonTypes.ProjectId,
    owner : CommonTypes.UserId,
    input : ProjectTypes.UpdateProjectInput,
  ) : Bool {
    let now = Time.now();
    var updated = false;
    projects.mapInPlace(func(p) {
      if (p.id == id and p.owner == owner) {
        updated := true;
        {
          p with
          name = input.name;
          description = input.description;
          tags = input.tags;
          status = input.status;
          featureList = input.featureList;
          updatedAt = now;
        };
      } else {
        p;
      };
    });
    updated;
  };

  public func delete(
    projects : List.List<ProjectTypes.Project>,
    id : CommonTypes.ProjectId,
    owner : CommonTypes.UserId,
  ) : Bool {
    let sizeBefore = projects.size();
    let filtered = projects.filter(func(p) { not (p.id == id and p.owner == owner) });
    projects.clear();
    projects.append(filtered);
    projects.size() < sizeBefore;
  };

  public func getAiSuggestions(
    _projectId : CommonTypes.ProjectId,
  ) : [ProjectTypes.AiFeatureSuggestion] {
    // Static AI suggestions — dynamic AI via HTTP outcalls is a future feature
    [
      {
        id = 1;
        title = "User Authentication";
        description = "Add secure login with Internet Identity for personalized experiences.";
        category = "Security";
        priority = 1;
      },
      {
        id = 2;
        title = "Push Notifications";
        description = "Keep users engaged with timely appointment reminders and updates.";
        category = "Engagement";
        priority = 1;
      },
      {
        id = 3;
        title = "Analytics Dashboard";
        description = "Track key metrics like bookings, revenue, and user retention.";
        category = "Analytics";
        priority = 2;
      },
      {
        id = 4;
        title = "Multi-language Support";
        description = "Reach a global audience by supporting multiple languages.";
        category = "Accessibility";
        priority = 2;
      },
      {
        id = 5;
        title = "Offline Mode";
        description = "Allow users to access key features without an internet connection.";
        category = "Reliability";
        priority = 3;
      },
    ];
  };
};
