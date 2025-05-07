// stores/useAuthDialog.ts
import { create } from "zustand";

interface AuthDialogState {
    isRegister: boolean;
    openLogin: () => void;
    openRegister: () => void;
}

export const useAuthDialog = create<AuthDialogState>((set) => ({
    isRegister: false,
    openLogin: () => set({ isRegister: false }),
    openRegister: () => set({ isRegister: true }),
}));
