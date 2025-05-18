import React, { useState } from "react";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Pencil, Trash2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { ClassData } from "@/types/dashboard/manage-class-dashboard/ClassData";
import { formatRupiah } from "@/lib/formatRupiah";
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
            <h1 className="text-2xl font-bold mb-6">Kelola Kelas</h1>

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
                                        <button
                                            className="text-blue-600 hover:text-blue-800"
                                            aria-label="Edit"
                                        >
                                            <Pencil className="w-5 h-5" />
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-800"
                                            aria-label="Hapus"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
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
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex items-center gap-2"
                                            onClick={() => {
                                                // aksi edit materi di dalam kelas
                                            }}
                                        >
                                            <Pencil className="w-4 h-4" />
                                            Edit Materi
                                        </Button>
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
