import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";

const dummyUsers = [
    {
        id: 1,
        nama: "Fajar Nugraha",
        email: "fajar@example.com",
        role: "Siswa",
        kelasDiikuti: 3,
    },
    {
        id: 2,
        nama: "Sinta Lestari",
        email: "sinta@example.com",
        role: "Siswa",
        kelasDiikuti: 5,
    },
    {
        id: 3,
        nama: "Ilham Suryana",
        email: "ilham@example.com",
        role: "Mentor",
        kelasDiikuti: 0,
    },
];

function ManageUserDashboard() {
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
                                    Role
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
                            {dummyUsers.map((user, index) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {user.nama}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {user.role}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {user.kelasDiikuti}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
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
ManageUserDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
export default ManageUserDashboard;
