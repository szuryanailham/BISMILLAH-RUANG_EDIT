import React, { useState } from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Material } from "@/types/Material";
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
import { Link, router } from "@inertiajs/react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/Components/ui/button";
import { Trash2 } from "lucide-react";

interface ManageMateriDashboardProps {
    Materials: Material[];
}

const ManageMateriDashboard = ({ Materials }: ManageMateriDashboardProps) => {
    const { toast } = useToast();
    const [kodeMateri, setKodeMateri] = useState("");

    /**
     * Delete materi by Code Materi from the database
     */
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
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Daftar Materi Kelas</h1>

                <div className="overflow-x-auto bg-white shadow-md rounded-xl">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    #
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Judul Materi
                                </th>

                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Nama Kelas
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Nama Mentor
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {Materials.map((materi, index) => (
                                <tr key={materi.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {materi.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {materi.class.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {materi.class.mentor.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {/* AlertDialog per materi */}
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button
                                                    onClick={() =>
                                                        setKodeMateri(
                                                            materi.materialCode
                                                        )
                                                    }
                                                    className="group relative flex items-center gap-1 rounded-md bg-transparent text-sm text-red-600 transition-all duration-200 hover:bg-red-50 hover:text-red-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300"
                                                >
                                                    <Trash2 className="w-5 h-5 text-red-600 transition-colors duration-200 group-hover:text-red-700" />
                                                    <span className="sr-only">
                                                        Hapus Materi
                                                    </span>
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>
                                                        Apakah Anda yakin ingin
                                                        menghapus materi ini?
                                                    </AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Tindakan ini akan
                                                        menghapus materi{" "}
                                                        <strong>
                                                            {materi.title}
                                                        </strong>{" "}
                                                        yang sudah tersimpan di
                                                        dalam kelas. Setelah
                                                        dihapus, Anda tidak akan
                                                        dapat mengakses kembali
                                                        materi tersebut.{" "}
                                                        <strong>
                                                            Proses ini tidak
                                                            dapat dibatalkan.
                                                        </strong>
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>
                                                        Batal
                                                    </AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() =>
                                                            handleDelete(
                                                                materi.materialCode
                                                            )
                                                        }
                                                        className="bg-red-600 hover:bg-red-700 text-white"
                                                    >
                                                        Hapus Materi
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
            </div>
        </div>
    );
};

ManageMateriDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default ManageMateriDashboard;
