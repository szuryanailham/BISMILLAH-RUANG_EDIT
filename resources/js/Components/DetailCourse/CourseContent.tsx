import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/Components/ui/accordion";
import { DetailCourse } from "@/types/DetailCourse";

type CourseContentProps = {
    materials: DetailCourse[];
};

function CourseContent({ materials }: CourseContentProps) {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center text-Second_Color mb-7 w-full max-w-xl">
                Course Content
            </h1>

            <Accordion
                type="single"
                collapsible
                className="border border-Base_Color rounded-lg bg-transparent"
            >
                {materials.map((material, index) => (
                    <AccordionItem
                        key={material.id}
                        value={`item-${index + 1}`}
                    >
                        <AccordionTrigger className="px-4 py-2 bg-transparent text-Sixth_Color">
                            {material.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-Sixth_Color bg-transparent">
                            {material.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default CourseContent;
