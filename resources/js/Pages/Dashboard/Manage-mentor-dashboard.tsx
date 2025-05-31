import React, { useState } from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Mentor } from "@/types/Course";
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
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/Components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, Plus, Trash2 } from "lucide-react";
interface ManageMentorProps {
    Mentors: Mentor[];
}

function ManageMentorDashboard({ Mentors }: ManageMentorProps) {
    const { toast } = useToast();
    const [isloading, setIsLoading] = useState(false);

    const handleDeleteMentor = async (id: number) => {
        setIsLoading(true);

        router.delete(`/dashboard/manage-mentor/${id}`, {
            onSuccess: () => {
                toast({
                    title: "Mentor berhasil dihapus",
                    description: `Data mentor dengan ID ${id} telah dihapus.`,
                });
            },
            onError: () => {
                toast({
                    title: "Gagal menghapus mentor",
                    description: "Terjadi kesalahan saat menghapus mentor.",
                    variant: "destructive",
                });
            },
            onFinish: () => {
                setIsLoading(false);
            },
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Page */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Kelola Kelas</h1>
                    <Link
                        href="/dashboard/manage-mentor/create"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                    >
                        <Plus className="w-4 h-4" />
                        New Mentor
                    </Link>
                </div>
                <AlertDialog>
                    <div className="overflow-x-auto bg-white shadow-md rounded-xl">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                        #
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                        Nama Mentor
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                        Specialist
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                        Jumlah Kelas
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {Mentors.map((mentor, index) => {
                                    return (
                                        <tr key={mentor.id}>
                                            <td className="px-6 py-4 text-sm">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                {mentor.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                {
                                                    mentor.category_class
                                                        .category_class
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                {mentor.classes_count ?? 0}
                                            </td>
                                            <td className="px-6 py-4 text-sm flex gap-3">
                                                <Link
                                                    href={`/dashboard/manage-mentor/${mentor.id}/edit`}
                                                >
                                                    <Button className="bg-transparent hover:bg-transparent">
                                                        <Pencil className="w-4 h-4 text-blue-600" />
                                                    </Button>
                                                </Link>

                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button
                                                            className="bg-transparent hover:bg-transparent"
                                                            aria-label="Hapus"
                                                        >
                                                            <Trash2 className="w-5 h-5 text-red-600" />
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>
                                                                Apakah Anda
                                                                yakin ingin
                                                                menghapus mentor
                                                                ini?
                                                            </AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Tindakan ini
                                                                akan menghapus
                                                                mentor{" "}
                                                                <strong>
                                                                    {
                                                                        mentor.name
                                                                    }
                                                                </strong>{" "}
                                                                beserta seluruh
                                                                data yang
                                                                terhubung
                                                                dengannya.
                                                                Setelah dihapus,
                                                                Anda tidak akan
                                                                dapat mengakses
                                                                kembali data
                                                                mentor ini.{" "}
                                                                <strong>
                                                                    Proses ini
                                                                    tidak dapat
                                                                    dibatalkan.
                                                                </strong>
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>
                                                                Batal
                                                            </AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={() =>
                                                                    handleDeleteMentor(
                                                                        mentor.id
                                                                    )
                                                                }
                                                                className="bg-red-600 hover:bg-red-700 text-white"
                                                            >
                                                                Hapus Mentor
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </AlertDialog>
            </div>
        </div>
    );
}

ManageMentorDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default ManageMentorDashboard;
