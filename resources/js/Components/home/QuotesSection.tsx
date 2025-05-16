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
            <div className="relative w-full bg-Base_Color p-5 rounded-md text-center overflow-hidden">
                {/* Dekorasi Gambar Floating */}
                <img
                    src="/image/decor/Decor_1.svg"
                    alt="decoration 1"
                    className="w-14 h-12 absolute top-14 left-2 animate-float"
                />
                <img
                    src="/image/decor/Decor_2.svg"
                    alt="decoration 2"
                    className="w-10 h-10 absolute top-4 right-2 animate-float-slow"
                />
                <img
                    src="/image/decor/Decor_3.svg"
                    alt="decoration 3"
                    className="w-12 h-12 absolute bottom-4 left-4 animate-float"
                />
                <img
                    src="/image/decor/Decor_4.svg"
                    alt="decoration 4"
                    className="w-12 h-12 absolute bottom-2 right-2 animate-float-slow"
                />

                {/* Konten Utama Quotes */}
                <h1 className="text-3xl font-semibold leading-10">
                    BUILD YOUR SKILLS{" "}
                    <span className="text-Second_Color">ONLINE</span>
                </h1>
                <p className="px-4 mt-3 font-normal">
                    Jadilah bagian dari revolusi kreatif dan wujudkan ide-ide
                    luar biasa bersama kami
                </p>

                {/* Ikon Sosial Media */}
                <div className="flex justify-center items-center gap-4 text-2xl mt-7">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaYoutube />
                    <FaWhatsapp />
                </div>
            </div>
        </div>
    );
}

export default QuotesSection;
