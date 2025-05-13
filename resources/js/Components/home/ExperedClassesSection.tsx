import React from "react";
import { Button } from "../ui/button";
import CardClass from "../CardClass";
import { MoveRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { ClassModel } from "@/types/ClassModel"; // Pastikan path-nya sesuai

interface Props {
    classes: ClassModel[];
}

function ExperedClassesSection({ classes }: Props) {
    return (
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
                {classes.map((item) => (
                    <CardClass
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        rating={item.rating_class}
                        image="/image/mentors/mentor_sample.png"
                        categoryIcon={item.category_class}
                        mentorName={item.mentor?.name ?? "Unknown Mentor"}
                        isBestSeller={item.students_count > 50}
                        href={`/Detail-Class/${item.id}`}
                    />
                ))}
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
    );
}

export default ExperedClassesSection;
