import { z } from "zod";

export const registerSchema = z
    .object({
        firstName: z
            .string()
            .min(2, "Nama depan minimal 2 karakter")
            .max(50, "Nama depan maksimal 50 karakter"),
        lastName: z
            .string()
            .min(2, "Nama belakang minimal 2 karakter")
            .max(50, "Nama belakang maksimal 50 karakter"),
        email: z.string().email("Format email tidak valid"),
        password: z
            .string()
            .min(8, "Password minimal 8 karakter")
            .regex(/[A-Z]/, "Password harus mengandung huruf kapital")
            .regex(/[0-9]/, "Password harus mengandung angka")
            .regex(/[^a-zA-Z0-9]/, "Password harus mengandung simbol"),
        password_confirmation: z.string(),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Konfirmasi password tidak cocok",
        path: ["confirmPassword"],
    });

export type RegisterSchema = z.infer<typeof registerSchema>;
