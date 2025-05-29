// Import library utama React dan useState, useEffect untuk state management
import React, { useEffect, useState } from "react";

// Import layout halaman dashboard
import DashboardLayout from "@/Layouts/DashboardLayouts";
// Import hook dan schema validasi form
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Import ikon dari lucide-react
import {
    PlayIcon,
    FileText,
    Pencil,
    Trash2,
    MoreVertical,
    PlusIcon,
    Loader2,
} from "lucide-react";

// Import komponen UI yang digunakan
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";

// Import tipe data dan helper function
import { Material } from "@/types/LearningPage";
import { getEmbedUrl } from "@/utils/getEmbedUrl";
import { CreateMateriSchema } from "@/Schema/CreateMateriSchema";

// Import elemen UI tambahan
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Import fungsi navigasi Inertia
import { Link, router } from "@inertiajs/react";

// Define props yang diterima oleh komponen
interface ManageMateriProps {
    title: string;
    materials: Material[];
    class_id: number;
}

function ManageMateri({ title, materials, class_id }: ManageMateriProps) {
    // State untuk menyimpan video URL yang ingin dipreview
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(
        null
    );

    // State loading ketika mengirim form
    const [isLoading, setIsLoading] = useState(false);

    // State untuk menentukan apakah sedang dalam mode tambah materi
    const [isAddMode, setIsAddMode] = useState(false);

    // Inisialisasi form menggunakan React Hook Form + Zod
    const form = useForm<z.infer<typeof CreateMateriSchema>>({
        resolver: zodResolver(CreateMateriSchema),
        defaultValues: {
            title: "",
            description: "",
            videoUrl: "",
            pdfFile: undefined,
        },
    });

    // Debugging: log URL video yang dipilih
    useEffect(() => {
        console.log(selectedVideoUrl);
    }, [selectedVideoUrl]);

    // Inisialisasi toast untuk menampilkan notifikasi
    const { toast } = useToast();

    // Fungsi submit form untuk menambah materi
    const onSubmit = (values: z.infer<typeof CreateMateriSchema>) => {
        setIsLoading(true);
        router.post(`/materi/store/${class_id}`, values, {
            onSuccess: () => {
                toast({
                    title: "Berhasil",
                    description: "Materi berhasil disimpan.",
                });
                setTimeout(() => {
                    form.reset({
                        title: "",
                        description: "",
                        videoUrl: "",
                        pdfFile: undefined,
                    });
                    setIsLoading(false);
                    window.location.reload();
                }, 2000);
            },
            onError: () => {
                toast({
                    title: "Gagal menyimpan",
                    description: "Terjadi kesalahan saat menyimpan materi.",
                    variant: "destructive",
                });
            },
        });
    };

    // Fungsi Delete Materi untuk menghapus data

    const handleDelete = (materialCode: string) => {
        router.delete(`/dashboard/manage-materi/${materialCode}`, {
            onSuccess: () => {
                toast({
                    title: "Berhasil",
                    description: "Materi berhasil dihapus.",
                    variant: "default",
                });
            },
            onError: () => {
                toast({
                    title: "Gagal",
                    description: "Materi tidak berhasil dihapus.",
                    variant: "destructive",
                });
            },
        });
    };

    return (
        <section>
            <Dialog>
                {/* Header Section */}
                <div className="flex justify-between px-4">
                    <h1 className="text-xl font-semibold mb-4">
                        List Materi dari {title}
                    </h1>

                    {/* Tombol untuk membuka form tambah materi */}
                    <DialogTrigger asChild>
                        <Button
                            onClick={() => {
                                setIsAddMode(true);
                                setSelectedVideoUrl(null);
                            }}
                        >
                            <PlusIcon className="mr-2" /> Tambah Materi
                        </Button>
                    </DialogTrigger>
                </div>

                {/* List Materi */}
                <div className="flex flex-wrap gap-4 p-3 mt-4">
                    {materials.length === 0 ? (
                        <p className="text-gray-500 text-sm italic">
                            Belum ada materi ditambahkan.
                        </p>
                    ) : (
                        materials.map((materi, index) => (
                            <Card
                                key={index}
                                className="w-full sm:w-[350px] relative"
                            >
                                <CardHeader className="relative space-y-2">
                                    {/* Dropdown aksi Edit / Hapus */}
                                    <div className="absolute top-4 right-4">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button className="p-1 rounded hover:bg-gray-100">
                                                    <MoreVertical className="w-5 h-5" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem
                                                    asChild
                                                    className="flex items-center gap-2"
                                                >
                                                    <Link
                                                        href={`/dashboard/manage-materi/${materi.materialCode}/edit`}
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                        Edit
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        handleDelete(
                                                            materi.materialCode
                                                        )
                                                    }
                                                    className="flex items-center gap-2 text-red-600"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                    Hapus
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    {/* Judul & Deskripsi Materi */}
                                    <CardTitle className="text-base font-semibold">
                                        {materi.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-gray-600">
                                        {materi.description}
                                    </CardDescription>
                                </CardHeader>

                                {/* Aksi tombol: Lihat Video & Unduh PDF */}
                                <CardFooter className="flex gap-2">
                                    <DialogTrigger asChild>
                                        <Button
                                            onClick={() => {
                                                setSelectedVideoUrl(
                                                    materi.embed_url
                                                );
                                                setIsAddMode(false);
                                            }}
                                            className="bg-red-600 hover:bg-red-700 text-white gap-2 text-sm"
                                        >
                                            <PlayIcon className="w-4 h-4" />
                                            Watch Materi
                                        </Button>
                                    </DialogTrigger>
                                    <Button className="gap-2 text-sm">
                                        <FileText className="w-4 h-4" />
                                        <Link href={materi.pdf_url}>
                                            Unduh Materi
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))
                    )}
                </div>

                {/* Dialog untuk Tambah Materi atau Preview Video */}
                <DialogContent className="sm:max-w-[640px]">
                    {isAddMode ? (
                        // Form Tambah Materi
                        <div className="space-y-4">
                            <h1 className="text-lg font-semibold">
                                Tambah Materi Baru
                            </h1>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-4"
                                >
                                    {/* Input: Judul Materi */}
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Judul Materi
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="Contoh: Pengenalan Figma"
                                                        {...field}
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
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Deskripsi</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Deskripsi singkat materi"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Input: URL Video */}
                                    <FormField
                                        control={form.control}
                                        name="videoUrl"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    URL Video (YouTube)
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="https://youtube.com/..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Input: File PDF */}
                                    <FormField
                                        control={form.control}
                                        name="pdfFile"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    File PDF (Opsional)
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="file"
                                                        accept=".pdf"
                                                        onChange={(e) =>
                                                            field.onChange(
                                                                e.target
                                                                    .files?.[0]
                                                            )
                                                        }
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Tombol Simpan */}
                                    <Button type="submit" disabled={isLoading}>
                                        {isLoading && (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Simpan Materi
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    ) : selectedVideoUrl ? (
                        // Preview Video
                        <div className="space-y-4">
                            <h1 className="text-lg font-semibold">
                                Preview Video Materi
                            </h1>
                            <div
                                className="w-full rounded overflow-hidden"
                                style={{ aspectRatio: "4 / 3" }}
                            >
                                <iframe
                                    src={getEmbedUrl(selectedVideoUrl)}
                                    title="YouTube video preview"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    ) : (
                        // Tidak ada video yang dipilih
                        <div className="text-gray-500 text-center italic py-4">
                            Tidak ada video yang dipilih.
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}

// Membungkus halaman EditMateri dengan layout Dashboard
ManageMateri.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default ManageMateri;
