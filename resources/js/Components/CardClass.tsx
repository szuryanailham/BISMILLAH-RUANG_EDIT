import { Link } from "@inertiajs/react";
import React from "react";
import { CardClassProps } from "@/types/CardClass";
import StarRating from "./StarRating";

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
    return (
        <Link href={href}>
            <div className="mt-2">
                <div className="max-w-sm bg-Card_Color rounded-lg shadow-sm">
                    <div className="relative">
                        {isBestSeller && (
                            <div className="absolute top-2 bg-Second_Color text-Fourt_Color px-5 py-3 text-sm">
                                Best Seller
                            </div>
                        )}
                        <img
                            className="rounded-t-lg w-full"
                            src={image}
                            alt="Class"
                        />

                        <div>
                            <img
                                className=" w-16 absolute bottom-1 left-2"
                                src={
                                    categoryIcon === "Photoshop"
                                        ? "/image/icons/Adobe_Photoshop.svg"
                                        : categoryIcon === "CapCut"
                                        ? "/image/icons/CapCut.svg"
                                        : categoryIcon === "Canva"
                                        ? "/image/icons/Canva.svg"
                                        : categoryIcon === "Figma"
                                        ? "/image/icons/Figma.svg"
                                        : categoryIcon === "Adobe Premiere"
                                        ? "/image/icons/Premiere.svg"
                                        : categoryIcon === "DaVinci"
                                        ? "/image/icons/DaVinci.svg"
                                        : categoryIcon === "Lightroom"
                                        ? "/image/icons/Lightroom.svg"
                                        : "/image/icons/default.svg" // fallback
                                }
                                alt={`${categoryIcon} Icon`}
                            />
                            <div className="absolute bottom-4 right-2 bg-Base_Color text-Fourt_Color px-5 py-3 rounded-lg">
                                {mentorName}
                            </div>
                        </div>
                    </div>

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-Sixth_Color">
                            {title}
                        </h5>
                        <p className="mb-3 font-normal text-Sixth_Color">
                            {description}
                        </p>
                        <div className="flex justify-between items-center mt-10">
                            <p className="text-xl">
                                {!price || price.toString().endsWith("0000")
                                    ? "Gratis"
                                    : `Rp.${price.toLocaleString("id-ID")},00`}
                            </p>
                            <div className="flex items-center gap-3">
                                {rating} <StarRating value={rating} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
