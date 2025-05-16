import React from "react";
import { MoveRight } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

/**
 * HeroSection Component
 *
 * Menampilkan bagian hero utama pada halaman depan yang terdiri dari:
 * - Gambar hero di sisi kiri
 * - Judul besar dan tombol aksi di sisi kanan
 * - Bagian bawah yang menampilkan info komunitas dan ikon sosial media
 *
 * Layout menggunakan grid dengan 2 kolom untuk layar medium ke atas, dan 1 kolom untuk layar kecil.
 *
 * Styling dan warna menggunakan class Tailwind CSS dan custom color utility classes.
 *
 * @returns JSX.Element - Hero section lengkap dengan gambar, judul, tombol, komunitas, dan sosial media
 */
function HeroSection() {
    return (
        <div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2">
            {/* Bagian kiri: Gambar Hero */}
            <div className="mt-4">
                <div className="mx-auto max-w-xl">
                    <img
                        src="/image/hero.png"
                        alt="Hero"
                        className="h-auto max-h-[250px] w-full rounded-md object-cover"
                    />
                </div>
            </div>

            {/* Bagian kanan: Judul dan tombol */}
            <div className="w-full max-h-[220px] rounded-md bg-Sixth_Color px-5 py-2">
                <h2 className="text-3xl font-semibold text-Fourt_Color w-2/3">
                    BEBASKAN IDE CREATIVITAS
                </h2>

                <div className="mt-12 flex justify-between py-3">
                    {/* Tombol Aksi: Navigasi ke halaman semua kelas */}
                    <Link href="/All-Classes">
                        <Button
                            variant="outline"
                            className="rounded-xl border-Base_Color bg-transparent px-5 py-5 text-Base_Color hover:bg-Base_Color hover:text-white"
                        >
                            Mulai Belajar
                            <MoveRight className="ml-2" />
                        </Button>
                    </Link>

                    {/* Deskripsi singkat platform */}
                    <h3 className="text-sm font-medium leading-tight text-Fourt_Color w-24">
                        PLATFORM KURSUS EDITING
                    </h3>
                </div>
            </div>

            {/* Bagian bawah: Komunitas & Sosial Media */}
            <div className="flex h-[150px] max-h-[220px] w-full gap-1 rounded-md">
                {/* Komunitas */}
                <div className="w-[60%] max-h-[200px] rounded-md bg-Second_Color px-5">
                    <h3 className="text-right text-Fourt_Color">
                        Indonesia Regency
                    </h3>
                    <h2 className="mt-16 w-10 text-sm text-Fourt_Color">
                        PLATFORM KOMUNITAS
                    </h2>
                </div>

                {/* Social Media */}
                <div className="w-[40%] max-h-[200px] rounded-md bg-Sixth_Color px-5">
                    <h2 className="text-center text-Fourt_Color">
                        Connect With Us
                    </h2>

                    {/* Ikon Sosial Media: Instagram, WhatsApp, TikTok */}
                    <div className="mt-[30%] flex items-center justify-evenly gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-Fourt_Color">
                            <IoLogoInstagram className="text-md" />
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-Fourt_Color">
                            <FaWhatsapp className="text-md" />
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-Fourt_Color">
                            <FaTiktok className="text-md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
