import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditMateriSchema } from "@/Schema/EditMateriSchema";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
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
import { useToast } from "@/hooks/use-toast";
import { Material } from "@/types/Material";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { router } from "@inertiajs/react";

interface EditMateriProps {
    material: Material;
}

const EditMateri = ({ material }: EditMateriProps) => {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof EditMateriSchema>>({
        resolver: zodResolver(EditMateriSchema),
        defaultValues: {
            title: material.title,
            description: material.description,
            videoUrl: material.embed_url ?? "",
            pdfFile: undefined,
        },
    });

    const onSubmit = (data: z.infer<typeof EditMateriSchema>) => {
        const formData = new FormData();

        formData.append("title", data.title ?? "");
        formData.append("description", data.description ?? "");
        formData.append("embed_url", data.videoUrl ?? "");

        if (data.pdfFile) {
            formData.append("pdfFile", data.pdfFile);
        }
        ` `;
        formData.append("_method", "PUT");
        router.post(
            `/dashboard/manage-materi/${material.materialCode}`,
            formData,
            {
                onSuccess: () => {
                    toast({
                        title: "Kelas Berhasil diupdate",
                        description:
                            "Kelas berhasil diupdate dan disimpan ke database.",
                    });
                    setTimeout(() => {
                        router.visit("/dashboard/manage-materi");
                    }, 2000);
                },
                onError: (errors) => {
                    let description = "Terjadi kesalahan.";

                    if (typeof errors === "string") {
                        description = errors;
                    } else if (errors?.message) {
                        description = errors.message;
                    } else if (errors?.errors) {
                        description = Object.values(errors.errors)
                            .flat()
                            .join(", ");
                    } else if (typeof errors === "object") {
                        description = JSON.stringify(errors);
                    }

                    toast({
                        variant: "destructive",
                        title: "Terjadi Kesalahan",
                        description,
                    });
                },
            }
        );
    };

    return (
        <section className="px-4 py-8">
            <header className="text-center mb-6">
                <h1 className="text-2xl font-semibold">Edit Materi</h1>
            </header>

            <div className="max-w-xl mx-auto">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        {/* INPUT: Judul Materi */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Judul Materi</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Contoh: Belajar Shadcn"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Perbarui judul materi
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* INPUT: Deskripsi */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => {
                                const wordCount =
                                    field.value?.trim().split(/\s+/).length ||
                                    0;
                                return (
                                    <FormItem>
                                        <FormLabel>Deskripsi Materi</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Textarea
                                                    {...field}
                                                    className="min-h-[120px] resize-y"
                                                    placeholder="Tulis deskripsi lengkap tentang materi..."
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

                        {/* INPUT: Video URL */}
                        <FormField
                            control={form.control}
                            name="videoUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Link Video (Embed URL)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="https://www.youtube.com/embed/xxxx"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Tempel link embed dari YouTube atau
                                        Vimeo.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* INPUT: Upload PDF */}
                        <FormField
                            control={form.control}
                            name="pdfFile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>File PDF (opsional)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept=".pdf"
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.files?.[0]
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Upload file PDF baru jika ingin
                                        mengganti materi PDF.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* SUBMIT BUTTON */}
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting
                                ? "Menyimpan..."
                                : "Simpan Perubahan"}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

EditMateri.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default EditMateri;
