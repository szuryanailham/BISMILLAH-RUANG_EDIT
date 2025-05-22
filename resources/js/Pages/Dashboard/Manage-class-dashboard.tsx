import React, { useEffect, useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Pencil, Plus, Trash2 } from "lucide-react";

import { PageProps } from "@/types";
import { ClassData } from "@/types/dashboard/manage-class-dashboard/ClassData";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";

import { Button } from "@/Components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { formatRupiah } from "@/utils/formatRupiah";

function ManageClassDashboard() {
    const { toast } = useToast();
    const { classes } = usePage<PageProps<{ classes: ClassData[] }>>().props;
    const { props } = usePage();
    const flash = props.flash as {
        success?: string;
        error?: string;
        deleted?: string;
    };
    // State untuk dialog detail dan kelas yang dipilih
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);

    // State untuk Loading delete
    const [isloading, setIsLoading] = useState(false);
    const [loadingClassCode, setLoadingClassCode] = useState<string | null>(
        null
    );

    // Menampilkan toast berdasarkan flash message
    useEffect(() => {
        if (flash?.success) {
            toast({
                title: "Berhasil",
                description: flash.success,
            });
        }

        if (flash?.deleted) {
            toast({
                variant: "destructive",
                title: "Kelas Dihapus",
                description: flash.deleted,
            });
        }

        if (flash?.error) {
            toast({
                variant: "destructive",
                title: "Terjadi Kesalahan",
                description: flash.error,
            });
        }
    }, [flash]);

    // Fungsi ketika judul kelas diklik
    const handleClassClick = (kelas: ClassData) => {
        setSelectedClass(kelas);
        setIsDialogOpen(true);
    };

    // fungsi untuk memanggil action delete
    const handleDeleteClass = async (classCode: string) => {
        setLoadingClassCode(classCode);
        setIsLoading(true);
        setTimeout(() => {
            try {
                router.delete(`/dashboard/manage-class/${classCode}`);
            } catch (error) {
                console.error("Gagal menghapus kelas", error);
            } finally {
                setLoadingClassCode(null); // Reset setelah selesai
            }
        }, 2000);
    };

    return (
        <div className="p-6">
            {/* Header Page */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Kelola Kelas</h1>
                <Link
                    href="/dashboard/manage-class/create"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                >
                    <Plus className="w-4 h-4" />
                    Create Class
                </Link>
            </div>

            {/* Tabel kelas */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3">No</th>
                                <th className="px-4 py-3">Judul Kelas</th>
                                <th className="px-4 py-3">Mentor</th>
                                <th className="px-4 py-3">Harga</th>
                                <th className="px-4 py-3">Rating</th>
                                <th className="px-4 py-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((kelas, index) => (
                                <tr key={kelas.id} className="border-t">
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td
                                        onClick={() => handleClassClick(kelas)}
                                        role="button"
                                        tabIndex={0}
                                        className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer"
                                    >
                                        {kelas.title}
                                    </td>
                                    <td className="px-4 py-3">
                                        {kelas.mentor?.name ?? "-"}
                                    </td>
                                    <td className="px-4 py-3">
                                        {kelas.is_free
                                            ? "Gratis"
                                            : formatRupiah(kelas.price)}
                                    </td>
                                    <td className="px-4 py-3">
                                        {parseFloat(kelas.rating_class).toFixed(
                                            1
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center space-x-2">
                                        <Link
                                            href={`/dashboard/manage-class/${kelas.class_code}/edit`}
                                            className="inline-flex items-center justify-center w-9 h-9 rounded hover:bg-blue-100"
                                            aria-label="Edit"
                                        >
                                            <Pencil className="w-4 h-4 text-blue-600" />
                                        </Link>
                                        <AlertDialog>
                                            <AlertDialogTrigger>
                                                <Button
                                                    className="bg-transparent hover:bg-transparent"
                                                    aria-label="Hapus"
                                                >
                                                    {isloading &&
                                                    loadingClassCode ===
                                                        kelas.class_code ? (
                                                        <p className="text-sm text-gray-500">
                                                            Loading...
                                                        </p>
                                                    ) : (
                                                        <Trash2 className="w-5 h-5 text-red-600" />
                                                    )}
                                                </Button>

                                                {/* ========== Dialog Alert Delete ========== */}
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>
                                                        Apakah Anda yakin ingin
                                                        menghapus kelas ini?
                                                    </AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Tindakan ini tidak dapat
                                                        dibatalkan. Kelas akan
                                                        dihapus secara permanen
                                                        dan semua data terkait
                                                        akan dihapus dari
                                                        sistem.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>

                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>
                                                        Cancel
                                                    </AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() =>
                                                            handleDeleteClass(
                                                                kelas.class_code
                                                            )
                                                        }
                                                    >
                                                        Continue
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* =====================  Dialog detail kelas  =====================*/}
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Detail Kelas</DialogTitle>
                        <DialogDescription>
                            {selectedClass ? (
                                <div className="space-y-3 text-sm mt-4">
                                    <p>
                                        <strong>Judul:</strong>{" "}
                                        {selectedClass.title}
                                    </p>
                                    <p>
                                        <strong>Mentor:</strong>{" "}
                                        {selectedClass.mentor?.name ?? "-"}
                                    </p>
                                    <p>
                                        <strong>Harga:</strong>{" "}
                                        {selectedClass.is_free
                                            ? "Gratis"
                                            : formatRupiah(selectedClass.price)}
                                    </p>
                                    <p>
                                        <strong>Rating:</strong>{" "}
                                        {parseFloat(
                                            selectedClass.rating_class
                                        ).toFixed(1)}
                                    </p>
                                    <p>
                                        <strong>Total Video:</strong>{" "}
                                        {selectedClass.total_videos}
                                    </p>

                                    {/* Aksi */}
                                    <div className="flex space-x-3 mt-7">
                                        <Link
                                            href={`/dashboard/manage-materi/${selectedClass.class_code}`}
                                            className="flex items-center gap-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                        >
                                            <Pencil className="w-4 h-4" />
                                            Edit Materi
                                        </Link>

                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="flex items-center gap-2"
                                            onClick={() => {
                                                // TODO: tambahkan aksi hapus di sini
                                            }}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Hapus
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                "Tidak ada data kelas yang dipilih."
                            )}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

// Layout wrapper
ManageClassDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default ManageClassDashboard;
