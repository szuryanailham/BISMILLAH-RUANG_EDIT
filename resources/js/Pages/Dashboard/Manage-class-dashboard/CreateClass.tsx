import React, { useEffect } from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Input } from "@/Components/ui/input";
import { Switch } from "@/Components/ui/switch";
import {
    Mentor,
    Category,
} from "@/types/dashboard/manage-class-dashboard/CreateData";
import { mentorsDummy } from "@/Data/MentorsDummy";
import { Textarea } from "@/Components/ui/textarea";

const sanitizeString = (value: string): boolean => {
    // Cegah tag HTML dan karakter berbahaya
    const blacklist = /<script.*?>.*?<\/script>|<.*?>|['"\\]/gi;
    return !blacklist.test(value);
};

const formSchema = z
    .object({
        titleClass: z
            .string()
            .min(2, { message: "Judul kelas minimal 2 karakter" })
            .max(50, { message: "Judul kelas maksimal 50 karakter" })
            .refine(sanitizeString, {
                message:
                    "Judul tidak boleh mengandung tag HTML atau karakter berbahaya",
            }),

        slug: z
            .string()
            .min(2, { message: "Slug minimal 2 karakter" })
            .max(50, { message: "Slug maksimal 50 karakter" })
            .regex(/^[a-z0-9-]+$/, {
                message:
                    "Slug hanya boleh mengandung huruf kecil, angka, dan tanda hubung (-)",
            }),

        isActive: z.boolean(),
        isFree: z.boolean(),

        price: z.coerce
            .number({
                invalid_type_error: "Harga harus berupa angka",
            })
            .optional(),

        previewUrl: z
            .string()
            .url({ message: "URL preview tidak valid" })
            .optional(),

        mentor: z.coerce
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
            .refine((val) => val.trim().split(/\s+/).length <= 30, {
                message: "Deskripsi maksimal 30 kata",
            }),

        categoryClass: z.string().min(1, { message: "Kategori harus dipilih" }),

        categoryLevel: z.string().min(1, { message: "Level harus dipilih" }),
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

// Membantu generelasi slug
function generateSlug(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// Update slug otomatis setiap titleClass berubah

export type PageProps = {
    categories: Category[];
    mentors: Mentor[];
};

function CreateClass({ mentors, categories }: PageProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            titleClass: "",
            slug: "",
            isActive: false,
            price: 0,
            isFree: false,
            categoryLevel: "",
            categoryClass: "",
            previewUrl: "",
            description: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    useEffect(() => {
        const title = form.watch("titleClass");
        const slug = generateSlug(title);
        form.setValue("slug", slug);
    }, [form.watch("titleClass")]);

    const isFree = form.watch("isFree");
    return (
        <section>
            <header className="text-center">
                <h1 className="text-xl">Create Class</h1>
            </header>
            <div className="max-w-screen-sm mx-auto mt-5">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        {/* Input Judul Kelas */}
                        <FormField
                            control={form.control}
                            name="titleClass"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title Course</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="shadcn"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Masukan Nama Kelas Baru
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Input Slug Otomatis */}
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="slug"
                                            {...field}
                                            readOnly
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Slug akan terisi otomatis dari judul
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Switch for Change Status Actif Class */}
                        <FormField
                            control={form.control}
                            name="isActive"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Kelas Aktif
                                        </FormLabel>
                                        <FormDescription>
                                            Aktifkan jika kelas sudah siap
                                            dipublikasikan.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Status Price Class */}
                        <FormField
                            control={form.control}
                            name="isFree"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Kelas Gratis
                                        </FormLabel>
                                        <FormDescription>
                                            Tandai jika kelas ini dapat diakses
                                            secara gratis.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Input Category Class */}
                            <FormField
                                control={form.control}
                                name="categoryClass"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Class</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-[280px]">
                                                <SelectValue placeholder="Pilih Kategori Aplikasi" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectContent>
                                                    {categories.map(
                                                        (category) => (
                                                            <SelectItem
                                                                key={
                                                                    category.id
                                                                }
                                                                value={category.id.toString()}
                                                            >
                                                                {
                                                                    category.category_class
                                                                }
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* Input Category Level */}
                            <FormField
                                control={form.control}
                                name="categoryLevel"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Level</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-[280px]">
                                                <SelectValue placeholder="Pilih Tingkat Kelas" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Level Kelas
                                                    </SelectLabel>
                                                    <SelectItem value="beginner">
                                                        Beginner
                                                    </SelectItem>
                                                    <SelectItem value="intermediate">
                                                        Intermediate
                                                    </SelectItem>
                                                    <SelectItem value="expert">
                                                        Expert
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Price of Class */}

                        {!isFree && (
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Harga</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Harga Kelas"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Masukkan harga kelas dalam Rupiah
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        {/* Input URL Preview */}
                        <FormField
                            control={form.control}
                            name="previewUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preview URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Link Youtube Review ..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Masukkan link video (contoh: YouTube)
                                        yang menampilkan cuplikan atau review
                                        kelas.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* pilih Mentor */}
                        <FormField
                            control={form.control}
                            name="mentor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mentor</FormLabel>
                                    <Select
                                        onValueChange={(value) =>
                                            field.onChange(Number(value))
                                        } // ubah string ke number
                                        defaultValue={field.value?.toString()} // pastikan defaultValue dalam string
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih Mentor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {mentors.map((mentor) => (
                                                    <SelectItem
                                                        key={mentor.id}
                                                        value={mentor.id.toString()}
                                                    >
                                                        {mentor.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        {/* Deskripsi */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => {
                                const wordCount =
                                    field.value?.trim().split(/\s+/).length ||
                                    0;

                                return (
                                    <FormItem>
                                        <FormLabel>Deskripsi Kelas</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Textarea
                                                    {...field}
                                                    className="min-h-[120px] resize-y"
                                                    placeholder="Tulis deskripsi lengkap tentang kelas..."
                                                />
                                                <p className="absolute bottom-2 right-3 text-xs text-muted-foreground">
                                                    {wordCount} kata
                                                </p>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        {/* Input Otomatis Slug kelas */}
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}
CreateClass.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
export default CreateClass;
