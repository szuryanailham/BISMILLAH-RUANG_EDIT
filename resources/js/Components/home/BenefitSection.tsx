import { Dot } from "lucide-react";
import React from "react";

/**
 * BenefitSection Component
 *
 * Menampilkan daftar benefit atau keunggulan yang didapatkan
 * oleh pengguna ketika bergabung dengan online course Ruang Edit.
 *
 * Struktur:
 * - Judul section dengan warna highlight
 * - Daftar benefit terbagi dalam beberapa kolom untuk tata letak yang rapi
 * - Setiap benefit ditandai dengan ikon bullet berupa titik dari lucide-react
 *
 * Styling menggunakan Tailwind CSS untuk layout grid responsif dan estetika.
 *
 * @returns {JSX.Element} Komponen section benefit Ruang Edit
 */
function BenefitSection(): JSX.Element {
    return (
        <section className="font-normal text-2xl mt-5 px-5 py-3 mb-5 ">
            {/* Judul Section Benefit */}
            <h1 className="w-[50%] mb-5 text-Second_Color">
                LET’S JOIN US, GET MORE BENEFIT
            </h1>

            {/* List Benefit dari Online Course */}
            <div className="flex flex-wrap items-center mt-3">
                {/* Kolom Benefit 1 */}
                <div className="w-[50%]">
                    <ul>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Mentor Berkompeten</p>
                        </li>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Fleksibilitas Belajar</p>
                        </li>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Bersertifikat (soon)</p>
                        </li>
                    </ul>
                </div>

                {/* Kolom Benefit 2 */}
                <div className="w-[50%]">
                    <ul>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Akses Selamanya</p>
                        </li>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">
                                Meet with Mentoring (soon)
                            </p>
                        </li>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Tidak Butuh Penyimpanan</p>
                        </li>
                    </ul>
                </div>

                {/* Kolom Benefit 3 */}
                <div className="w-[50%] mx-auto mt-2">
                    <ul>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Challenge mingguan (soon)</p>
                        </li>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Materi Update</p>
                        </li>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Real Komunitas</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default BenefitSection;
