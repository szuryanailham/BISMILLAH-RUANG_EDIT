// types/material.ts
export interface Material {
    id: number;
    materialCode: string;
    class_id: number;
    title: string;
    embed_url: string;
    description: string;
    pdf_url: string;
    created_at: string;
    updated_at: string;
    class: Kelas;
    mentor: Mentor;
}

interface Mentor {
    id: number;
    name: string;
}

interface Kelas {
    id: number;
    title: string;
    mentor: Mentor;
}
