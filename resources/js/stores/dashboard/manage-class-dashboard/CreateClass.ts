// stores/useDescriptionStore.ts
import { create } from "zustand";

interface DescriptionState {
    description: string;
    setDescription: (desc: string) => void;
}

export const useDescriptionStore = create<DescriptionState>((set) => ({
    description: "",
    setDescription: (desc) => set({ description: desc }),
}));
