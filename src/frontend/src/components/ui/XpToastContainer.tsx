import { useXpStore } from "@/store/xpStore";
import { XpToast } from "./XpToast";

const MAX_VISIBLE = 3;

export function XpToastContainer() {
  const { pendingXpToasts, removeXpToast } = useXpStore();
  const visible = pendingXpToasts.slice(-MAX_VISIBLE);

  if (visible.length === 0) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col-reverse gap-2 pointer-events-none"
      aria-label="XP notifications"
      data-ocid="xp_toast_container"
    >
      {visible.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <XpToast
            amount={toast.amount}
            label={toast.label}
            onDismiss={() => removeXpToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
}
