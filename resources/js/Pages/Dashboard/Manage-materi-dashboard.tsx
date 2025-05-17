import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
const dummyMateri = [
    {
        id: 1,
        urutan: 1,
        judul: "Pengenalan Editing Foto",
        mentor: "Ilham Suryana",
        namaKelas: "Kelas Editing Dasar",
    },
    {
        id: 2,
        urutan: 2,
        judul: "Dasar-dasar Lightroom",
        mentor: "Rizki Hidayat",
        namaKelas: "Kelas Editing Dasar",
    },
    {
        id: 3,
        urutan: 3,
        judul: "Retouching Wajah",
        mentor: "Dina Arsy",
        namaKelas: "Kelas Editing Lanjutan",
    },
    {
        id: 4,
        urutan: 4,
        judul: "Color Grading",
        mentor: "Ilham Suryana",
        namaKelas: "Kelas Editing Lanjutan",
    },
];

function ManageMateriDashboard() {
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
                                    Urutan
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
                            {dummyMateri.map((materi, index) => (
                                <tr key={materi.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {materi.judul}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {materi.urutan}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {materi.namaKelas}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {materi.mentor}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <button className="text-blue-600 hover:underline text-sm mr-3">
                                            Edit
                                        </button>
                                        <button className="text-red-600 hover:underline text-sm">
                                            Hapus
                                        </button>
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
ManageMateriDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default ManageMateriDashboard;
