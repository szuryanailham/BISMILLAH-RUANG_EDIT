import { create } from "zustand";
import { Material } from "@/types/LearningPage";

interface ActiveMaterialStore {
    activeMaterial: Material | null;
    setActiveMaterial: (material: Material) => void;
}

const useActiveMaterial = create<ActiveMaterialStore>((set) => ({
    activeMaterial: null,
    setActiveMaterial: (material) => set({ activeMaterial: material }),
}));

export default useActiveMaterial;
