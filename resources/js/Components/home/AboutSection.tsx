import React from "react";
import { Button } from "@/Components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "@inertiajs/react";

/**
 * AboutSection Component
 *
 * Menampilkan bagian judul utama, deskripsi singkat, dan tombol navigasi
 * menuju halaman kelas pada platform Ruang Edit.
 *
 * Struktur:
 * - Judul utama dengan highlight warna pada kata tertentu
 * - Paragraf deskripsi singkat tentang platform Ruang Edit
 * - Tombol dengan icon yang mengarahkan pengguna ke halaman "/All-Classes"
 *
 * Layout responsive untuk mobile, tablet, dan desktop.
 *
 * @returns {JSX.Element}
 */
export default function AboutSection(): JSX.Element {
    return (
        <div className="mt-3 mb-5 flex h-auto min-h-[400px] lg:h-screen flex-col items-center justify-center p-4 md:p-6 lg:p-10">
            {/* Judul utama */}
            <h1 className="w-[90%] text-center text-4xl font-black md:text-4xl lg:text-6xl lg:w-[600px]">
                LET’S <span className="text-Base_Color">GROW</span> YOUR SELF UP
                IN <span className="text-Second_Color">CREATING</span>
            </h1>

            {/* Deskripsi */}
            <p className="mt-4 w-[90%] text-center text-sm font-light md:w-[80%] md:text-base lg:w-[60%] lg:text-lg">
                Ruang Edit menyediakan platform terbaik bagi para kreator.
                Dengan berbagai kursus dan tutorial desain visual, kami membantu
                Anda mengasah keterampilan kreatif dan menciptakan karya yang
                memukau.
            </p>

            {/* Tombol navigasi */}
            <Link href="/All-Classes">
                <Button
                    variant="outline"
                    className="mt-20 rounded-xl border-Base_Color bg-transparent 
                   px-6 py-3 text-sm text-Base_Color 
                   hover:bg-Base_Color hover:text-white
                   md:px-7 md:py-4 md:text-base 
                   lg:px-8 lg:py-5 lg:text-lg"
                >
                    Ikuti Kelas
                    <MoveRight className="ml-2" />
                </Button>
            </Link>
        </div>
    );
}
