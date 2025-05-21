import React, { useState } from "react";
import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Pencil, Plus, Trash2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { ClassData } from "@/types/dashboard/manage-class-dashboard/ClassData";
import { formatRupiah } from "@/utils/formatRupiah";
import { Button } from "@/Components/ui/button";

function ManageClassDashboard() {
    const { classes } = usePage<PageProps<{ classes: ClassData[] }>>().props;

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);

    const handleClassClick = (kelas: ClassData) => {
        setSelectedClass(kelas);
        setIsDialogOpen(true);
    };

    return (
        <div className="p-6">
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
                                        <Button
                                            className="bg-transparent hover:bg-transparent"
                                            aria-label="Hapus"
                                        >
                                            <Trash2 className="w-5 h-5 text-red-600" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Dialog detail kelas */}
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

                                    {/* Tombol aksi */}
                                    <div className="flex space-x-3 mt-7">
                                        <Link
                                            className="flex items-center gap-2"
                                            href={`/dashboard/manage-class/${selectedClass.class_code}/edit`}
                                        >
                                            <Pencil className="w-4 h-4" />
                                            Edit Materi
                                        </Link>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="flex items-center gap-2"
                                            onClick={() => {
                                                // aksi hapus disini
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

ManageClassDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default ManageClassDashboard;
