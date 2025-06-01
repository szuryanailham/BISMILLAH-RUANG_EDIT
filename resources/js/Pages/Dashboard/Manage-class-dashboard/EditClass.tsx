import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Loader2 } from "lucide-react";
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
    PageProps,
} from "@/types/dashboard/manage-class-dashboard/CreateData";
import { Textarea } from "@/Components/ui/textarea";
import { formSchema } from "@/Schema/EditClassSchema";
import { generateSlug } from "@/utils/stringHelpers";
import { IoClose } from "react-icons/io5";
import { router } from "@inertiajs/react";
import { useToast } from "@/hooks/use-toast";

import { useImageStore } from "@/stores/dashboard/manage-class-dashboard/useImageStore";

function EditClass({ mentors, categories, classData }: PageProps) {
    // useState untuk loading
    const [isLoading, setIsLoading] = useState(false);
    // state preview image
    const { preview, setFile, setPreview, reset } = useImageStore();
    const { toast } = useToast();
    // Inisialisasi form menggunakan react-hook-form dengan validasi Zod
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ClassTittle: classData.title,
            slug: classData.slug,
            isPublished: classData.is_published === 0 ? false : true,
            isFree: classData.is_free === 0 ? false : true,
            Level: classData.level_category,
            price: Number(classData.price) || 0,
            Category_id: classData.category_class_id,
            previewUrl: classData.video_preview_url,
            mentor_id: classData.mentor_id,
            description: classData.description,
            poster: undefined,
            goals: classData.goals?.map((goal: string) => ({
                value: goal,
            })) ?? [{ value: "" }],
            requirements: classData.requirements?.map((req: string) => ({
                value: req,
            })) ?? [""],
        },
    });

    // Field array untuk goals (tujuan kelas)
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "goals",
    });

    const {
        fields: requirementFields,
        append: appendRequirement,
        remove: removeRequirement,
    } = useFieldArray({
        control: form.control,
        name: "requirements",
    });

    // Handler ketika form disubmit
    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        const formData = new FormData();
        if (values.poster && values.poster.length > 0) {
            formData.append("poster", values.poster[0]);
        }
        router.put(`/dashboard/manage-class/${classData.slug}`, values, {
            onSuccess: () => {
                toast({
                    title: "Kelas Berhasil diupdate",
                    description:
                        "Kelas berhasil diupdate dan disimpan ke database.",
                });

                // Redirect setelah 2 detik
                setTimeout(() => {
                    router.visit("/dashboard/manage-class");
                    setIsLoading(false);
                    reset();
                    setFile(null);
                    setPreview("");
                }, 2000);
            },
            onError: (errors) => {
                console.log(errors);
                toast({
                    variant: "destructive",
                    title: "Terjadi Kesalahan",
                    description: "Periksa kembali isian formulir update kamu.",
                });
                setIsLoading(false);
            },
        });
    }

    // Auto-generate slug dari judul kelas setiap kali judul berubah
    useEffect(() => {
        const subscription = form.watch((value, { name }) => {
            if (name === "ClassTittle" && value.ClassTittle !== undefined) {
                const slug = generateSlug(value.ClassTittle);
                form.setValue("slug", slug);
            }
        });
        return () => subscription.unsubscribe();
    }, [form]);

    useEffect(() => {
        if (classData.poster_image) {
            setPreview(classData.poster_image);
        }
    }, [classData.poster_image, setPreview]);

    // Pantau apakah kelas ditandai sebagai gratis
    const isFree = form.watch("isFree");

    // function preview image input
    const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);

            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(selectedFile);
        } else {
            reset();
        }
    };

    return (
        <section>
            {/* Judul Halaman */}
            <header className="text-center">
                <h1 className="text-xl">Edit Class</h1>
            </header>

            <div className="max-w-screen-sm mx-auto mt-5">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        {/* Input: Judul Kelas */}
                        <FormField
                            control={form.control}
                            name="ClassTittle"
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

                        {/* Input: Slug (otomatis dari judul) */}
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

                        {/* Input : Uploud Poster ( uploud poster class ) */}
                        <FormField
                            control={form.control}
                            name="poster"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Poster Kelas</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            disabled
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file =
                                                    e.target.files?.[0];
                                                if (file) {
                                                    handlePreview(e); // preview & simpan ke form
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        <strong>Kriteria poster kelas:</strong>
                                    </FormDescription>
                                    <ul className="list-disc ml-5 text-sm text-muted-foreground">
                                        <li>
                                            Format gambar: JPEG, PNG, atau WEBP
                                            (WEBP disarankan)
                                        </li>
                                        <li>Ukuran maksimal: 200 KB</li>
                                        <li>
                                            Resolusi minimal: 600 × 400 piksel
                                        </li>
                                    </ul>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {preview && (
                            <div className="mt-4">
                                <p className="text-sm text-muted-foreground mb-1 text-red-500">
                                    Preview: ("Fitur update image belum
                                    tersedia")
                                </p>
                                <img
                                    src={preview}
                                    alt="Preview Poster"
                                    className="rounded-lg border max-h-48 object-contain"
                                />
                            </div>
                        )}

                        {/* Switch: Status Aktif */}
                        <FormField
                            control={form.control}
                            name="isPublished"
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

                        {/* Switch: Status Gratis */}
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

                        {/* Input: Kategori & Level Kelas */}
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Pilih Kategori */}
                            <FormField
                                control={form.control}
                                name="Category_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Class</FormLabel>
                                        <Select
                                            onValueChange={(value) =>
                                                field.onChange(Number(value))
                                            }
                                            defaultValue={field.value?.toString()}
                                        >
                                            <SelectTrigger className="w-[280px]">
                                                <SelectValue placeholder="Pilih Kategori Aplikasi" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem
                                                        key={category.id}
                                                        value={category.id.toString()}
                                                    >
                                                        {
                                                            category.category_class
                                                        }
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* Pilih Level */}
                            <FormField
                                control={form.control}
                                name="Level"
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

                        {/* Input: Harga (hanya jika tidak gratis) */}
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

                        {/* Input: Preview URL */}
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

                        {/* Pilih Mentor */}
                        <FormField
                            control={form.control}
                            name="mentor_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mentor</FormLabel>
                                    <Select
                                        onValueChange={(value) =>
                                            field.onChange(Number(value))
                                        }
                                        defaultValue={field.value?.toString()}
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

                        {/* Input: Deskripsi Kelas */}
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

                        {/* Goals - list tujuan kelas */}
                        <div>
                            <FormLabel>Goals / Tujuan Kelas</FormLabel>
                            <div className="space-y-2">
                                {fields.map((fieldItem, index) => (
                                    <div
                                        key={fieldItem.id}
                                        className="flex items-center gap-2"
                                    >
                                        <FormField
                                            control={form.control}
                                            name={`goals.${index}.value`}
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder={`Tujuan ke-${
                                                                index + 1
                                                            }`}
                                                            className="w-full"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => remove(index)}
                                        >
                                            <IoClose />
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            {/* Tombol Tambah Goal */}
                            <Button
                                type="button"
                                variant="outline"
                                className="mt-2"
                                onClick={() => append({ value: "" })}
                            >
                                Tambah Tujuan
                            </Button>
                        </div>
                        <div>
                            <FormLabel>
                                Requirements / Persyaratan Kelas
                            </FormLabel>
                            <div className="space-y-2">
                                {requirementFields.map((fieldItem, index) => (
                                    <div
                                        key={fieldItem.id}
                                        className="flex items-center gap-2"
                                    >
                                        <FormField
                                            control={form.control}
                                            name={`requirements.${index}.value`}
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder={`Syarat ke-${
                                                                index + 1
                                                            }`}
                                                            className="w-full"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            onClick={() =>
                                                removeRequirement(index)
                                            }
                                        >
                                            &times;
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            <Button
                                type="button"
                                variant="outline"
                                className="mt-2"
                                onClick={() => appendRequirement({ value: "" })}
                            >
                                Tambah Syarat
                            </Button>
                        </div>

                        {/* Tombol Submit */}

                        <Button type="submit" disabled={isLoading}>
                            {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}

// Layout Dashboard
EditClass.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default EditClass;
