import React from "react";
import Layout from "@/Layouts/AppLayout";
import { Button } from "@/Components/ui/button";
import { BsFiletypePdf } from "react-icons/bs";
import { FaRegPlayCircle } from "react-icons/fa";
import RequirtmentTools from "@/Components/DetailCourse/RequirtmentTools";
import ProfileMentor from "@/Components/DetailCourse/ProfileMentor";
import DescriptionClass from "@/Components/DetailCourse/DescriptionClass";
function LearningPageClass() {
    return (
        <div className="p-3">
            {/*================ Learning Course Class ====================== */}
            <div className="w-full h-full space-y-4">
                {/* title Course */}
                <h1 className="text-2xl">
                    Photoshop Mastering Become New Legend of Image Manipulation{" "}
                </h1>
                {/* Container video */}
                <iframe
                    className="w-full h-64 sm:h-80 md:h-96rounded-xl"
                    src="https://www.youtube.com/embed/5yx6BWlEVcY"
                    title="Course Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="">
                    {/* Deskription */}
                    <p className="font-light px-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsam magni hic saepe, recusandae, impedit
                        pariatur laborum veniam adipisci praesentium
                        exercitationem porro qui quo, corporis nemo labore quia
                        repellendus dolores libero
                    </p>
                    {/* donwloand Materi PDF */}
                    <div className="w-full flex justify-center p-2 mt-7">
                        <Button className="border border-Base_Color bg-transparent font-normal">
                            Download Materi
                            <BsFiletypePdf className="text-4xl" />
                        </Button>
                    </div>
                </div>
            </div>
            {/*================ list Course  ====================== */}
            <div className="w-full mt-2 p-2 flex flex-col gap-3">
                {/* lesson one */}
                <Button className="w-full bg-transpart border border-Base_Color py-5 flex justify-between">
                    1.Pengenalan Photoshop
                    <FaRegPlayCircle />
                </Button>
                {/* lesson two */}
                <Button className="w-full bg-transpart border border-Base_Color py-5 flex justify-between">
                    2.Pengenalan Layouts Photoshop
                    <FaRegPlayCircle />
                </Button>
                <Button className="w-full bg-transpart border border-Base_Color py-5 flex justify-between">
                    2.Pengenalan Layouts Photoshop
                    <FaRegPlayCircle />
                </Button>
            </div>
            {/*================ list Course  ====================== */}
            <DescriptionClass />
            <RequirtmentTools />
            <ProfileMentor />
        </div>
    );
}
LearningPageClass.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default LearningPageClass;
