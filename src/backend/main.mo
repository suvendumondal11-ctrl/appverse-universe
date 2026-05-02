import CommonTypes "types/common";
import ProjectTypes "types/projects";
import ProfileTypes "types/profiles";
import GamificationTypes "types/gamification";
import SocialTypes "types/social";
import TemplateTypes "types/templates";
import TemplateLib "lib/templates";
import List "mo:core/List";
import Map "mo:core/Map";
import ProjectsApi "mixins/projects-api";
import TemplatesApi "mixins/templates-api";
import ProfilesApi "mixins/profiles-api";
import GamificationApi "mixins/gamification-api";
import SocialApi "mixins/social-api";
import AiGenerateApi "mixins/ai-generate-api";

actor {
  let projects = List.empty<ProjectTypes.Project>();
  let templates = List.empty<TemplateTypes.Template>();
  let profiles = Map.empty<CommonTypes.UserId, ProfileTypes.UserProfile>();
  let nextProjectId = [var 1 : Nat];
  let statsMap = Map.empty<CommonTypes.UserId, GamificationTypes.CreatorStats>();
  let ideasMap = Map.empty<Nat, SocialTypes.PublicIdea>();
  let nextIdeaId = [var 1 : Nat];

  // Seed templates on first run
  do {
    TemplateLib.seedTemplates(templates);
  };

  include ProjectsApi(projects, profiles, nextProjectId);
  include TemplatesApi(templates);
  include ProfilesApi(profiles);
  include GamificationApi(statsMap, profiles);
  include SocialApi(ideasMap, nextIdeaId, statsMap, profiles);
  include AiGenerateApi();
};
