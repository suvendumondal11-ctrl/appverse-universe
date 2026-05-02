import CommonTypes "../types/common";
import ProjectTypes "../types/projects";
import ProfileTypes "../types/profiles";
import ProjectLib "../lib/projects";
import ProfileLib "../lib/profiles";
import List "mo:core/List";
import Map "mo:core/Map";

mixin (
  projects : List.List<ProjectTypes.Project>,
  profiles : Map.Map<CommonTypes.UserId, ProfileTypes.UserProfile>,
  nextProjectId : [var Nat],
) {
  public shared ({ caller }) func createProject(
    input : ProjectTypes.CreateProjectInput
  ) : async ProjectTypes.Project {
    let id = nextProjectId[0];
    nextProjectId[0] += 1;
    let project = ProjectLib.create(projects, id, caller, input);
    ProfileLib.incrementProjectCount(profiles, caller);
    project;
  };

  public query ({ caller }) func getProject(
    id : CommonTypes.ProjectId
  ) : async ?ProjectTypes.Project {
    ProjectLib.getById(projects, id);
  };

  public query ({ caller }) func listMyProjects() : async [ProjectTypes.Project] {
    ProjectLib.listByOwner(projects, caller);
  };

  public shared ({ caller }) func updateProject(
    id : CommonTypes.ProjectId,
    input : ProjectTypes.UpdateProjectInput,
  ) : async Bool {
    ProjectLib.update(projects, id, caller, input);
  };

  public shared ({ caller }) func deleteProject(id : CommonTypes.ProjectId) : async Bool {
    let deleted = ProjectLib.delete(projects, id, caller);
    if (deleted) {
      ProfileLib.decrementProjectCount(profiles, caller);
    };
    deleted;
  };

  public query func getAiSuggestions(
    projectId : CommonTypes.ProjectId
  ) : async [ProjectTypes.AiFeatureSuggestion] {
    ProjectLib.getAiSuggestions(projectId);
  };
};
