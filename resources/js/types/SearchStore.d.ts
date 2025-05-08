export interface SearchStore {
    isOpen: boolean;
    selectedCategory: string;
    toggleDropdown: () => void;
    selectCategory: (category: string) => void;
    closeDropdown: () => void;
}
