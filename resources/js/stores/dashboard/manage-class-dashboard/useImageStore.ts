// stores/useImageStore.ts
import { create } from "zustand";

interface ImageStore {
    file: File | null;
    preview: string | null;
    setFile: (file: File | null) => void;
    setPreview: (preview: string | null) => void;
    reset: () => void;
}

export const useImageStore = create<ImageStore>((set) => ({
    file: null,
    preview: null,
    setFile: (file) => set({ file }),
    setPreview: (preview) => set({ preview }),
    reset: () => set({ file: null, preview: null }),
}));
