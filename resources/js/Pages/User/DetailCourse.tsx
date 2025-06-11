import React from "react";
import Layout from "@/Layouts/AppLayout";
import { Button } from "@/Components/ui/button";
import { FaVideo, FaLaptop, FaInstagram } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { Input } from "@/Components/ui/input";
import { FaShoppingCart } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { FiCheck, FiCheckCircle } from "react-icons/fi";
import DescriptionClass from "@/Components/Detail-Class/DescriptionClass";
import ProfileMentor from "@/Components/Detail-Class/ProfileMentor";
import { Course } from "@/types/Course";
import { Label } from "@/Components/ui/label";
import { formatRupiah } from "@/utils/formatRupiah";
import { Link, router, usePage } from "@inertiajs/react";
import { User } from "@/types/Users";
import { toast } from "@/hooks/use-toast";
interface DetailCourseProps {
    course: Course;
}

interface DetailCourseProps {
    course: Course;
    auth: {
        user: User | null;
    };
}

function DetailCourse({ course, auth }: DetailCourseProps) {
    const handleEnrollFreeClass = (class_code: string) => {
        if (!auth.user) {
            if (typeof window !== "undefined") {
                window.location.href = "/login";
            }
            return null;
        }
        router.post(
            `/class/${class_code}/enrollment-free`,
            {},
            {
                preserveScroll: true,
                onSuccess: () => {
                    toast({
                        title: "Kelas berhasil diambil",
                        description: "Selamat kelas berhasil diambil",
                    });
                },
                onError: (errors: Errors) => {
                    const errorMessages = Object.values(errors)
                        .flat()
                        .join("\n");

                    toast({
                        title: "Terjadi Kesalahan",
                        description: errorMessages || "Mohon coba lagi nanti.",
                        variant: "destructive",
                    });
                },
            }
        );
    };

    return (
        <>
            <div className="px-3 flex flex-col md:flex-row-reverse gap-3 md:gap-0">
                {/* Card Profile Detail  */}
                <div className="w-full flex justify-center px-2 h-fit md:w-1/2 lg:w-[40%]">
                    <div className="max-x-md bg-Card_Color text-Sixth_Color rounded-xl shadow-sm mt-3">
                        <iframe
                            className="w-full h-64 sm:h-80 md:h-96 rounded-t-lg"
                            src={
                                course.video_preview_url?.replace(
                                    "watch?v=",
                                    "embed/"
                                ) + "?autoplay=1"
                            }
                            title="Course Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                        <div className="p-5 text-center flex flex-col justify-center items-center gap-3">
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-Sixth_Color text-center">
                                {course.is_free
                                    ? "Gratis "
                                    : `${formatRupiah(course.price)}.00`}
                                <span className="text-base font-medium">
                                    / orang
                                </span>
                            </h3>
                            {course.is_free ? (
                                <Button
                                    onClick={() =>
                                        handleEnrollFreeClass(course.class_code)
                                    }
                                    className="w-full px-7 py-5 text-lg font-semibold text-white bg-Base_Color hover:bg-opacity-90 transition duration-200 rounded-md shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                                >
                                    <FaShoppingCart className="text-xl" />
                                    Ambil Kelas
                                </Button>
                            ) : (
                                <Button className="w-full px-7 py-5 text-lg font-semibold text-white bg-Base_Color hover:bg-opacity-90 transition duration-200 rounded-md shadow-md hover:shadow-lg flex items-center justify-center gap-3">
                                    <FaShoppingCart className="text-xl" />
                                    beli Kelas
                                </Button>
                            )}
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

                        {/* Token container */}
                        <div className="w-[95%] max-w-md mx-auto p-6 border rounded-xl shadow-sm space-y-4 mt-4">
                            <div className="space-y-3">
                                <div>
                                    <Label
                                        className="text-2xl text-Second_Color"
                                        htmlFor="token"
                                    >
                                        Token Course{" "}
                                    </Label>
                                    <p>Get Discon from ou special Class</p>
                                </div>

                                <Input
                                    id="token"
                                    type="text"
                                    placeholder="Contoh: KLS-1234-ABCD"
                                    className="w-full text-Fourt_Color bg-white"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-Base_Color"
                            >
                                Verifikasi Token
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Deskripsi Detail Course */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-[60%]">
                    <DescriptionClass
                        title={course.title}
                        description={course.description}
                        rating={5}
                    />

                    {/* Benefit Learning */}
                    <div className="flex flex-col items-center md:items-start justify-center px-4 py-8 w-full">
                        <h1 className="text-3xl font-semibold mb-4 w-full max-w-xl text-Second_Color">
                            What you'll learn
                        </h1>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 list-none text-base text-Sixth_Color w-full max-w-xl">
                            {course.goals.map((goal, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 mt-2"
                                >
                                    <FiCheck className="text-green-500 mt-1" />
                                    <span>{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Requirement Tools */}
                    <div className="w-full">
                        <div className="flex flex-col items-center justify-center px-4 py-8 text-Sixth_Color">
                            <h1 className="text-3xl  font-semibold text-center md:text-left text-Second_Color mb-7 w-full max-w-xl">
                                Requirement Tools
                            </h1>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 w-full max-w-4xl list-none">
                                {course.requirements.map((item: string) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Course Content */}
                    <div className="w-full">
                        <Accordion
                            type="single"
                            collapsible
                            className="border border-Base_Color rounded-lg divide-none bg-transparent max-w-xl"
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
                    </div>

                    {/* Mentor Profile */}
                </div>
            </div>
            <div className="w-full p-3">
                <ProfileMentor
                    name={course.mentor.name}
                    role={course.mentor.category_class.category_class}
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
