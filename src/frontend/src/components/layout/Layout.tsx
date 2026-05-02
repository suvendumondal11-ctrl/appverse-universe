import { cn } from "@/lib/utils";
import { BottomTabBar } from "./BottomTabBar";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  /** Remove max-width container for full-bleed pages */
  fluid?: boolean;
}

export function Layout({ children, className, fluid = false }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden">
      {/* Deep-space ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Radial glow blobs */}
        <div
          className="absolute top-[-20%] left-[10%] h-[600px] w-[600px] rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: "oklch(var(--primary))" }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] h-[400px] w-[500px] rounded-full blur-[100px] opacity-[0.04]"
          style={{ background: "oklch(var(--secondary))" }}
        />
        <div
          className="absolute top-[40%] left-[50%] h-[300px] w-[300px] -translate-x-1/2 rounded-full blur-[80px] opacity-[0.03]"
          style={{ background: "oklch(var(--accent))" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      <main
        className={cn(
          "relative z-10 flex-1 pb-20 md:pb-0",
          !fluid && "container mx-auto px-4 lg:px-6 py-8",
          className,
        )}
      >
        {children}
      </main>

      <footer className="relative z-10 bg-muted/40 backdrop-blur-md border-t border-border/40 py-5 mb-16 md:mb-0">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} AppVerse. All rights reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </footer>

      <BottomTabBar />
    </div>
  );
}
