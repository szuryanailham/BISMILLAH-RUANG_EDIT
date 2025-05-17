import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
const dummyOrderData = [
    {
        id: 1,
        namaPemesan: "Fajar Nugraha",
        kelas: "UI/UX Design Dasar",
        tanggal: "2024-08-10",
        status: "Lunas",
    },
    {
        id: 2,
        namaPemesan: "Sinta Lestari",
        kelas: "Frontend Developer",
        tanggal: "2024-08-12",
        status: "Menunggu Pembayaran",
    },
    {
        id: 3,
        namaPemesan: "Ilham Suryana",
        kelas: "Video Editing Profesional",
        tanggal: "2024-08-15",
        status: "Lunas",
    },
];

function ManageOrderDashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Manajemen Pesanan</h1>

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    #
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Nama Pemesan
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Kelas
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Tanggal
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {dummyOrderData.map((order, index) => (
                                <tr key={order.id}>
                                    <td className="px-6 py-4 text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {order.namaPemesan}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {order.kelas}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {order.tanggal}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span
                                            className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                                order.status === "Lunas"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="text-blue-600 hover:underline">
                                            Detail
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
ManageOrderDashboard.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
export default ManageOrderDashboard;
