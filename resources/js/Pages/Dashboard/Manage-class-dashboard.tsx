import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Pencil, Trash2 } from "lucide-react"; // Import ikon dari lucide-react

/**
 * Komponen ManageClassDashboard
 * Menampilkan daftar kelas dalam bentuk tabel dengan tombol aksi berupa ikon.
 */
function ManageClassDashboard() {
    const classes = [
        {
            id: 1,
            title: "Photoshop Mastering: Become Legend",
            mentorName: "Salsa Julianj P",
            price: 0,
            rating: 4.5,
        },
        {
            id: 2,
            title: "Premiere Pro Basic to Hero",
            mentorName: "Budi Santoso",
            price: 150000,
            rating: 4.8,
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Kelola Kelas</h1>

            {/* Tabel daftar kelas */}
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
                                <td className="px-4 py-3">{kelas.title}</td>
                                <td className="px-4 py-3">
                                    {kelas.mentorName}
                                </td>
                                <td className="px-4 py-3">
                                    {kelas.price === 0
                                        ? "Gratis"
                                        : `Rp ${kelas.price.toLocaleString()}`}
                                </td>
                                <td className="px-4 py-3">{kelas.rating}</td>
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
        </div>
    );
}

ManageClassDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default ManageClassDashboard;
