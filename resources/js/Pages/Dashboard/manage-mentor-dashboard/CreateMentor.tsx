import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
Textarea;
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { formSchema } from "@/Schema/CreateMentorSchema";
import { Input } from "@/Components/ui/input";
import { Category } from "@/types/Course";
import { Switch } from "@/Components/ui/switch";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";

type CreateMentorProps = {
    categories: Category[];
};

function CreateMentor({ categories }: CreateMentorProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            category_class_id: 1,
            status: false,
            rating_mentor: 3,
            description: "",
            link_instagram: "",
            profile_image: undefined,
        },
    });

    // FUNCTION : handle submit function
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const formData = new FormData();

        formData.append("name", values.name);
        formData.append(
            "category_class_id",
            values.category_class_id.toString()
        );
        formData.append("status", values.status ? "1" : "0");
        formData.append("rating_mentor", values.rating_mentor.toString());
        formData.append("description", values.description ?? "");
        formData.append("link_instagram", values.link_instagram ?? "");
        if (values.profile_image) {
            formData.append("profile_image", values.profile_image);
        }
        console.log(formData);
        router.post("/dashboard/manage-mentor", formData, {
            onSuccess: () => {
                alert("Mentor berhasil ditambahkan!");
            },
            onError: (errors) => {
                console.error("Validasi gagal:", errors);
            },
        });
    };

    return (
        <div>
            {/* Judul Halaman */}
            <header className="text-center">
                <h1 className="text-xl">Add Mentor</h1>
            </header>

            {/* FORM : input form */}
            <div className="max-w-screen-sm mx-auto mt-5">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Input: Nama Mentor */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Mentor</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Nama lengkap"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Category Class */}
                        <FormField
                            control={form.control}
                            name="category_class_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Kategori Kelas</FormLabel>
                                    <Select
                                        onValueChange={(value) =>
                                            field.onChange(Number(value))
                                        }
                                        defaultValue={field.value?.toString()}
                                    >
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue placeholder="Pilih Kategori Kelas" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem
                                                    key={category.id}
                                                    value={category.id.toString()}
                                                >
                                                    {category.category_class}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Switch: Status Mentor */}
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem className="flex items-center justify-between space-y-0">
                                    <FormLabel>Status Aktif</FormLabel>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Input: Rating Mentor */}
                        <FormField
                            control={form.control}
                            name="rating_mentor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rating Mentor</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Contoh: 4.8"
                                            step="0.01"
                                            min="0"
                                            max="5"
                                            value={field.value}
                                            onChange={(e) =>
                                                field.onChange(
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Input: Deskripsi */}
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

                        {/* Input: Link Instagram */}
                        <FormField
                            control={form.control}
                            name="link_instagram"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Link Instagram</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="url"
                                            placeholder="https://instagram.com/namamentor"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Upload: Profile Image */}
                        <FormField
                            control={form.control}
                            name="profile_image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Foto Profil Mentor</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.files
                                                        ? e.target.files[0]
                                                        : undefined
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit */}
                        <Button type="submit" className="w-full">
                            Simpan Mentor
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

CreateMentor.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
export default CreateMentor;
