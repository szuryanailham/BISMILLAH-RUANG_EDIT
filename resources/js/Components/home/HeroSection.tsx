import React from "react";
import { MoveRight } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Button } from "@/Components/ui/button";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
function HeroSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3">
            {/* grid satu */}
            <div className="bg-transpart mt-4">
                <div className="max-w-xl mx-auto">
                    <img
                        src="/image/hero.png"
                        className="w-full h-auto max-h-[250px] object-cover rounded-md "
                    />
                </div>
            </div>
            {/* grid dua */}
            <div className="w-full max-h-[220px] bg-Sixth_Color rounded-md px-5 py-2">
                <h2 className="w-2/3 text-3xl font-semibold text-Fourt_Color">
                    BEBASKAN IDE CREATIVITAS
                </h2>
                <div className="mt-12 flex justify-between py-3">
                    <Link href={"/All-Classes"}>
                        <Button
                            variant="outline"
                            className="border-Base_Color text-Base_Color hover:bg-Base_Color hover:text-white bg-transparent px-5 py-5 rounded-xl"
                        >
                            Mulai Belajar
                            <MoveRight />
                        </Button>
                    </Link>

                    <h3 className="text-sm w-24 text-Fourt_Color font-medium leading-tight text-bold">
                        PLATFORM KURSUS EDITING
                    </h3>
                </div>
            </div>
            {/* grid tiga */}
            <div className="w-full h-[150px] max-h-[220px] rounded-md flex gap-1">
                <div className="w-[60%]  bg-Second_Color max-h-[200px] rounded-md px-5">
                    <h3 className="text-Fourt_Color text-right">
                        Indonesia Regency
                    </h3>
                    <h2 className=" text-Fourt_Color w-10 mt-16 text-sm">
                        PLATFORM KOMUNITAS
                    </h2>
                </div>
                <div className="w-[40%]  bg-Sixth max-h-[200px] rounded-md px-5 bg-Sixth_Color ">
                    <h2 className="text-Fourt_Color text-center">
                        Connect With Us
                    </h2>
                    <div className="flex justify-evenly items-center gap-2 mt-[30%]">
                        {/* instagram logo */}
                        <div className="w-8 h-8 bg-Fourt_Color rounded-full flex justify-center items-center">
                            <IoLogoInstagram className="text-md " />
                        </div>
                        {/* Whatsapp Whatsapp */}
                        <div className="w-8 h-8 bg-Fourt_Color rounded-full flex justify-center items-center">
                            <FaWhatsapp className="text-md" />
                        </div>
                        {/* instagram Tiktok */}
                        <div className="w-8 h-8 bg-Fourt_Color rounded-full flex justify-center items-center">
                            <FaTiktok className="text-md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroSection;
