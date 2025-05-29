import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Material } from "@/types/Material";

// Interface Material contoh, sesuaikan jika sudah ada di "@/types/Material"

interface ManageMateriDashboardProps {
    Materials: Material[]; // Harus array
}

const ManageMateriDashboard = ({ Materials }: ManageMateriDashboardProps) => {
    console.log(Materials);
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
                            {Materials.map((materi, index) => (
                                <tr key={materi.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {materi.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        2
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {materi.class.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {materi.class.mentor.name}
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
};

ManageMateriDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default ManageMateriDashboard;
