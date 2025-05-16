import React from "react";

/**
 * CategoriesSection Component
 *
 * Menampilkan kategori kelas yang ditawarkan oleh Ruang Edit.
 *
 * Struktur:
 * - Judul section yang menonjol dengan warna highlight
 * - Grid responsive yang menampilkan beberapa card kategori kelas
 * - Setiap card berisi ikon, judul kategori, dan deskripsi singkat
 * - Menggunakan Tailwind CSS untuk styling dan layout grid
 *
 * @returns {JSX.Element} Komponen section kategori kelas Ruang Edit
 */
export default function CategoriesSection(): JSX.Element {
    return (
        <section className="w-full p-5 mb-5">
            {/* Judul Category */}
            <h1 className="text-xl w-[50%] mb-3 text-Second_Color">
                MORE CATEGORY MORE CRAFTING
            </h1>

            {/* Container Card Category */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {/* Card Category 1 */}
                <div className="bg-[#6152A5] p-4 rounded shadow">
                    <img
                        src="/image/icons/design.svg"
                        alt="logo category design"
                        className="w-10 mb-[130px]"
                    />
                    <h2 className="text-2xl mb-1 text-Fourt_Color">Design</h2>
                    <p className="text-xs text-Fourt_Color">
                        Kuasai industri kreatif visual dan berkarir dibidang
                        design dengan tambahan bekal AI
                    </p>
                </div>

                {/* Card Category 2 */}
                <div className="bg-[#C258AE] p-4 rounded shadow">
                    <img
                        src="/image/icons/photo.svg"
                        alt="logo category photography"
                        className="w-10 mb-[130px]"
                    />
                    <h2 className="text-2xl mb-1 text-Fourt_Color">
                        Photography
                    </h2>
                    <p className="text-xs text-Fourt_Color">
                        Kuasai dunia fotografi dan bangun karir di industri
                        visual dengan tambahan bekal AI.
                    </p>
                </div>

                {/* Card Category 3 */}
                <div className="bg-[#88DE53] p-4 rounded shadow">
                    <img
                        src="/image/icons/design.svg"
                        alt="logo category videography"
                        className="w-10 mb-[130px]"
                    />
                    <h2 className="text-2xl mb-1 text-Fourt_Color">
                        Videography
                    </h2>
                    <p className="text-xs text-Fourt_Color">
                        Kuasai seni videografi dan bangun karir di industri
                        kreatif dengan tambahan bekal AI.
                    </p>
                </div>

                {/* Card Category 4 */}
                <div className="bg-[#7966CE] p-4 rounded shadow">
                    <img
                        src="/image/icons/design.svg"
                        alt="logo category ui/ux design"
                        className="w-10 mb-[130px]"
                    />
                    <h2 className="text-2xl mb-1 text-Fourt_Color">
                        UI/UX Design
                    </h2>
                    <p className="text-xs text-Fourt_Color">
                        Kuasai desain UI/UX dan dengan sentuhan AI untuk
                        pengalaman yang lebih inovatif
                    </p>
                </div>
            </div>
        </section>
    );
}
