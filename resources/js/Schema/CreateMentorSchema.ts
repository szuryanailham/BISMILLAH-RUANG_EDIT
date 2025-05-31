import * as z from "zod";
import { sanitizeString } from "@/utils/stringHelpers";
// Ukuran maksimum file dalam byte (2MB)
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const formSchema = z.object({
    name: z
        .string()
        .min(1, "Nama wajib diisi")
        .regex(/^[a-zA-Z0-9\s.'-]+$/, "Nama mengandung karakter tidak valid"),

    category_class_id: z.number({
        required_error: "Kategori wajib dipilih",
        invalid_type_error: "ID kategori harus berupa angka",
    }),

    status: z.boolean(),

    rating_mentor: z
        .number({ invalid_type_error: "Rating harus berupa angka" })
        .min(0, "Rating minimal 0")
        .max(5, "Rating maksimal 5")
        .refine(
            (val) => {
                // Cek maksimal 2 digit di belakang koma
                return /^\d+(\.\d{1,2})?$/.test(val.toString());
            },
            {
                message: "Rating maksimal 2 angka desimal",
            }
        ),

    description: z
        .string()
        .min(10, { message: "Deskripsi minimal 10 karakter" })
        .refine(sanitizeString, {
            message:
                "Deskripsi tidak boleh mengandung tag HTML atau karakter berbahaya",
        })
        .refine((val) => val.trim().split(/\s+/).length <= 30, {
            message: "Deskripsi maksimal 30 kata",
        }),

    link_instagram: z
        .string()
        .url("Masukkan URL Instagram yang valid")
        .optional(),

    profile_image: z
        .any()
        .optional()
        .refine((file) => {
            if (!file) return true;
            return file instanceof File;
        }, "Berkas tidak valid")
        .refine((file) => {
            if (!file) return true;
            return ACCEPTED_IMAGE_TYPES.includes(file.type);
        }, "Hanya gambar jpeg, png, atau webp yang diperbolehkan")
        .refine((file) => {
            if (!file) return true;
            return file.size <= MAX_FILE_SIZE;
        }, "Ukuran gambar maksimal 2MB"),
});
