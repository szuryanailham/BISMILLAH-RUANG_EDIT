import React, { useState } from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { User } from "@/types/Users";
import { Button } from "@/Components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import { Link, router } from "@inertiajs/react";

interface UsersProps {
    users: User[];
}
function ManageUserDashboard({ users }: UsersProps) {
    console.log(users);
    const { toast } = useToast();
    const [isloading, setIsLoading] = useState(false);

    // FUNCTION DELETE : handle Deleting user
    const handleDeleteUser = async (id: number) => {
        setIsLoading(true);

        router.delete(`/dashboard/manage-users/${id}`, {
            onSuccess: () => {
                toast({
                    title: "Mentor berhasil dihapus",
                    description: `Data mentor terpilih berhasil dihapus.`,
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
                <h1 className="text-3xl font-bold mb-6">Daftar Pengguna</h1>

                <div className="overflow-x-auto bg-white shadow-md rounded-xl">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    #
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Nama
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Bidang
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Kelas Diikuti
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 text-sm">
                                        {index + 1}
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {user.name}
                                    </td>

                                    <td className="px-6 py-4 text-sm">
                                        {user.email}
                                    </td>

                                    <td className="px-6 py-4 text-sm capitalize">
                                        {user.creative_field}
                                    </td>

                                    <td className="px-6 py-4 text-sm">
                                        {user.kelasDiikuti ?? 0}{" "}
                                        {/* fallback 0 jika undefined */}
                                    </td>

                                    <td className="px-6 py-4 text-sm">
                                        <Link
                                            href={`/dashboard/manage-users/${user.id}/edit`}
                                            className="inline-flex items-center justify-center w-9 h-9 rounded hover:bg-blue-100"
                                            aria-label="Edit"
                                        >
                                            <Pencil className="w-4 h-4 text-blue-600" />
                                        </Link>
                                        {/* BUTTON : delete users */}
                                        <AlertDialog>
                                            <AlertDialogTrigger>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="hover:bg-red-100"
                                                    aria-label={`Hapus user ${user.name}`}
                                                >
                                                    <Trash2 className="w-5 h-5 text-red-600" />
                                                </Button>
                                            </AlertDialogTrigger>
                                            {/* CONTAIN ALERT : content alert verication delete */}
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>
                                                        Apakah Anda yakin ingin
                                                        menghapus pengguna ini?
                                                    </AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Tindakan ini tidak dapat
                                                        dibatalkan. Pengguna
                                                        akan dihapus secara
                                                        permanen dari sistem.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>
                                                        Batal
                                                    </AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() =>
                                                            handleDeleteUser(
                                                                user.id
                                                            )
                                                        }
                                                        className="bg-red-600 hover:bg-red-700 text-white"
                                                    >
                                                        Hapus Pengguna
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
}
ManageUserDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
export default ManageUserDashboard;
