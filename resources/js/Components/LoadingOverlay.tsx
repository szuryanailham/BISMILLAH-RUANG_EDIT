import React from "react";

const LoadingOverlay = () => {
    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-normal text-white animate-pulse transition-all duration-800">
                RUANG <span className="text-Base_Color">EDIT</span>
            </h1>

            {/* Spinner di bawah teks */}
        </div>
    );
};

export default LoadingOverlay;
