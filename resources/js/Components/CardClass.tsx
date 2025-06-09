import { Link } from "@inertiajs/react";
import React from "react";
import { CardClassProps } from "@/types/CardClass";
import StarRating from "./StarRating";
import { formatRupiah } from "@/utils/formatRupiah";

/**
 * CardClass Component
 * Menampilkan kartu kelas secara responsif.
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
            <div className="mt-4 w-full max-w-[400px]">
                <div className="bg-Card_Color rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative">
                        {isBestSeller && (
                            <div className="absolute top-2 left-2 bg-Second_Color text-Fourt_Color px-3 py-1 text-xs rounded-md shadow-md">
                                Best Seller
                            </div>
                        )}

                        <img
                            className="rounded-t-lg w-full h-48 object-cover"
                            src={`/storage/${image}`}
                            alt={`Class - ${title}`}
                        />

                        {/* Kategori & Mentor */}
                        <div>
                            <img
                                className="w-10 sm:w-12 absolute bottom-2 left-2"
                                src={
                                    categoryIconsMap[categoryIcon] ||
                                    "/image/icons/default.svg"
                                }
                                alt={`${categoryIcon} Icon`}
                            />

                            <div className="absolute bottom-2 right-2 bg-Base_Color font-bold text-Fourt_Color px-3 py-2 shadow-md rounded-lg text-xs sm:text-sm">
                                {mentorName}
                            </div>
                        </div>
                    </div>

                    {/* Konten */}
                    <div className="p-4 flex flex-col justify-between h-[230px]">
                        <div>
                            <h5 className="text-lg sm:text-xl font-bold text-Sixth_Color mb-2 line-clamp-2">
                                {title}
                            </h5>
                            <p className="text-sm text-Sixth_Color mb-4 line-clamp-2 ">
                                {description}
                            </p>
                        </div>

                        <div className="flex justify-between items-center mt-auto">
                            <p className=" text-xl font-semibold text-Primary_Color">
                                {!price || price.toString().endsWith("0000")
                                    ? "Gratis"
                                    : formatRupiah(price)}
                            </p>

                            <div className="flex items-center gap-1 text-sm">
                                {rating}
                                <StarRating value={rating} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
