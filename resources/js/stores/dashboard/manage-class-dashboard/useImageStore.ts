// stores/useImageStore.ts
import { create } from "zustand";

interface ImageStore {
    file: File | null;
    preview: string | null;
    setFile: (file: File | null) => void;
    setPreview: (preview: string | null) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    reset: () => void;
}

export const useImageStore = create<ImageStore>((set) => ({
    file: null,
    preview: null,
    setFile: (file) => set({ file }),
    setPreview: (preview) => set({ preview }),

    handleFileChange: (e) => {
        const file = e.target.files?.[0] ?? null;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                set({ file, preview: reader.result as string });
            };
            reader.readAsDataURL(file);
        } else {
            set({ file: null, preview: null });
        }
    },

    reset: () => set({ file: null, preview: null }),
}));
