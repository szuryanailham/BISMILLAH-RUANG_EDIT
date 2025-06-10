import { create } from "zustand";

interface AuthDialogState {
    isRegister: boolean;
    isOpen: boolean;
    openLogin: () => void;
    openRegister: () => void;
}

export const useAuthDialog = create<AuthDialogState>((set) => ({
    isRegister: false,
    isOpen: false,
    openLogin: () => set({ isRegister: false, isOpen: true }),
    openRegister: () => set({ isRegister: true, isOpen: true }),
    resetToLogin: () => set({ isRegister: false }), // Tambahan ini
}));
