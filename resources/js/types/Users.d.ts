export type CreativeField = "design" | "photographer" | "videographer";

export interface User {
    id: number;
    name: string;
    nama: String;
    email: string;
    kelasDiikuti: number;
    email_verified_at: string | null;
    password: string;
    phone_number: string | null;
    creative_field: CreativeField | null;
    instagram_link: string | null;
    remember_token: string | null;
    created_at: string;
    joined_classes_count: number;
    updated_at: string;
    phone_number?: string;
    creative_field?: string; // kalau sudah ganti jadi string enum / string biasa
    birth_date?: string; // tambahkan ini, tipe string dalam format tanggal (YYYY-MM-DD)
    photo?: string;
}
