import { Link } from "@inertiajs/react";
import React from "react";
import CardClass from "../CardClass";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { ClassModel } from "@/types/ClassModel"; // Pastikan path ini benar

interface Props {
    classes: ClassModel[];
}

const GeneralClassesSection: React.FC<Props> = ({ classes }) => {
    return (
        <div className="p-5">
            <div className="flex">
                <h1 className="text-xl w-[50%] mb-3 text-Second_Color">
                    Generalist Class
                </h1>
                <p className="w-[40%] text-right text-xs">
                    Lorem ipsum odor amet, consectetuer adipiscing
                </p>
            </div>

            {/* cards class */}
            <div className="flex flex-col gap-5">
                {classes.map((classItem) => (
                    <CardClass
                        key={classItem.id}
                        title={classItem.title}
                        description={classItem.description}
                        price={classItem.is_free ? 0 : classItem.price}
                        rating={classItem.rating_class}
                        image="/image/mentors/mentor_sample.png" // Ganti jika sudah ada path image
                        categoryIcon={classItem.category_class}
                        mentorName={classItem.mentor?.name ?? "Unknown Mentor"}
                        isBestSeller={classItem.students_count > 50}
                        href={`/Detail-Class/${classItem.class_code}`}
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
};

export default GeneralClassesSection;
