// src/types/course.ts

export interface CourseInclude {
    videoCount: number;
    accessPlatform: string;
    lifetimeAccess: boolean;
    certificate: boolean;
}

type RequirementItem = {
    description: string;
};

type MaterialItem = {
    id: number;
    title: string;
    description: string;
};

type Category_class = {
    category_class: string;
    description: string;
};

export type Mentor = {
    id: number;
    name: string;
    specialist: string;
    description: string;
    photo: string;
    instagram_link: string;
    category_class: Category_class; // ✅ Bukan array, karena belongsTo
};
export interface Course {
    id: number;
    class_code: string; // Kode Kelas
    slug: string; // URL Slug
    mentor_id: number; // ID Mentor
    title: string; // Judul Kelas
    description: string; // Deskripsi Kelas
    rating_class: number; // Rating Kelas
    goals: string[]; //
    requirements: RequirementItem[]; //
    total_videos: number; // Jumlah Video
    students_count: number; // Jumlah Siswa
    price: number; // Harga
    is_free: boolean; // Apakah Gratis
    token_code: string; // Kode Token Kelas
    level_category: "beginner" | "intermediate" | "expert"; // Tingkat Kelas
    category_class:
        | "Capcut"
        | "Figma"
        | "Canva"
        | "Photoshop"
        | "Illustrator"
        | "Premiere Pro"
        | "After Effects"
        | "Lightroom"
        | "DaVinci Resolve"
        | "Final Cut Pro"; // Kategori Kelas
    video_preview_url?: string; // URL Preview Video (Optional)
    created_at: string; // Tanggal Dibuat
    updated_at: string; // Tanggal Diperbarui
    includes: CourseInclude; // Informasi tambahan tentang kursus
    whatYouLearn: string[]; // Apa yang akan dipelajari
    modules: {
        // Modul Kelas
        title: string;
        content: string;
    }[];
    materials: MaterialItem[];
    mentor: Mentor;
}
