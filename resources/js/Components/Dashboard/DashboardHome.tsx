import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

/**
 * Halaman utama dashboard admin Ruang Edit
 */
function DashboardHome() {
    return (
        <>
            {/* Statistik Utama */}
            <section className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Jumlah Kelas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-sm text-muted-foreground">
                            Kelas aktif saat ini
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Jumlah Member</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">320</p>
                        <p className="text-sm text-muted-foreground">
                            Member terdaftar
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Transaksi Berhasil</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">96</p>
                        <p className="text-sm text-muted-foreground">
                            Pembelian kelas bulan ini
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Navigasi ke halaman lintasan */}
            <section className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Akses Cepat</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button variant="default" className="text-sm">
                            Lihat Lintasan Kelas
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* Aktivitas Terbaru */}
            <section className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Aktivitas Terbaru</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <p>
                            📦 Member baru mendaftar:{" "}
                            <strong>Ayu Rahmawati</strong>
                        </p>
                        <p>
                            💳 Pembelian kelas:{" "}
                            <strong>Kelas Editing Mobile</strong> oleh{" "}
                            <strong>Dimas</strong>
                        </p>
                        <p>
                            📝 Kelas baru ditambahkan:{" "}
                            <strong>Editing Storytelling</strong>
                        </p>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

DashboardHome.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default DashboardHome;
