export type ClassData = {
    id: number;
    class_code: string;
    slug: string;
    mentor_id: number;
    category_class_id: number;
    title: string;
    description: string;
    rating_class: string;
    goals: string[];
    requirements: string[];
    total_videos: number;
    students_count: number;
    price: number;
    poster_image: string;
    is_free: number;
    is_published: number;
    token_code: string;
    level_category: "Beginner" | "Intermediate" | "Advanced" | string;
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
