import { SkeletonGrid } from "@/components/ui/SkeletonCard";
import { XpToastContainer } from "@/components/ui/XpToastContainer";
import { Toaster } from "@/components/ui/sonner";
import GenesisPage from "@/pages/Genesis";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const LandingPage = lazy(() => import("@/pages/Landing"));
const DashboardPage = lazy(() => import("@/pages/Dashboard"));
const BuilderPage = lazy(() => import("@/pages/Builder"));
const SettingsPage = lazy(() => import("@/pages/Settings"));
const FeedPage = lazy(() => import("@/pages/Feed"));
const ProfilePage = lazy(() => import("@/pages/Profile"));
const LeaderboardPage = lazy(() => import("@/pages/Leaderboard"));
const BrainstormPage = lazy(() => import("@/pages/Brainstorm"));
const CollabStudioPage = lazy(() => import("@/pages/CollabStudio"));
const LiveDataPage = lazy(() => import("@/pages/LiveData"));
const MagicEnginePage = lazy(() => import("@/pages/MagicEngine"));
const TransformCanvasPage = lazy(() => import("@/pages/TransformCanvas"));
const DreamWorldPage = lazy(() => import("@/pages/DreamWorld"));
const DigitalTwinLifePage = lazy(() => import("@/pages/DigitalTwinLife"));

function PageLoader() {
  return (
    <div className="container mx-auto px-4 lg:px-6 py-12">
      <SkeletonGrid count={4} />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster richColors position="bottom-right" />
      <XpToastContainer />
    </>
  ),
});

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LandingPage />
    </Suspense>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DashboardPage />
    </Suspense>
  ),
});

const builderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/builder/$id",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BuilderPage />
    </Suspense>
  ),
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <SettingsPage />
    </Suspense>
  ),
});

const feedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/feed",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FeedPage />
    </Suspense>
  ),
});

const liveDataRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/live-data",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LiveDataPage />
    </Suspense>
  ),
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProfilePage />
    </Suspense>
  ),
});

const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leaderboard",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LeaderboardPage />
    </Suspense>
  ),
});

const brainstormRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/brainstorm",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BrainstormPage />
    </Suspense>
  ),
});

const collabRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/collab",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CollabStudioPage />
    </Suspense>
  ),
});

const magicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/magic",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <MagicEnginePage />
    </Suspense>
  ),
});

const transformRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/transform",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TransformCanvasPage />
    </Suspense>
  ),
});

const genesisRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/genesis",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <GenesisPage />
    </Suspense>
  ),
});

const twinLifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/twin-life",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DigitalTwinLifePage />
    </Suspense>
  ),
});

const dreamWorldRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dream-world",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DreamWorldPage />
    </Suspense>
  ),
});

const digitalTwinLifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/digital-twin-life",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DigitalTwinLifePage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  landingRoute,
  dashboardRoute,
  builderRoute,
  settingsRoute,
  feedRoute,
  liveDataRoute,
  profileRoute,
  leaderboardRoute,
  brainstormRoute,
  collabRoute,
  magicRoute,
  transformRoute,
  dreamWorldRoute,
  twinLifeRoute,
  genesisRoute,
  digitalTwinLifeRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
