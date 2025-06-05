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
}
