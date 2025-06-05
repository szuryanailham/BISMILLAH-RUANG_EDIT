import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

/**
 * QuotesSection Component
 *
 * Komponen ini menampilkan sebuah pesan motivasi yang mengajak pengguna
 * untuk mengembangkan keterampilan mereka secara online.
 *
 * Terdapat elemen dekorasi animasi (floating SVGs) dan ikon media sosial
 * untuk memperkuat pesan brand secara visual.
 */
function QuotesSection() {
    return (
        <div className="p-2 px-5">
            <div className="relative w-full bg-Base_Color p-5 lg:p-10 rounded-md text-center overflow-hidden lg:h-[400px]">
                {/* Dekorasi Gambar Floating */}
                <img
                    src="/image/decor/Decor_1.svg"
                    alt="decoration 1"
                    className="w-14 md:w-24 h-12 md:h-24 absolute top-14 left-2 animate-float"
                />
                <img
                    src="/image/decor/Decor_2.svg"
                    alt="decoration 2"
                    className="w-10 md:w-20 h-10 md:h-20 absolute top-4 right-2 md:right-10 animate-float-slow"
                />
                <img
                    src="/image/decor/Decor_3.svg"
                    alt="decoration 3"
                    className="w-12 md:w-28 h-12 md:h-28 absolute bottom-4 left-4 animate-float"
                />
                <img
                    src="/image/decor/Decor_4.svg"
                    alt="decoration 4"
                    className="w-12 md:w-28 h-12 md:h-28 absolute bottom-2 right-2 md:right-10 animate-float-slow"
                />
                <div className="w-full lg:mt-[100px] text-center">
                    {/* Konten Utama Quotes */}
                    <h1 className="text-3xl md:text-6xl font-semibold leading-tight md:leading-[4rem]">
                        BUILD YOUR SKILLS{" "}
                        <span className="text-Second_Color">ONLINE</span>
                    </h1>
                    <p className="mt-3 px-4 md:px-0 font-xs text-lg md:w-[40%] mx-auto ">
                        Pelajari skill kekinian, bangun portofolio digitalmu,
                        dan raih kesempatan karier dari mana saja.
                    </p>

                    {/* Ikon Sosial Media */}
                    <div className="flex justify-center items-center gap-4 md:gap-10 text-2xl mt-7 md:mt-16">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaYoutube />
                        <FaWhatsapp />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuotesSection;
