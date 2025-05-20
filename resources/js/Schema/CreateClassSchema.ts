import * as z from "zod";

export const formSchema = z.object({
    previewUrl: z.string().url({ message: "Masukkan URL Youtube yang valid." }),
    title: z.string().min(2, { message: "Judul minimal 2 karakter." }),
    slug: z.string().min(2, { message: "Slug minimal 2 karakter." }),
    isActive: z.boolean(),
    price: z
        .string()
        .min(1, { message: "Harga tidak boleh kosong." })
        .regex(/^\d+$/, { message: "Harga harus berupa angka." }),
    mentor: z.string().min(1, { message: "Pilih mentor." }),
    category: z.string().min(1, { message: "Pilih kategori kelas." }),
    level: z.string().min(1, { message: "Pilih level kelas." }),
    description: z.string().min(25, { message: "Minimal 25 kata." }),
    goals: z.array(z.string().min(1)).min(1, { message: "Minimal 1 Goal." }),
    requirements: z
        .array(z.string().min(1))
        .min(1, { message: "Minimal 1 Requirment." }),
});
