import { Link } from "@inertiajs/react";
import React from "react";
import { CardClassProps } from "@/types/CardClass";
import StarRating from "./StarRating";
import { formatRupiah } from "@/utils/formatRupiah";

/**
 * CardClass Component
 * Menampilkan kartu kelas dengan informasi seperti judul, deskripsi,
 * harga, rating, gambar, ikon kategori, nama mentor, dan status Best Seller.
 *
 * Props:
 * - title: string - Judul kelas
 * - description: string - Deskripsi singkat kelas
 * - price: number - Harga kelas (0 jika gratis)
 * - rating: number - Nilai rating kelas
 * - image: string - URL gambar utama kelas
 * - categoryIcon: string - Nama kategori untuk menampilkan ikon yang sesuai
 * - mentorName: string - Nama mentor pengajar kelas
 * - isBestSeller: boolean (default: false) - Menandai apakah kelas adalah best seller
 * - href: string - URL untuk link ke detail kelas
 */
export default function CardClass({
    title,
    description,
    price,
    rating,
    image,
    categoryIcon,
    mentorName,
    isBestSeller = false,
    href,
}: CardClassProps) {
    // Mapping kategori ke ikon gambar
    const categoryIconsMap: Record<string, string> = {
        Capcut: "/image/icons/CapCut.svg",
        Figma: "/image/icons/Figma.svg",
        Canva: "/image/icons/Canva.svg",
        Photoshop: "/image/icons/Adobe_Photoshop.svg",
        Illustrator: "/image/icons/Illustrator.svg",
        PremierePro: "/image/icons/Premiere.svg",
        Lightroom: "/image/icons/Lightroom.svg",
        DaVinciResolve: "/image/icons/DaVinci.svg",
    };
    return (
        <Link href={href}>
            <div className="mt-2">
                {/* Container kartu */}
                <div className="max-w-sm bg-Card_Color rounded-lg shadow-sm">
                    <div className="relative">
                        {/* Label Best Seller muncul jika isBestSeller true */}
                        {isBestSeller && (
                            <div className="absolute top-2 bg-Second_Color text-Fourt_Color px-5 py-3 text-sm">
                                Best Seller
                            </div>
                        )}

                        {/* Gambar utama kelas */}
                        <img
                            className="rounded-t-lg w-full"
                            src={`/storage/${image}`}
                            alt={`Class - ${title}`}
                        />

                        <div>
                            {/* Ikon kategori */}
                            <img
                                className="w-16 absolute bottom-1 left-2"
                                src={
                                    categoryIconsMap[categoryIcon] ||
                                    "/image/icons/default.svg"
                                }
                                alt={`${categoryIcon} Icon`}
                            />

                            {/* Nama mentor, muncul di kanan bawah gambar */}
                            <div className="absolute bottom-4 right-2 bg-Base_Color text-Fourt_Color px-5 py-3 rounded-lg">
                                {mentorName}
                            </div>
                        </div>
                    </div>

                    {/* Isi konten kartu: judul, deskripsi, harga, rating */}
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-Sixth_Color">
                            {title}
                        </h5>
                        <p className="mb-3 font-normal text-Sixth_Color">
                            {description}
                        </p>

                        {/* Harga dan rating kelas */}
                        <div className="flex justify-between items-center mt-10">
                            <p className="text-xl">
                                {/* Jika harga 0 atau berakhiran '0000' tampilkan 'Gratis' */}
                                {!price || price.toString().endsWith("0000")
                                    ? "Gratis"
                                    : `${formatRupiah(price)}`}
                            </p>

                            <div className="flex items-center gap-3">
                                {/* Tampilkan rating angka dan bintang */}
                                {rating} <StarRating value={rating} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
