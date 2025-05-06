import { create } from "zustand";

interface RatingState {
    rating: number;
    setRating: (value: number) => void;
}

export const useRatingStore = create<RatingState>((set) => ({
    rating: 0,
    setRating: (value) => set({ rating: value }),
}));
