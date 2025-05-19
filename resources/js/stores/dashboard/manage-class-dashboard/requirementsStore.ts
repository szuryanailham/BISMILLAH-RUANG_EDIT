import { create } from "zustand";

interface RequirementsStore {
    requirements: string[];
    setRequirement: (index: number, value: string) => void;
    addRequirement: () => void;
    removeRequirement: (index: number) => void;
}

export const useRequirementsStore = create<RequirementsStore>((set) => ({
    requirements: [""],
    setRequirement: (index, value) =>
        set((state) => {
            const updated = [...state.requirements];
            updated[index] = value;
            return { requirements: updated };
        }),
    addRequirement: () =>
        set((state) => ({
            requirements: [...state.requirements, ""],
        })),
    removeRequirement: (index) =>
        set((state) => ({
            requirements: state.requirements.filter((_, i) => i !== index),
        })),
}));
