import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
const dummyMentor = [
    {
        id: 1,
        nama: "Ilham Suryana",
        bidang: "Editing Foto & Video",
        jumlahKelas: 5,
    },
    {
        id: 2,
        nama: "Rizki Hidayat",
        bidang: "Fotografi",
        jumlahKelas: 3,
    },
    {
        id: 3,
        nama: "Dina Arsy",
        bidang: "Color Grading",
        jumlahKelas: 4,
    },
];

function ManageMentorDashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Daftar Mentor</h1>

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
                            {dummyMentor.map((mentor, index) => (
                                <tr key={mentor.id}>
                                    <td className="px-6 py-4 text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {mentor.nama}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {mentor.bidang}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {mentor.jumlahKelas}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="text-blue-600 hover:underline mr-3">
                                            Edit
                                        </button>
                                        <button className="text-red-600 hover:underline">
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
ManageMentorDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
export default ManageMentorDashboard;
