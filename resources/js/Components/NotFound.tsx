import React from "react";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-2xl font-semibold">Halaman tidak ditemukan</p>
            <a
                href="/"
                className="mt-4 inline-block text-blue-600 hover:underline"
            >
                Kembali ke Beranda
            </a>
        </div>
    );
}

export default NotFound;
