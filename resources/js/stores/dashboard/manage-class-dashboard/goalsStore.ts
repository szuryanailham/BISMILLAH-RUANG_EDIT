import { create } from "zustand";

interface GoalsStore {
    goals: string[];
    setGoal: (index: number, value: string) => void;
    addGoal: () => void;
    removeGoal: (index: number) => void;
}

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
