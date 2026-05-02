import { create } from "zustand";

interface XpToastItem {
  id: string;
  amount: number;
  label: string;
}

interface XpStoreState {
  pendingXpToasts: XpToastItem[];
  addXpToast: (amount: number, label: string) => void;
  removeXpToast: (id: string) => void;
}

export const useXpStore = create<XpStoreState>((set) => ({
  pendingXpToasts: [],

  addXpToast: (amount, label) => {
    const id = `xp-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    set((state) => ({
      pendingXpToasts: [...state.pendingXpToasts, { id, amount, label }],
    }));
  },

  removeXpToast: (id) => {
    set((state) => ({
      pendingXpToasts: state.pendingXpToasts.filter((t) => t.id !== id),
    }));
  },
}));
