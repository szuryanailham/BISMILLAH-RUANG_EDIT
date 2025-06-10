import { z } from "zod";

export const EditProfileSchema = z.object({
    name: z.string().min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Email tidak valid"),
    phone_number: z.string().min(10, "Nomor HP minimal 10 digit"),
    instagram_link: z
        .string()
        .url("Link Instagram tidak valid")
        .refine((url) => {
            return (
                url.includes("instagram.com/") || url.includes("instagr.am/")
            );
        }, "Link harus berupa URL Instagram yang valid"),
    // birth_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    //     message: "Tanggal lahir tidak valid",
    // }),
    creative_field: z
        .enum(["design", "photographer", "videographer"], {
            errorMap: () => ({ message: "Pilih salah satu bidang kreatif" }),
        })
        .nullable(),
    photo: z.any().optional(),
});
