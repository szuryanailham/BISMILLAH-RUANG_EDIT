import React from "react";

/**
 * VideoProfileSection Component
 *
 * Menampilkan video profil dari Ruang Edit online course
 * beserta headline dan deskripsi singkat yang memperkenalkan
 * platform dan manfaatnya untuk pengembangan keterampilan kreatif.
 *
 * Struktur:
 * - Video YouTube yang ditampilkan menggunakan iframe dengan aspect ratio 16:9
 * - Judul utama dengan highlight warna pada kata penting
 * - Paragraf deskripsi singkat platform
 *
 * Styling menggunakan Tailwind CSS untuk responsivitas dan estetika.
 *
 * @returns {JSX.Element} Komponen section video profil Ruang Edit
 */
export default function VideoProfileSection(): JSX.Element {
    return (
        <div className="w-full bg-Base_Color">
            {/* Video profil Ruang Edit */}
            <iframe
                className="aspect-video w-full h-[300px] p-2 rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Profil Ruang Edit"
                allowFullScreen
            ></iframe>

            {/* Headline dan deskripsi singkat */}
            <div className="flex justify-center items-center flex-col">
                {/* Judul headline dengan highlight */}
                <h1 className="text-center text-3xl p-2 pt-5 w-[80%] font-black">
                    GROW YOUR <span className="text-Second_Color">SKILLS </span>{" "}
                    AND <span className="text-Second_Color">UNLEASH</span> YOUR
                    CRAFT
                </h1>

                {/* Deskripsi platform */}
                <p className="text-center px-7 py-1 font-light pb-5">
                    Ruang Edit menyediakan platform terbaik bagi para kreator.
                    Dengan berbagai kursus dan tutorial desain visual, kami
                    membantu Anda mengasah keterampilan kreatif dan menciptakan
                    karya yang memukau.
                </p>
            </div>
        </div>
    );
}
