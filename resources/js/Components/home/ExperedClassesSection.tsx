import React from "react";
import { Button } from "../ui/button";
import CardClass from "../CardClass";
import { MoveRight } from "lucide-react";
import { Link } from "@inertiajs/react";
function ExperedClassesSection() {
    return (
        <>
            <div className="px-5 mt-10">
                <div className="flex">
                    <h1 className="text-xl w-[50%] mb-3 text-Second_Color">
                        Expert Class
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
                        categoryIcon="Figma"
                        mentorName="Salsa Julianj P"
                        isBestSeller
                        href="#"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <CardClass
                        title="Photoshop Mastering Become New Legend of Manipulation"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far."
                        price={0}
                        rating={4.5}
                        image="/image/mentors/mentor_sample.png"
                        categoryIcon="Canva"
                        mentorName="Salsa Julianj P"
                        isBestSeller
                        href="#"
                    />
                </div>
                <div className="flex justify-center">
                    <Link href={"/All-Classes"}>
                        <Button
                            variant="outline"
                            className="border-Base_Color text-Base_Color hover:bg-Base_Color hover:text-white bg-transparent px-5 py-6 rounded-xl mt-7 text-center"
                        >
                            Telusuri Kelas
                            <MoveRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ExperedClassesSection;
