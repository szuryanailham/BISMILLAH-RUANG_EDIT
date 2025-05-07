import React from "react";
import StarRating from "./StarRating";

const TestimonyCards = () => {
    return (
        <div className="bg-Card_Color rounded-2xl shadow-lg p-6 w-full max-w-md sm:max-w-lg transition-all duration-300 hover:shadow-xl">
            {/* Header: Foto & Nama */}
            <div className="flex items-center gap-4 mb-5">
                <img
                    src="https://github.com/shadcn.png"
                    alt="Foto Testimoni"
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Salsa Julianj P
                    </h3>
                    <p className="text-sm text-white">UI Designer</p>
                </div>
            </div>

            {/* Isi Testimoni */}
            <p className="text-white mb-6 text-sm sm:text-base font-thin leading-relaxed">
                “Kelasnya sangat interaktif dan bermanfaat! Saya jadi lebih
                percaya diri membuat desain dengan Photoshop. Materi yang
                diberikan sangat terstruktur dan mudah dipahami.”
            </p>

            {/* Rating Bintang */}
            <div className="flex justify-center">
                <StarRating value={5} />
            </div>
        </div>
    );
};

export default TestimonyCards;
