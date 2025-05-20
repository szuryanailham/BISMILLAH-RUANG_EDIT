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
import { mentorsDummy } from "@/Data/MentorsDummy";
const formSchema = z
    .object({
        titleClass: z
            .string()
            .min(2, { message: "Judul kelas minimal 2 karakter" })
            .max(50, { message: "Judul kelas maksimal 50 karakter" }),

        slug: z
            .string()
            .min(2, { message: "Slug minimal 2 karakter" })
            .max(50, { message: "Slug maksimal 50 karakter" }),

        isActive: z.boolean(),
        isFree: z.boolean(),
        price: z.string().optional(),
        previewUrl: z
            .string()
            .url({ message: "URL preview tidak valid" })
            .optional(),
        mentor: z.string().min(1, { message: "Mentor harus dipilih" }),
        categoryClass: z.string().min(1, { message: "Kategori harus dipilih" }),
        categoryLevel: z.string().min(1, { message: "Level harus dipilih" }),
    })
    .superRefine((data, ctx) => {
        if (!data.isFree) {
            if (!data.price || data.price.trim() === "") {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["price"],
                    message: "Harga harus diisi jika kelas tidak gratis",
                });
            } else if (!/^\d+$/.test(data.price)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ["price"],
                    message: "Harga harus berupa angka tanpa simbol atau huruf",
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

function CreateClass() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            titleClass: "",
            slug: "",
            isActive: false,
            isFree: false,
            categoryLevel: "",
            categoryClass: "",
            previewUrl: "",
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
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Category Aplikasi
                                                    </SelectLabel>
                                                    <SelectItem value="Figma">
                                                        Figma
                                                    </SelectItem>
                                                    <SelectItem value="Canva">
                                                        Canva
                                                    </SelectItem>
                                                    <SelectItem value="Capcut">
                                                        Capcut
                                                    </SelectItem>
                                                    <SelectItem value="Photoshop">
                                                        Photoshop
                                                    </SelectItem>
                                                </SelectGroup>
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
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih Mentor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {mentorsDummy.map((mentorGroup) => (
                                                <SelectGroup
                                                    key={mentorGroup.specialist}
                                                >
                                                    <SelectLabel>
                                                        {mentorGroup.specialist}
                                                    </SelectLabel>
                                                    <SelectItem
                                                        value={mentorGroup.name}
                                                    >
                                                        {mentorGroup.name}
                                                    </SelectItem>
                                                </SelectGroup>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
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
