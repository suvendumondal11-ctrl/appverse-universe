import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LeaderboardEntry {
    displayName: string;
    userId: Principal;
    totalXp: bigint;
    rank: bigint;
    ideasCount: bigint;
    level: CreatorLevel;
}
export type Timestamp = bigint;
export interface CreatorStats {
    streak: bigint;
    userId: Principal;
    totalXp: bigint;
    level: CreatorLevel;
    ideasGenerated: bigint;
    totalLikes: bigint;
    totalRemixes: bigint;
}
export type TemplateId = bigint;
export interface Template {
    id: TemplateId;
    name: string;
    description: string;
    category: string;
    featureList: Array<string>;
}
export interface PublishIdeaInput {
    features: Array<string>;
    earningModel: string;
    colorTheme: string;
    appName: string;
    description: string;
    category: string;
}
export type UserId = Principal;
export interface PublicIdea {
    id: bigint;
    uniquenessScore: bigint;
    features: Array<string>;
    likeCount: bigint;
    remixCount: bigint;
    earningModel: string;
    colorTheme: string;
    appName: string;
    createdAt: Timestamp;
    creatorId: Principal;
    description: string;
    marketScore: bigint;
    creatorName: string;
    viewCount: bigint;
    viralScore: bigint;
    successScore: bigint;
    category: string;
    isPublic: boolean;
    monetizationScore: bigint;
}
export interface UpdateProjectInput {
    status: ProjectStatus;
    name: string;
    tags: Array<string>;
    description: string;
    featureList: Array<string>;
}
export interface AiFeatureSuggestion {
    id: bigint;
    title: string;
    description: string;
    category: string;
    priority: bigint;
}
export type ProjectId = bigint;
export interface CreateProjectInput {
    name: string;
    tags: Array<string>;
    description: string;
    featureList: Array<string>;
}
export interface Project {
    id: ProjectId;
    status: ProjectStatus;
    owner: UserId;
    name: string;
    createdAt: Timestamp;
    tags: Array<string>;
    description: string;
    updatedAt: Timestamp;
    featureList: Array<string>;
}
export interface UserProfile {
    displayName: string;
    userId: UserId;
    createdAt: Timestamp;
    totalProjects: bigint;
}
export enum CreatorLevel {
    Dreamer = "Dreamer",
    Builder = "Builder",
    Legend = "Legend",
    Creator = "Creator"
}
export enum ProjectStatus {
    deployed = "deployed",
    active = "active",
    draft = "draft"
}
export enum Variant_trending_newest_mostRemixed_mostLiked {
    trending = "trending",
    newest = "newest",
    mostRemixed = "mostRemixed",
    mostLiked = "mostLiked"
}
export enum XpAction {
    RemixIdea = "RemixIdea",
    ShareIdea = "ShareIdea",
    ReceiveLike = "ReceiveLike",
    GenerateIdea = "GenerateIdea"
}
export interface backendInterface {
    awardXpForAction(action: XpAction): Promise<bigint>;
    createProject(input: CreateProjectInput): Promise<Project>;
    deleteProject(id: ProjectId): Promise<boolean>;
    generate(prompt: string, device: string): Promise<{
        ai: string;
        trend: string;
        lucky: string;
        image: string;
    }>;
    getAiSuggestions(projectId: ProjectId): Promise<Array<AiFeatureSuggestion>>;
    getLeaderboard(limit: bigint): Promise<Array<LeaderboardEntry>>;
    getMyProfile(): Promise<UserProfile>;
    getMyStats(): Promise<CreatorStats>;
    getProject(id: ProjectId): Promise<Project | null>;
    getPublicIdea(ideaId: bigint): Promise<PublicIdea | null>;
    getTemplate(id: TemplateId): Promise<Template | null>;
    incrementViewCount(ideaId: bigint): Promise<void>;
    likeIdea(ideaId: bigint): Promise<bigint>;
    listMyProjects(): Promise<Array<Project>>;
    listPublicIdeas(sort: Variant_trending_newest_mostRemixed_mostLiked, category: string | null, limit: bigint): Promise<Array<PublicIdea>>;
    listTemplates(category: string | null): Promise<Array<Template>>;
    publishIdea(input: PublishIdeaInput): Promise<bigint>;
    remixIdea(ideaId: bigint): Promise<PublicIdea>;
    updateDisplayName(name: string): Promise<boolean>;
    updateProject(id: ProjectId, input: UpdateProjectInput): Promise<boolean>;
}
