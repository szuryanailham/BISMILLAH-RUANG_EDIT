import { z } from "zod";

export const EditProfileSchema = z.object({
    name: z.string().min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Email tidak valid"),
    phone_number: z.string().min(10, "Nomor HP minimal 10 digit"),
    birth_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Tanggal lahir tidak valid",
    }),
    creative_field: z.string().min(2, "Bidang kreatif tidak boleh kosong"),
    photo: z.any().optional(),
});
