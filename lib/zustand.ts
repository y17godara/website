import { create } from "zustand";

interface AlertState {
  isVisible: boolean;
  toggleVisibility: () => void;
  show: () => void;
  hide: () => void;
}

const useAlertStore = create<AlertState>((set) => ({
  isVisible: true, // Default to visible
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
  show: () => set({ isVisible: true }),
  hide: () => set({ isVisible: false }),
}));

export default useAlertStore;
