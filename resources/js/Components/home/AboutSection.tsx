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
 * Layout menggunakan flexbox dengan orientasi kolom dan penyesuaian tengah.
 *
 * @returns {JSX.Element} - Section dengan informasi tentang Ruang Edit
 */
export default function AboutSection(): JSX.Element {
    return (
        <div className="mt-3 mb-5 flex h-[400px] flex-col items-center justify-center p-2">
            {/* Judul utama dengan highlight warna */}
            <h1 className="w-[80%] p-2 pt-5 text-center text-3xl font-black">
                LET’S <span className="text-Base_Color">GROW</span> YOUR SELF UP
                IN <span className="text-Second_Color">CRAFTING</span>
            </h1>

            {/* Deskripsi singkat platform */}
            <p className="mt-3 px-4 py-1 text-center font-light">
                Ruang Edit menyediakan platform terbaik bagi para kreator.
                Dengan berbagai kursus dan tutorial desain visual, kami membantu
                Anda mengasah keterampilan kreatif dan menciptakan karya yang
                memukau.
            </p>

            {/* Tombol navigasi ke halaman kelas */}
            <Link href="/All-Classes">
                <Button
                    variant="outline"
                    className="mt-7 rounded-xl border-Base_Color bg-transparent px-5 py-6 text-Base_Color hover:bg-Base_Color hover:text-white"
                >
                    Ikuti Kelas
                    <MoveRight className="ml-2" />
                </Button>
            </Link>
        </div>
    );
}
