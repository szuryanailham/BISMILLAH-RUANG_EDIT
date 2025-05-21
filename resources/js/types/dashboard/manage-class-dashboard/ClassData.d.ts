export type ClassData = {
    id: number;
    class_code: string;
    slug: string;
    mentor_id: number;
    title: string;
    description: string;
    rating_class: string;
    goals: string[];
    requirements: { description: string }[];
    total_videos: number;
    students_count: number;
    price: number;
    is_free: 0 | 1;
    token_code: string;
    level_category: "Beginner" | "Intermediate" | "Advanced" | string;
    category_class: string;
    video_preview_url: string;
    created_at: string;
    updated_at: string;
    mentor?: {
        id: number;
        name: string;
        photo_url?: string;
        description?: string;
        instagram_link?: string;
    };
};

export type ClassDeleteProps = {
    kode_class: string;
};
