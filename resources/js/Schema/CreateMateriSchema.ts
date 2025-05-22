// Schema validasi dengan zod
import * as z from "zod";
import { sanitizeString } from "@/utils/stringHelpers";

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
    pdfFile: z.any().optional(), // file opsional
});
