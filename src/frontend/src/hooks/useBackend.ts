import { createActor } from "@/backend";
import { useXpStore } from "@/store/xpStore";
import type {
  AiFeatureSuggestion,
  CreateProjectInput,
  CreatorStats,
  LeaderboardEntry,
  Project,
  ProjectId,
  PublicIdea,
  PublishIdeaInput,
  Template,
  TemplateId,
  UpdateProjectInput,
  UserProfile,
  XpAction,
} from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ─── Typed backend actor ──────────────────────────────────────────────────────
export interface GenerateResult {
  ai: string;
  trend: string;
  lucky: string;
  image: string;
}

type BackendActor = {
  listMyProjects(): Promise<Project[]>;
  getProject(id: ProjectId): Promise<[] | [Project]>;
  createProject(input: CreateProjectInput): Promise<Project>;
  updateProject(id: ProjectId, input: UpdateProjectInput): Promise<boolean>;
  deleteProject(id: ProjectId): Promise<boolean>;
  getAiSuggestions(id: ProjectId): Promise<AiFeatureSuggestion[]>;
  listTemplates(cat: [] | [string]): Promise<Template[]>;
  getTemplate(id: TemplateId): Promise<[] | [Template]>;
  getMyProfile(): Promise<UserProfile>;
  updateDisplayName(name: string): Promise<boolean>;
  getMyStats(): Promise<CreatorStats>;
  getLeaderboard(limit: bigint): Promise<LeaderboardEntry[]>;
  awardXpForAction(action: XpAction): Promise<bigint>;
  publishIdea(input: PublishIdeaInput): Promise<PublicIdea>;
  listPublicIdeas(
    sort: [] | [string],
    category: [] | [string],
    limit: bigint,
  ): Promise<PublicIdea[]>;
  likeIdea(ideaId: bigint): Promise<boolean>;
  remixIdea(ideaId: bigint): Promise<PublicIdea>;
  getPublicIdea(ideaId: bigint): Promise<[] | [PublicIdea]>;
  incrementViewCount(ideaId: bigint): Promise<boolean>;
  generate(prompt: string, device: string): Promise<GenerateResult>;
};

function useBackendActor() {
  const { actor, isFetching } = useActor(createActor);
  return { actor: actor as unknown as BackendActor | null, isFetching };
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export function useListProjects() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listMyProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProject(id: ProjectId) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Project | undefined>({
    queryKey: ["project", id.toString()],
    queryFn: async () => {
      if (!actor) return undefined;
      const result = await actor.getProject(id);
      return result[0];
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateProject() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation<Project, Error, CreateProjectInput>({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.createProject(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });
}

export function useUpdateProject() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation<
    boolean,
    Error,
    { id: ProjectId; input: UpdateProjectInput }
  >({
    mutationFn: async ({ id, input }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateProject(id, input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });
}

export function useDeleteProject() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation<boolean, Error, ProjectId>({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deleteProject(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  });
}

export function useGetAiSuggestions(projectId: ProjectId) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<AiFeatureSuggestion[]>({
    queryKey: ["ai-suggestions", projectId.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAiSuggestions(projectId);
    },
    enabled: !!actor && !isFetching,
  });
}

// ─── Templates ────────────────────────────────────────────────────────────────

export function useListTemplates(category?: string) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Template[]>({
    queryKey: ["templates", category ?? "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listTemplates(category ? [category] : []);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTemplate(id: TemplateId) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Template | undefined>({
    queryKey: ["template", id.toString()],
    queryFn: async () => {
      if (!actor) return undefined;
      const result = await actor.getTemplate(id);
      return result[0];
    },
    enabled: !!actor && !isFetching,
  });
}

// ─── Profile ──────────────────────────────────────────────────────────────────

export function useGetProfile() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<UserProfile>({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!actor) throw new Error("Not authenticated");
      return actor.getMyProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateDisplayName() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation<boolean, Error, string>({
    mutationFn: async (name) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateDisplayName(name);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["profile"] }),
  });
}

// ─── Creator Stats & Leaderboard ──────────────────────────────────────────────

export function useGetMyStats() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<CreatorStats | null>({
    queryKey: ["my-stats"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetLeaderboard(limit: number) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<LeaderboardEntry[]>({
    queryKey: ["leaderboard", limit],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeaderboard(BigInt(limit));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAwardXp() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  const addXpToast = useXpStore((s) => s.addXpToast);

  const XP_AMOUNTS: Partial<Record<keyof XpAction, number>> = {
    GenerateIdea: 50,
    ShareIdea: 30,
    RemixIdea: 40,
    ReceiveLike: 5,
  };
  const XP_LABELS: Partial<Record<keyof XpAction, string>> = {
    GenerateIdea: "Generated an idea",
    ShareIdea: "Shared your idea",
    RemixIdea: "Remixed an idea",
    ReceiveLike: "Someone liked your idea",
  };

  return useMutation<bigint, Error, XpAction>({
    mutationFn: async (action) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.awardXpForAction(action);
    },
    onSuccess: (xp, action) => {
      qc.invalidateQueries({ queryKey: ["my-stats"] });
      qc.invalidateQueries({ queryKey: ["leaderboard"] });
      // Activate custom XP toast
      const actionKey = Object.keys(action)[0] as keyof XpAction;
      const amount = XP_AMOUNTS[actionKey] ?? Number(xp);
      const label = XP_LABELS[actionKey] ?? "XP earned";
      addXpToast(amount, label);
    },
  });
}

// ─── Public Ideas / Feed ──────────────────────────────────────────────────────

export function usePublishIdea() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation<PublicIdea, Error, PublishIdeaInput>({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.publishIdea(input);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["public-ideas"] });
      qc.invalidateQueries({ queryKey: ["my-stats"] });
    },
  });
}

export function useListPublicIdeas(
  sort?: string,
  category?: string,
  limit = 20,
) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PublicIdea[]>({
    queryKey: ["public-ideas", sort ?? "recent", category ?? "all", limit],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listPublicIdeas(
        sort ? [sort] : [],
        category ? [category] : [],
        BigInt(limit),
      );
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLikeIdea() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation<boolean, Error, bigint>({
    mutationFn: async (ideaId) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.likeIdea(ideaId);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["public-ideas"] }),
  });
}

export function useRemixIdea() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation<PublicIdea, Error, bigint>({
    mutationFn: async (ideaId) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.remixIdea(ideaId);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["public-ideas"] });
      qc.invalidateQueries({ queryKey: ["my-stats"] });
    },
  });
}

export function useGetPublicIdea(ideaId: bigint) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PublicIdea | null>({
    queryKey: ["public-idea", ideaId.toString()],
    queryFn: async () => {
      if (!actor) return null;
      const result = await actor.getPublicIdea(ideaId);
      return result[0] ?? null;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIncrementView() {
  const { actor } = useBackendActor();
  return useMutation<boolean, Error, bigint>({
    mutationFn: async (ideaId) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.incrementViewCount(ideaId);
    },
  });
}

// ─── Multi-AI Generator ───────────────────────────────────────────────────────

export interface GenerateInput {
  prompt: string;
  device: string;
}

export function useGenerate() {
  const { actor } = useBackendActor();
  return useMutation<GenerateResult, Error, GenerateInput>({
    mutationFn: async ({ prompt, device }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.generate(prompt, device);
    },
  });
}
