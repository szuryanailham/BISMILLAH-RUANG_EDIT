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
        <div className="p-3 lg:p-10 lg:h-screen">
            <div className="w-full h-full bg-Base_Color rounded-xl md:flex md:flex-row-reverse md:items-center md:justify-between">
                {/* Video profil Ruang Edit */}
                <div className="w-full md:w-1/2 p-3">
                    <iframe
                        className="aspect-video w-full min-h-[240px] md:min-h-[300px] lg:min-h-[360px] rounded-xl"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Video Profil Ruang Edit"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Headline dan deskripsi singkat */}
                <div className="w-full md:w-1/2 flex justify-center items-center flex-col p-4">
                    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-black px-4">
                        GROW YOUR{" "}
                        <span className="text-Second_Color">SKILLS</span> AND{" "}
                        <span className="text-Second_Color">UNLEASH</span> YOUR
                        CRAFT
                    </h1>

                    <p className="mt-4 text-center text-sm md:text-base lg:text-lg px-6 font-light">
                        Ruang Edit menyediakan platform terbaik bagi para
                        kreator. Dengan berbagai kursus dan tutorial desain
                        visual, fotografi, serta videografi, kami membantu Anda
                        mengasah keterampilan kreatif dan menciptakan karya yang
                        memukau.
                    </p>
                </div>
            </div>
        </div>
    );
}
