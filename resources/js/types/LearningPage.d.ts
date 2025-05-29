export interface ClassData {
    id: number;
    title: string;
    slug: string;
    description: string;
    video_preview_url: string;
    level_category: string;
    category_class: string;
    mentor: {
        id: number;
        name: string;
        photo: string;
        specialist: string;
        instagram_link: string;
        description: string;
    };
    requirements: {
        label: string;
        description: string;
    }[]; // Menambahkan array requirement
}

export interface Material {
    id: number;
    title: string;
    materialCode: string;
    embed_url: string;
    description: string;
    pdf_url: string; // atau bisa dinamakan download_link
    requirements: {
        label: string;
        description: string;
    }[]; // Menambahkan array requirement
}
