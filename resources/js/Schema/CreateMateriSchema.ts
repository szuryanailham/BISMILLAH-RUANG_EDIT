// Schema validasi dengan zod
import * as z from "zod";
import { sanitizeString } from "@/utils/stringHelpers";

const MAX_PDF_SIZE = 5 * 1024 * 1024; // contoh: maksimal 5MB

export const CreateMateriSchema = z.object({
    title: z.string().min(3, "Judul minimal 3 karakter"),
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
    videoUrl: z.string().url("URL tidak valid"),
    pdfFile: z
        .instanceof(File)
        .refine((file) => file.type === "application/pdf", {
            message: "File harus berupa PDF.",
        })
        .refine((file) => file.size <= MAX_PDF_SIZE, {
            message: "Ukuran file maksimal 5MB.",
        }),
});
