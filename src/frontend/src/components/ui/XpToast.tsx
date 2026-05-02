import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface XpToastProps {
  amount: number;
  label: string;
  onDismiss: () => void;
}

export function XpToast({ amount, label, onDismiss }: XpToastProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const dismissTimer = setTimeout(() => {
      setExiting(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      onDismiss();
    }, 2500);

    return () => {
      clearTimeout(dismissTimer);
      clearTimeout(removeTimer);
    };
  }, [onDismiss]);

  return (
    <output
      className={cn(
        "toast-xp relative flex items-center gap-3 px-4 py-3 rounded-xl",
        "glass-glow-accent min-w-[200px] max-w-[280px]",
        "border border-accent/60",
        exiting && "opacity-0 translate-y-4 transition-all duration-300",
      )}
      data-ocid="xp_toast"
      aria-live="polite"
    >
      {/* XP amount */}
      <div className="flex items-center gap-1 shrink-0">
        <span
          className="text-2xl font-display font-black text-accent"
          style={{ textShadow: "0 0 12px oklch(0.75 0.28 50 / 0.8)" }}
        >
          +{amount}
        </span>
        <span className="text-sm font-bold text-accent/80">XP</span>
      </div>

      {/* Divider */}
      <div className="h-8 w-px bg-accent/20" />

      {/* Label */}
      <p className="text-xs text-foreground/80 font-body leading-tight flex-1">
        {label}
      </p>

      {/* Close */}
      <button
        type="button"
        onClick={() => {
          setExiting(true);
          setTimeout(onDismiss, 300);
        }}
        className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
        aria-label="Dismiss XP notification"
        data-ocid="xp_toast.close_button"
      >
        <X className="h-3 w-3" />
      </button>
    </output>
  );
}
