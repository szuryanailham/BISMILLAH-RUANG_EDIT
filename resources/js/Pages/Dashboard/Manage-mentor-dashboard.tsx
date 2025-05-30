import React from "react";
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
interface ManageMentorProps {
    Mentors: Mentor[];
}

function ManageMentorDashboard({ Mentors }: ManageMentorProps) {
    const { toast } = useToast();
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Daftar Mentor</h1>
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
                                        Bidang
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
                                            <td className="px-6 py-4 text-sm">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <button className="text-blue-600 hover:underline mr-3">
                                                            Edit
                                                        </button>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[425px]">
                                                        <DialogHeader>
                                                            <DialogTitle>
                                                                Edit profile
                                                            </DialogTitle>
                                                            <DialogDescription>
                                                                Make changes to
                                                                your profile
                                                                here. Click save
                                                                when you&apos;re
                                                                done.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-4">
                                                            <div className="grid gap-3">
                                                                <Label htmlFor="name-1">
                                                                    Name
                                                                </Label>
                                                                <Input
                                                                    id="name-1"
                                                                    name="name"
                                                                    defaultValue="Pedro Duarte"
                                                                />
                                                            </div>
                                                            <div className="grid gap-3">
                                                                <Label htmlFor="username-1">
                                                                    Username
                                                                </Label>
                                                                <Input
                                                                    id="username-1"
                                                                    name="username"
                                                                    defaultValue="@peduarte"
                                                                />
                                                            </div>
                                                        </div>
                                                        <DialogFooter>
                                                            <DialogClose
                                                                asChild
                                                            >
                                                                <Button variant="outline">
                                                                    Cancel
                                                                </Button>
                                                            </DialogClose>
                                                            <Button type="submit">
                                                                Save changes
                                                            </Button>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>

                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <button
                                                            onClick={() =>
                                                                alert(
                                                                    "siap bang"
                                                                )
                                                            }
                                                            className="text-red-600 hover:underline text-sm"
                                                        >
                                                            Hapus
                                                        </button>
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
                                                                    console.log(
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
