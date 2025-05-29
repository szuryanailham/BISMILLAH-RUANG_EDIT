import { z } from "zod";

export const EditMateriSchema = z.object({
    title: z.string().min(3, "Judul harus minimal 3 karakter"),
    description: z.string().min(10, "Deskripsi harus minimal 10 karakter"),
    videoUrl: z
        .string()
        .url("URL video tidak valid")
        .optional()
        .or(z.literal("")),
    pdfFile: z
        .instanceof(File)
        .optional()
        .refine(
            (file) => !file || ["application/pdf"].includes(file.type),
            "File harus berupa PDF"
        ),
});
