import React, { useEffect } from "react";
import Layout from "@/Layouts/AppLayout";
import { Button } from "@/Components/ui/button";
import { BsFiletypePdf } from "react-icons/bs";
import { FaRegPlayCircle } from "react-icons/fa";
import { ClassData, Material } from "@/types/LearningPage";
import useActiveMaterial from "@/stores/useActiveMaterial";
import DescriptionClass from "@/Components/Detail-Class/DescriptionClass";
import RequirtmentTools from "@/Components/Detail-Class/RequirtmentTools";
import ProfileMentor from "@/Components/Detail-Class/ProfileMentor";
interface Props {
    class: ClassData;
    materials: Material[];
}

function LearningPageClass({ class: classData, materials }: Props) {
    const { activeMaterial, setActiveMaterial } = useActiveMaterial();

    // Set materi pertama saat awal load
    useEffect(() => {
        if (materials.length > 0 && !activeMaterial) {
            setActiveMaterial(materials[0]);
        }
    }, [materials, activeMaterial, setActiveMaterial]);

    return (
        <div className="p-3">
            {/*================ Learning Course Class ====================== */}
            <div className="w-full h-full space-y-4">
                <h1 className="text-2xl font-bold">
                    {activeMaterial ? activeMaterial.title : classData.title}
                </h1>

                {/* Video */}
                {/* {activeMaterial?.video_url ? (
                    <iframe
                        className="w-full h-64 sm:h-80 md:h-96 rounded-xl"
                        src={activeMaterial.video_url}
                        title="Course Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl bg-gray-100 flex items-center justify-center">
                        <p className="text-gray-500">Video tidak tersedia</p>
                    </div>
                )} */}

                <iframe
                    className="w-full h-64 sm:h-80 md:h-96 rounded-xl"
                    src="https://www.youtube.com/embed/xTzvQkOll2U?list=PLLlSBGLVsEPIFGSGw2zJ2K43V5vxMMMTE"
                    title="Course Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                {/* Deskripsi */}
                <p className="font-light px-2">
                    {activeMaterial?.description ?? classData.description}
                </p>

                {/* Download */}
                {activeMaterial?.pdf_url && (
                    <div className="w-full flex justify-center p-2 mt-7">
                        <a
                            href={activeMaterial.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="border border-Base_Color bg-transparent font-normal">
                                Download Materi
                                <BsFiletypePdf className="text-4xl ml-2" />
                            </Button>
                        </a>
                    </div>
                )}
            </div>

            {/*================ List Materi ====================== */}
            <div className="w-full mt-6 p-2 flex flex-col gap-3">
                {materials.map((material, index) => (
                    <Button
                        key={material.id}
                        onClick={() => setActiveMaterial(material)}
                        className={`w-full border py-5 flex justify-between items-center ${
                            activeMaterial?.id === material.id
                                ? "bg-Base_Color text-white"
                                : "bg-transparent border-Base_Color"
                        }`}
                    >
                        <span className="flex-1 truncate text-left">
                            {index + 1}. {material.title}
                        </span>
                        <FaRegPlayCircle className="ml-4 flex-shrink-0" />
                    </Button>
                ))}
            </div>

            {/*================ Deskripsi Kelas ====================== */}
            <DescriptionClass
                title={classData.title}
                description={classData.description}
                rating={5}
            />
            <RequirtmentTools items={classData.requirements} />
            <ProfileMentor
                name={classData.mentor.name}
                role={classData.mentor.specialist}
                description={classData.mentor.description}
                photo={classData.mentor.photo}
                instagram={classData.mentor.instagram_link}
            />
        </div>
    );
}

LearningPageClass.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default LearningPageClass;
