import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
  lines?: number;
  showImage?: boolean;
  showBadge?: boolean;
}

const LINE_KEYS = ["line-a", "line-b", "line-c", "line-d", "line-e"];
const GRID_KEYS = [
  "grid-a",
  "grid-b",
  "grid-c",
  "grid-d",
  "grid-e",
  "grid-f",
  "grid-g",
  "grid-h",
];

export function SkeletonCard({
  className,
  lines = 2,
  showImage = false,
  showBadge = true,
}: SkeletonCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-5 backdrop-blur-md bg-card/50 border border-border/20 space-y-3",
        className,
      )}
    >
      {showImage && <Skeleton className="h-36 w-full rounded-lg bg-muted/40" />}
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-2/3 rounded-md bg-muted/40" />
        {showBadge && (
          <Skeleton className="h-5 w-16 rounded-full bg-muted/40" />
        )}
      </div>
      {LINE_KEYS.slice(0, lines).map((key, i) => (
        <Skeleton
          key={key}
          className={cn(
            "h-3.5 rounded-md bg-muted/30",
            i === lines - 1 ? "w-1/2" : "w-full",
          )}
        />
      ))}
    </div>
  );
}

export function SkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {GRID_KEYS.slice(0, count).map((key) => (
        <SkeletonCard key={key} showImage lines={2} />
      ))}
    </div>
  );
}
