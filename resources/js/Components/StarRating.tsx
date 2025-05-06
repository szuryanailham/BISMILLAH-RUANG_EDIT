import { useState } from "react";
import { RatingBintangProps } from "@/types/RatingStar";
import { useRatingStore } from "@/stores/ratingStore";

export default function StarRating({
    total = 5,
    editable = false,
    value,
}: RatingBintangProps) {
    const { rating, setRating } = useRatingStore();
    const [hovered, setHovered] = useState<number | null>(null);

    const activeValue = editable ? hovered ?? rating : value ?? 0;

    return (
        <div className="flex space-x-1">
            {[...Array(total)].map((_, i) => {
                const ratingValue = i + 1;
                const isFilled = ratingValue <= activeValue;

                return (
                    <svg
                        key={i}
                        onClick={() => editable && setRating(ratingValue)}
                        onMouseEnter={() => editable && setHovered(ratingValue)}
                        onMouseLeave={() => editable && setHovered(null)}
                        className={`w-5 h-5 ${
                            editable ? "cursor-pointer" : ""
                        } ${isFilled ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.365-1.118L2.621 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                    </svg>
                );
            })}
        </div>
    );
}
