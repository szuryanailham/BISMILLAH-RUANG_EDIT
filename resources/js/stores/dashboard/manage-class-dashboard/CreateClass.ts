// stores/useDescriptionStore.ts
import { create } from "zustand";

interface DescriptionState {
    description: string;
    setDescription: (desc: string) => void;
}

interface GoalsStore {
    goals: string[];
    setGoal: (index: number, value: string) => void;
    addGoal: () => void;
    removeGoal: (index: number) => void;
}

interface RequirementsStore {
    requirements: string[];
    setRequirement: (index: number, value: string) => void;
    addRequirement: () => void;
    removeRequirement: (index: number) => void;
}

interface ToggleFreeClass {
    isFree: boolean;
    setIsFree: (value: boolean) => void;
}

interface isActiveClass {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}

export const useToggleFreeClass = create<ToggleFreeClass>((set) => ({
    isFree: false,
    setIsFree: (value) => set({ isFree: value }),
}));

export const useIsActiveClass = create<isActiveClass>((set) => ({
    isActive: false,
    setIsActive: (value) => set({ isActive: value }),
}));

export const useDescriptionStore = create<DescriptionState>((set) => ({
    description: "",
    setDescription: (desc) => set({ description: desc }),
}));

export const useGoalsStore = create<GoalsStore>((set) => ({
    goals: [""],
    setGoal: (index, value) =>
        set((state) => {
            const updated = [...state.goals];
            updated[index] = value;
            return { goals: updated };
        }),
    addGoal: () =>
        set((state) => ({
            goals: [...state.goals, ""],
        })),
    removeGoal: (index) =>
        set((state) => ({
            goals: state.goals.filter((_, i) => i !== index),
        })),
}));

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
