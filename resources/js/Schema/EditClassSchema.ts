import { sanitizeString } from "@/utils/stringHelpers";
import * as z from "zod";

const posterSchema = z
    .instanceof(FileList, { message: "The poster field must be a file." })
    .refine((fileList) => fileList.length === 1, {
        message: "Gambar wajib diunggah",
    })
    .refine((fileList) => fileList[0].size <= 200 * 1024, {
        message: "Ukuran gambar maksimal 200 KB",
    })
    .refine(
        async (fileList) => {
            const poster = fileList[0];
            if (!poster) return false;

            const img = await new Promise<HTMLImageElement>((resolve) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const imgEl = new Image();
                    imgEl.onload = () => resolve(imgEl);
                    imgEl.src = reader.result as string;
                };
                reader.readAsDataURL(poster);
            });

            return img.width === 600 && img.height === 400;
        },
        { message: "Resolusi gambar harus 600×400 piksel" }
    );

export const formSchema = z
    .object({
        ClassTittle: z
            .string()
            .min(2, { message: "Judul kelas minimal 2 karakter" })
            .max(100, { message: "Judul kelas maksimal 50 karakter" })
            .refine(sanitizeString, {
                message:
                    "Judul tidak boleh mengandung tag HTML atau karakter berbahaya",
            }),
        poster: posterSchema.optional(),
        goals: z.array(
            z.object({
                value: z.string().min(1, "Goal tidak boleh kosong"),
            })
        ),
        requirements: z.array(
            z.object({
                value: z.string().min(1, "Requirement tidak boleh kosong"),
            })
        ),
        slug: z
            .string()
            .min(2, { message: "Slug minimal 2 karakter" })
            .max(50, { message: "Slug maksimal 50 karakter" })
            .regex(/^[a-z0-9-]+$/, {
                message:
                    "Slug hanya boleh mengandung huruf kecil, angka, dan tanda hubung (-)",
            }),
        isPublished: z.boolean(),
        isFree: z.boolean(),
        price: z.coerce
            .number({ invalid_type_error: "Harga harus berupa angka" })
            .optional(),
        previewUrl: z
            .string()
            .url({ message: "URL preview tidak valid" })
            .optional(),
        mentor_id: z.coerce
            .number({
                invalid_type_error: "Mentor harus dipilih dan berupa angka",
            })
            .int({ message: "ID Mentor harus berupa bilangan bulat" })
            .positive({ message: "ID Mentor tidak valid" }),
        description: z
            .string()
            .min(10, { message: "Deskripsi minimal 10 karakter" })
            .refine(sanitizeString, {
                message:
                    "Deskripsi tidak boleh mengandung tag HTML atau karakter berbahaya",
            })
            .refine((val) => val.trim().split(/\s+/).length <= 50, {
                message: "Deskripsi maksimal 50 kata",
            }),
        Category_id: z.coerce
            .number()
            .min(1, { message: "Kategori harus dipilih" }),
        Level: z.string().min(1, { message: "Level harus dipilih" }),
    })
    .superRefine((data, ctx) => {
        if (!data.isFree) {
            if (data.price === undefined || data.price === null) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["price"],
                    message: "Harga harus diisi jika kelas tidak gratis",
                });
            } else if (data.price <= 0) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["price"],
                    message: "Harga harus lebih dari 0",
                });
            }
        }
    });
