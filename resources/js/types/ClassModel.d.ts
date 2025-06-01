// types/classModel.ts
export type RequirementItem = {
    label: string;
    description: string;
};

export interface Category {
    id: number;
    category_class:
        | "Capcut"
        | "Figma"
        | "Canva"
        | "Photoshop"
        | "Illustrator"
        | "PremierePro"
        | "AfterEffects"
        | "Lightroom"
        | "DaVinciResolve";
    description: string;
}

export interface ClassModel {
    id: number;
    class_code: string;
    slug: string;
    mentor_id: number;
    title: string;
    description: string;
    poster_image: string;
    rating_class: number;
    goals: string[];
    requirements: RequirementItem[];
    total_videos: number;
    students_count: number;
    price: number;
    is_free: boolean;
    token_code: string;
    level_category: "beginner" | "intermediate" | "expert";
    category_class?: Category | null;
    video_preview_url?: string; // Optional field
    mentor: Mentor; // <- Tambahan relasi mentor
    created_at: string;
    updated_at: string;
}
