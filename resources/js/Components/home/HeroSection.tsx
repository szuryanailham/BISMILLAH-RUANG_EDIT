import React from "react";
import { MoveRight } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { MapPin } from "lucide-react";

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
        <>
            <div className="hidden sm:grid grid-cols-2 gap-2 px-3">
                {/* Kartu 1: Header & CTA */}
                <div className="w-full h-[420px] rounded-md bg-Sixth_Color px-6 py-6 flex flex-col justify-between">
                    {/* Bagian Atas */}
                    <div>
                        <div className="flex gap-4 items-center">
                            <img
                                className="w-12"
                                src="/image/decor/icon_decor.svg"
                                alt="icons decor"
                            />
                            <h3 className="text-Fourt_Color text-sm font-semibold tracking-wide">
                                #KURSUS KREATIF TERBAIK
                            </h3>
                        </div>

                        <h1 className="mt-4 scroll-m-20 leading-tight text-5xl w-[400px] font-extrabold tracking-tight text-balance text-Fourt_Color">
                            BEBASKAN IDE CREATIVITAS
                        </h1>
                    </div>

                    {/* Bagian Bawah */}
                    <div className="flex justify-between items-center px-3">
                        <Link href="/All-Classes">
                            <Button
                                variant="outline"
                                className="rounded-lg border-Base_Color bg-transparent px-4 py-3 text-sm text-Base_Color hover:bg-Base_Color hover:text-white font-medium"
                            >
                                Mulai Belajar
                                <MoveRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>

                        <h3 className="w-32 text-md font-medium leading-normal text-Fourt_Color text-right">
                            PLATFORM KURSUS EDITING
                        </h3>
                    </div>
                </div>

                {/* Kartu 2: Gambar Hero */}
                <div className="h-[420px]">
                    <div className="mx-auto h-full w-full max-w-xl">
                        <img
                            src="/image/hero.png"
                            alt="Hero"
                            className="h-full w-full rounded-md object-cover"
                        />
                    </div>
                </div>

                {/* Kartu 3: Komunitas */}
                <div className="w-full h-[200px] rounded-md bg-Second_Color px-5">
                    <h3 className="flex items-center justify-end gap-2 text-Fourt_Color text-sm font-medium p-2">
                        <MapPin className="w-4 h-4" />
                        Indonesia Regency
                    </h3>

                    <div className="flex items-center gap-4 item-center mt-5">
                        <img
                            src="/image/decor/icon_decor2.svg"
                            alt="icon decor dua"
                            className="w-40 object-contain"
                        />
                        <div className="flex flex-col justify-center gap-1">
                            <h2 className="text-2xl w-10 text-Fourt_Color tracking-wide font-normal">
                                PLATFORM KOMUNITAS
                            </h2>
                            <p className="font-normal text-sm text-Fourt_Color">
                                Mari Berkarya Bersama Kami
                            </p>
                        </div>
                    </div>
                </div>

                {/* Kartu 4: Social Media */}
                <div className="w-full h-[200px] rounded-md bg-Sixth_Color px-4 flex flex-col justify-center items-center">
                    <h2 className="text-2xl text-Fourt_Color mb-4 text-center">
                        Connect With Us
                    </h2>

                    <div className="flex flex-col items-center gap-2">
                        {/* Baris atas: Instagram & WhatsApp */}
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <div className="flex items-center gap-3 border border-Fourt_Color rounded-xl px-3 py-1">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-Fourt_Color">
                                    <IoLogoInstagram className="text-md text-white" />
                                </div>
                                <p className="text-Fourt_Color text-sm font-medium">
                                    Instagram
                                </p>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-center gap-3 border border-Fourt_Color rounded-xl px-3 py-1">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-Fourt_Color">
                                    <FaWhatsapp className="text-md text-white" />
                                </div>
                                <p className="text-Fourt_Color text-sm font-medium">
                                    WhatsApp
                                </p>
                            </div>
                        </div>

                        {/* Baris bawah tengah: TikTok */}
                        <div className="flex items-center gap-3 border border-Fourt_Color rounded-xl px-3 py-1 mt-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-Fourt_Color">
                                <FaTiktok className="text-md text-white" />
                            </div>
                            <p className="text-Fourt_Color text-sm font-medium">
                                TikTok
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===================== MOBILE DESIGN ======================== */}
            <div className="grid grid-cols-1 gap-3 px-3 md:grid-cols-2 md:hidden lg:hidden ">
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
        </>
    );
}

export default HeroSection;
