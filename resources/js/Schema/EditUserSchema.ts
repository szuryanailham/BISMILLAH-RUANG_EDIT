import * as z from "zod";

export const editUserSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Nama harus memiliki minimal 3 karakter" })
        .max(100, { message: "Nama terlalu panjang" }),
    email: z.string().email({ message: "Email tidak valid" }),
    phone_number: z
        .string()
        .min(10, { message: "Nomor HP minimal 10 digit" })
        .max(15, { message: "Nomor HP maksimal 15 digit" })
        .optional()
        .or(z.literal("")),
    creative_field: z
        .enum(["design", "photographer", "videographer"])
        .optional()
        .or(z.literal("")),
    instagram_link: z
        .string()
        .url({ message: "Link Instagram harus valid" })
        .optional()
        .or(z.literal("")),
    password: z
        .string()
        .min(6, { message: "Password minimal 6 karakter" })
        .optional()
        .or(z.literal("")), // Kosong berarti tidak diubah
});
