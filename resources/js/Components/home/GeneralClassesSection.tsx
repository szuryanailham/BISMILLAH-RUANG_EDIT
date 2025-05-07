import { Link } from "@inertiajs/react";
import React from "react";
import CardClass from "../CardClass";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

function GeneralClassesSection() {
    return (
        <div className="px-5">
            <div className="flex">
                <h1 className="text-xl w-[50%] mb-3 text-Second_Color">
                    Generalist Class
                </h1>
                <p className="w-[40%] text-right text-xs">
                    Lorem ipsum odor amet, consectetuer adipiscing
                </p>
            </div>
            {/* cards class */}
            <div className="flex flex-col gap-2">
                <CardClass
                    title="Photoshop Mastering Become New Legend of Manipulation"
                    description="Here are the biggest enterprise technology acquisitions of 2021 so far."
                    price={0}
                    rating={4.5}
                    image="/image/mentors/mentor_sample.png"
                    categoryIcon="Photoshop"
                    mentorName="Salsa Julianj P"
                    isBestSeller
                    href="#"
                />

                <CardClass
                    title="Photoshop Mastering Become New Legend of Manipulation"
                    description="Here are the biggest enterprise technology acquisitions of 2021 so far."
                    price={0}
                    rating={4.5}
                    image="/image/mentors/mentor_sample.png"
                    categoryIcon="CapCut"
                    mentorName="Salsa Julianj P"
                    isBestSeller
                    href="#"
                />

                <CardClass
                    title="Photoshop Mastering Become New Legend of Manipulation"
                    description="Here are the biggest enterprise technology acquisitions of 2021 so far."
                    price={25000}
                    rating={4.5}
                    image="/image/mentors/mentor_sample.png"
                    categoryIcon="Adobe Premiere"
                    mentorName="Salsa Julianj P"
                    isBestSeller
                    href="#"
                />
            </div>
            <div className="flex justify-center">
                <Button
                    variant="outline"
                    className="border-Base_Color text-Base_Color hover:bg-Base_Color hover:text-white bg-transparent px-5 py-6 rounded-xl mt-7 text-center"
                >
                    Telusuri Kelas
                    <MoveRight />
                </Button>
            </div>
        </div>
    );
}

export default GeneralClassesSection;
