import React from "react";
import Layout from "@/Layouts/AppLayout";
import { Button } from "@/Components/ui/button";
import { FaVideo, FaLaptop, FaInstagram } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { FaShoppingCart } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { FiCheck, FiCheckCircle } from "react-icons/fi";
import DescriptionClass from "@/Components/Detail-Class/DescriptionClass";
import RequirtmentTools from "@/Components/Detail-Class/RequirtmentTools";
import ProfileMentor from "@/Components/Detail-Class/ProfileMentor";
import { Course } from "@/types/Course";

interface DetailCourseProps {
    course: Course;
}

function DetailCourse({ course }: DetailCourseProps) {
    console.log(course);
    return (
        <>
            <div className="px-3">
                {/* Card Profile Detail  */}
                <div className="max-w-sm bg-Card_Color text-Sixth_Color rounded-xl shadow-sm mt-3">
                    <iframe
                        className="w-full h-64 sm:h-80 md:h-96"
                        src="https://www.youtube.com/embed/5yx6BWlEVcY"
                        title="Course Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="p-5 text-center flex flex-col justify-center items-center gap-3">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-Sixth_Color text-center">
                            Rp{course.price.toLocaleString("id-ID")},00{" "}
                            <span className="text-base font-medium">
                                / orang
                            </span>
                        </h3>
                        <Button className="w-full px-7 py-5 text-lg font-semibold text-white bg-Base_Color hover:bg-opacity-90 transition duration-200 rounded-md shadow-md hover:shadow-lg flex items-center justify-center gap-3">
                            <FaShoppingCart className="text-xl" />
                            Beli Kelas
                        </Button>
                    </div>
                    <div className="w-full px-5">
                        <h3 className="text-2xl mb-3">Course Include</h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-[80%] mx-auto mt-5">
                            {/* Video lesson */}
                            <div className="flex items-center gap-3">
                                <FaVideo className="text-xl text-Base_Color" />
                                <p className="font-thin text-sm">
                                    {course.total_videos} Video Lessons
                                </p>
                            </div>

                            {/* Access information */}
                            <div className="flex items-center gap-3">
                                <FaLaptop className="text-2xl text-Base_Color" />
                                <p className="font-thin text-sm">
                                    Access on Desktop, Tablet, Mobile
                                </p>
                            </div>

                            {/* Lifetime access */}
                            <div className="flex items-center gap-3">
                                <MdAccessTime className="text-2xl text-Base_Color" />
                                <p className="font-thin text-sm">
                                    Full Lifetime Access
                                </p>
                            </div>

                            {/* Certificate */}
                            <div className="flex items-center gap-3">
                                <PiCertificateLight className="text-3xl text-Base_Color" />
                                <p className="font-thin text-sm">
                                    Certificate of Completion (soon)
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* token container */}
                    <div className="w-[95%] max-w-md mx-auto mt-30 p-6 border rounded-xl shadow-sm space-y-4 mt-4">
                        <div className="space-y-3">
                            <div>
                                <Label
                                    className="text-2xl text-Second_Color"
                                    htmlFor="token"
                                >
                                    Token Course{" "}
                                </Label>
                                <p className="">
                                    Get Discon from ou special Class
                                </p>
                            </div>

                            <Input
                                id="token"
                                type="text"
                                placeholder="Contoh: KLS-1234-ABCD"
                                className="w-full text-Fourt_Color bg-white"
                            />
                        </div>

                        <Button type="submit" className="w-full bg-Base_Color">
                            Verifikasi Token
                        </Button>
                    </div>
                </div>
                {/* Deskripsi Detail Couse */}
                <DescriptionClass
                    title={course.title}
                    description={course.description}
                    rating={5}
                />
                {/* Benefit Learning */}
                <div className="flex flex-col items-center justify-center px-4 py-8">
                    <h1 className="text-3xl font-semibold text-center text-Second_Color mb-4 w-full max-w-xl">
                        What you'll learn
                    </h1>
                    <ul className="list-disc list-inside text-base text-Sixth_Color ">
                        {course.goals.map((goal: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 mt-2">
                                <FiCheck className="text-green-500 mt-1" />
                                <span>{goal}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/*  Requirement Tools*/}
                <RequirtmentTools items={course.requirements} />
                {/* Deskripsi Course content */}
                <Accordion
                    type="single"
                    collapsible
                    className="border border-Base_Color rounded-lg divide-none bg-transparent"
                >
                    {course.materials.map((material, index) => (
                        <AccordionItem
                            key={material.id}
                            value={`item-${index}`}
                        >
                            <AccordionTrigger className="px-4 py-2 bg-transparent text-Sixth_Color">
                                Modul {index + 1}: {material.title}
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-2 text-Sixth_Color bg-transparent">
                                {material.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                {/* Deskripsi Detail Mentors */}
                <ProfileMentor
                    name={course.mentor.name}
                    role={course.mentor.specialist}
                    description={course.mentor.description}
                    photo={course.mentor.photo}
                    instagram={course.mentor.instagram_link}
                />
            </div>
        </>
    );
}
DetailCourse.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default DetailCourse;
