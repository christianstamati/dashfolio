import { create } from "zustand";

interface Navbar {
  minimized: boolean;
  setMinimized: (value: boolean) => void;
  toggleMinimized: () => void;
}

// tells me if the navigation is minimized or maximized
export const useNavbar = create<Navbar>()((set) => ({
  minimized: false,
  setMinimized: (value) => set({ minimized: value }),
  toggleMinimized: () => set((state) => ({ minimized: !state.minimized })),
}));
