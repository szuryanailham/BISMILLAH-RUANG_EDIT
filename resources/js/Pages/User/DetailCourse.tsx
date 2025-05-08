import React from "react";
import Layout from "@/Layouts/AppLayout";
import { Button } from "@/Components/ui/button";
import { FaVideo, FaLaptop, FaInstagram } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { FaShoppingCart } from "react-icons/fa";
import StarRating from "@/Components/StarRating";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { FiCheck, FiCheckCircle } from "react-icons/fi";
function DetailCourse() {
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
                            Rp49.000,00{" "}
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
                                    24 Video Lessons
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
                <div className="p-3 mt-5 space-y-2">
                    {/* title */}
                    <h1 className="text-2xl text-center font-bold">
                        Photoshop Mastering Become New Legend of Image
                        Manipulation{" "}
                    </h1>
                    {/* description */}
                    <p className="p-3 text-center font-light">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Leo
                        mus himenaeos ad; nascetur bibendum magna. Penatibus
                        sociosqu ante eros mollis platea massa erat suspendisse
                        lacus. Pretium aliquam hac orci lacinia aliquam erat
                    </p>
                    {/* rating  */}
                    <div className="flex items-center gap-3  justify-center item-center">
                        5.0
                        <StarRating value={5} />
                    </div>
                </div>
                {/* Benefit Learning */}
                <div className="flex flex-col items-center justify-center px-4 py-8">
                    <h1 className="text-3xl font-semibold text-center text-Second_Color mb-4 w-full max-w-xl">
                        What you'll learn
                    </h1>
                    <ul className="list-disc list-inside text-base text-gray-700">
                        <ul className="space-y-2 text-base text-Sixth_Color mt-4">
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-green-500 mt-3" />
                                Photoshop Basics: Understand the interface,
                                tools, and panels
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-green-500 mt-3" />
                                Layers and Adjustment Layers: Organize and
                                adjust images non-destructively.
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-green-500 mt-3" />
                                Photo Editing: Adjust color, contrast, and
                                exposure.
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-green-500 mt-3" />
                                Graphic Design: Create various designs like
                                posters, banners, and logos
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-green-500 mt-3" />
                                Selection and Masking: Separate objects from
                                backgrounds precisely.
                            </li>
                            <li className="flex items-start gap-2">
                                <FiCheck className="text-green-500 mt-3" />
                                Advanced Techniques: Retouching, photo
                                manipulation, animation, and web/print design.
                            </li>
                        </ul>
                    </ul>
                </div>
                {/*  Requirement Tools*/};
                <div className="flex flex-col items-center justify-center px-4 py-8 text-Sixth_Color ">
                    <h1 className="text-3xl font-semibold text-center text-Second_Color mb-7 w-full max-w-xl">
                        Requirement Tools
                    </h1>
                    <ul className="space-y-3 max-w-2xl">
                        <li className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Computer:</strong> A computer or laptop
                                with adequate specifications to run Adobe
                                Photoshop.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Operating System:</strong> Windows or
                                macOS.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Processor:</strong> Intel Core i3 or AMD
                                Ryzen 3 or higher.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>RAM:</strong> At least 8GB.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Storage:</strong> At least 20GB of free
                                space.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Software:</strong> Adobe Photoshop (the
                                latest version is recommended).
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                            <span>
                                <strong>Internet Connection:</strong> A stable
                                internet connection for accessing online
                                learning materials or attending virtual classes.
                            </span>
                        </li>
                    </ul>
                </div>
                {/* Deskripsi Course content */}
                <div>
                    <h1 className="text-3xl font-semibold text-center text-Second_Color mb-7 w-full max-w-xl">
                        Course Content
                    </h1>
                    <Accordion
                        type="single"
                        collapsible
                        className="border border-Base_Color rounded-lg divide-none bg-transparent"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="px-4 py-2 bg-transparent text-Sixth_Color">
                                Modul 1: Pengenalan Photoshop
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-2 text-Sixth_Color bg-transparent">
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="px-4 py-2 bg-transparent text-Sixth_Color">
                                Modul 2: Tools & Interface
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-2 text-Sixth_Color bg-transparent">
                                Belajar mengenal tools dasar dalam Photoshop.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="px-4 py-2 bg-transparent text-Sixth_Color">
                                Modul 3: Layers & Masking
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-2 text-Sixth_Color bg-transparent">
                                Teknik manipulasi gambar menggunakan layer dan
                                masking.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="px-4 py-2 bg-transparent text-Sixth_Color">
                                Modul 4: Export & Optimization
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-2 text-Sixth_Color bg-transparent">
                                Cara menyimpan dan mengoptimalkan file desain.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                {/* Deskripsi Detail Mentors */}
                <div>
                    <h1 className="text-3xl font-semibold text-center text-Second_Color mb-7 w-full max-w-xl mt-5 mx-auto">
                        Profile Mentor
                    </h1>

                    <div className="bg-Base_Color w-full max-w-4xl mx-auto p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-6">
                        {/* Image */}
                        <img
                            src="/image/mentors/mentor_sample.png" // Ganti dengan path gambar mentor kamu
                            alt="Mentor Profile"
                            className="w-28 h-28 rounded-full object-cover shadow-lg"
                        />

                        {/* Info */}
                        <div className="text-white space-y-3 text-center md:text-left">
                            <div>
                                <h2 className="text-2xl font-semibold">
                                    Ilham Suryana
                                </h2>
                                <p className="text-sm text-gray-200">
                                    Creative Digital Specialist
                                </p>
                            </div>

                            <p className="text-sm text-gray-100">
                                Ilham memiliki pengalaman lebih dari 5 tahun di
                                bidang desain grafis dan digital imaging. Saat
                                ini aktif mengajar di beberapa platform edukasi
                                dan bekerja sebagai konsultan brand visual.
                            </p>

                            <a
                                href="https://instagram.com/ilham.suryana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-white hover:text-gray-200 transition"
                            >
                                {/* instagram Logo */}
                                <FaInstagram className="text-2xl" />
                                @ilham.suryana
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
DetailCourse.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default DetailCourse;
