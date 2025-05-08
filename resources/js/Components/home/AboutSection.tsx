import React from "react";
import { Button } from "@/Components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function AboutSection() {
    return (
        <div className="h-[400px] flex flex-col justify-center items-center p-2 mt-3 mb-5">
            <h1 className="text-center text-3xl p-2 pt-5 w-[80%] font-black">
                LET’S <span className="text-Base_Color">GROW</span> YOUR SELF UP
                IN <span className="text-Second_Color">CRAFTING</span>
            </h1>
            <p className="text-center px-4 py-1 font-light mt-3">
                Ruang Edit menyediakan platform terbaik bagi para kreator.Dengan
                berbagai kursus dan tutorial desain visual, kami membantu Anda
                mengasah keterampilan kreatif dan menciptakan karya yang
                memukau.
            </p>

            <Link href={"/All-Classes"}>
                <Button
                    variant="outline"
                    className="border-Base_Color text-Base_Color hover:bg-Base_Color hover:text-white bg-transparent px-5 py-6 rounded-xl mt-7 "
                >
                    Ikuti Kelas
                    <MoveRight />
                </Button>
            </Link>
        </div>
    );
}
