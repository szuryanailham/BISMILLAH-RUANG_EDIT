import { create } from "zustand";
import { ClassData } from "@/types/dashboard/manage-class-dashboard/ClassData";
interface ClassStore {
    isDialogOpen: boolean;
    selectedClass: ClassData | null;
    setSelectedClass: (kelas: ClassData) => void;
    setIsDialogOpen: (open: boolean) => void;
}

export const useClassStore = create<ClassStore>((set) => ({
    isDialogOpen: false,
    selectedClass: null,
    setSelectedClass: (kelas) =>
        set({ selectedClass: kelas, isDialogOpen: true }),
    setIsDialogOpen: (open) => set({ isDialogOpen: open }),
}));
