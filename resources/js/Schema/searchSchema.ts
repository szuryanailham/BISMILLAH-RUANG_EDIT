// validations/searchSchema.ts
import { sanitizeString } from "@/utils/stringHelpers";
import { z } from "zod";

export const searchSchema = z.object({
    search: z
        .string()
        .min(3, "Kata kunci minimal 3 karakter")
        .refine(sanitizeString, {
            message:
                "Judul tidak boleh mengandung tag HTML atau karakter berbahaya",
        })
        .refine(sanitizeString, {
            message:
                "Judul tidak boleh mengandung tag HTML atau karakter berbahaya",
        }),
});

export type SearchSchema = z.infer<typeof searchSchema>;
