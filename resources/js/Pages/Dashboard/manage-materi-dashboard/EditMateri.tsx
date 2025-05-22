import React, { useEffect, useState } from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    PlayIcon,
    FileText,
    Pencil,
    Trash2,
    MoreVertical,
    PlusIcon,
} from "lucide-react";

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
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Material } from "@/types/LearningPage";

import { Link, router } from "@inertiajs/react";
import { getEmbedUrl } from "@/utils/getEmbedUrl";
import { CreateMateriSchema } from "@/Schema/CreateMateriSchema";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";

type MateriFormData = z.infer<typeof CreateMateriSchema>;

// Props interface untuk komponen EditMateri
interface EditMateriProps {
    title: string; // Nama kelas
    materials: Material[]; // Daftar materi untuk kelas tersebut
}

function EditMateri({ title, materials }: EditMateriProps) {
    // State untuk menyimpan URL video yang dipilih
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(
        null
    );

    // State untuk mengatur apakah sedang dalam mode tambah materi
    const [isAddMode, setIsAddMode] = useState(false);

    const form = useForm<z.infer<typeof CreateMateriSchema>>({
        resolver: zodResolver(CreateMateriSchema),
        defaultValues: {
            title: "",
            description: "",
            videoUrl: "",
            pdfFile: undefined,
        },
    });

    useEffect(() => {
        console.log(selectedVideoUrl);
    }, [selectedVideoUrl]);

    // BUTTON : handling submit
    function onSubmit(values: z.infer<typeof CreateMateriSchema>) {
        console.log(values);
        router.post("/dashboard/manage-materi", values, {
            onSuccess: () => {
                alert("oke");
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    }

    return (
        <section>
            <Dialog>
                {/* Header: Judul dan tombol tambah materi */}
                <div className="flex justify-between px-4">
                    <h1 className="text-xl font-semibold mb-4">
                        List Materi dari {title}
                    </h1>

                    {/* Tombol Tambah Materi */}
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

                {/* Daftar Materi dalam bentuk kartu */}
                <div className="flex flex-wrap gap-4 p-3 mt-4">
                    {materials.length === 0 ? (
                        <p className="text-gray-500 text-sm italic">
                            Belum ada materi ditambahkan.
                        </p>
                    ) : (
                        materials.map((materi, index) => (
                            <div key={index}>
                                <Card className="w-full sm:w-[330px] relative">
                                    <CardHeader className="relative space-y-2">
                                        {/* Dropdown menu edit & hapus */}
                                        <div className="absolute top-4 right-4">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <button className="p-1 rounded hover:bg-gray-100">
                                                        <MoreVertical className="w-5 h-5" />
                                                    </button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem className="flex items-center gap-2">
                                                        <Pencil className="w-4 h-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                                        <Trash2 className="w-4 h-4" />
                                                        Hapus
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>

                                        {/* Judul Materi */}
                                        <CardTitle className="text-base font-semibold">
                                            {materi.title}
                                        </CardTitle>

                                        {/* Deskripsi Materi */}
                                        <CardDescription className="text-sm text-gray-600">
                                            {materi.description}
                                        </CardDescription>
                                    </CardHeader>

                                    {/* Aksi Materi */}
                                    <CardFooter className="flex gap-2">
                                        {/* Tombol Lihat Video */}
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

                                        {/* Tombol Unduh PDF */}
                                        <Button className="gap-2 text-sm">
                                            <FileText className="w-4 h-4" />
                                            <Link href={materi.pdf_url}>
                                                Unduh Materi
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))
                    )}
                </div>

                {/* Dialog Content: Form Tambah atau Preview Video */}
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
                                    {/* Judul Materi */}
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
                                                        className="w-full border rounded p-2"
                                                        placeholder="Contoh: Pengenalan Figma"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Deskripsi Materi */}
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Deskripsi</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        className="w-full border rounded p-2"
                                                        placeholder="Deskripsi singkat materi"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* URL Video */}
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
                                                        className="w-full border rounded p-2"
                                                        placeholder="https://youtube.com/..."
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* PDF File */}
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
                                                        className="w-full"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Tombol Submit */}
                                    <Button type="submit">Simpan Materi</Button>
                                </form>
                            </Form>
                        </div>
                    ) : selectedVideoUrl ? (
                        // Preview Video Materi
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

                            <DialogFooter>
                                <Button
                                    onClick={() => {
                                        setSelectedVideoUrl(null);
                                    }}
                                >
                                    Tutup
                                </Button>
                            </DialogFooter>
                        </div>
                    ) : (
                        // Tidak ada video dipilih
                        <div className="text-gray-500 text-center italic py-4">
                            Tidak ada video yang dipilih.
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}

// Layout Wrapper untuk halaman dashboard
EditMateri.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default EditMateri;
