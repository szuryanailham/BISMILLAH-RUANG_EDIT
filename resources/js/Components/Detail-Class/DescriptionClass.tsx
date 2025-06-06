import React from "react";
import StarRating from "@/Components/StarRating";
import { DescriptionClassProps } from "@/types/DescriptionClassProps";

const DescriptionClass: React.FC<DescriptionClassProps> = ({
    title,
    description,
    rating,
}) => {
    return (
        <div className="w-full px-4 py-5 flex flex-col items-center md:items-start md:pr-20">
            <div className="space-y-3 md:space-y-4 w-full max-w-3xl">
                {/* title */}
                <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
                    {title}
                </h1>

                {/* description */}
                <p className="text-base font-light text-center  md:text-left">
                    {description}
                </p>

                {/* rating */}
                <div className="flex justify-center md:justify-start items-center gap-3">
                    <span>{rating.toFixed(1)}</span>
                    <StarRating value={rating} />
                </div>
            </div>
        </div>
    );
};

export default DescriptionClass;
