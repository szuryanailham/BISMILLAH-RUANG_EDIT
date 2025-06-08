// schemas/login-schema.ts
import { z } from "zod";
import { sanitizeString } from "@/utils/stringHelpers";

export const loginUserSchema = z.object({
    email: z
        .string()
        .email({ message: "Email tidak valid" })
        .refine(sanitizeString, {
            message:
                "Deskripsi tidak boleh mengandung tag HTML atau karakter berbahaya",
        }),

    password: z
        .string()
        .min(6, { message: "Minimal 6 karakter" })
        .max(100, { message: "Password terlalu panjang" }),
});
