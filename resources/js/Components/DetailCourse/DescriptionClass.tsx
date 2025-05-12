import React from "react";
import StarRating from "@/Components/StarRating";
import { DescriptionClassProps } from "@/types/DescriptionClassProps";

const DescriptionClass: React.FC<DescriptionClassProps> = ({
    title,
    description,
    rating,
}) => {
    return (
        <div>
            <div className="p-3 mt-5 space-y-2">
                {/* title */}
                <h1 className="text-2xl text-center font-bold">{title}</h1>

                {/* description */}
                <p className="p-3 text-center font-light">{description}</p>

                {/* rating */}
                <div className="flex items-center gap-3 justify-center item-center">
                    {rating.toFixed(1)}{" "}
                    {/* Menampilkan rating dengan 1 angka setelah koma */}
                    <StarRating value={rating} />
                </div>
            </div>
        </div>
    );
};

export default DescriptionClass;
