import React, { useEffect, useState } from "react";
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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (materials.length > 0 && !activeMaterial) {
            setActiveMaterial(materials[0]);
        }
    }, [materials, activeMaterial, setActiveMaterial]);

    const handleMaterialClick = (material: Material) => {
        setIsLoading(true);
        setTimeout(() => {
            setActiveMaterial(material);
            setIsLoading(false);
        }, 1000); // efek loading 1 detik
    };

    return (
        <div className="p-3">
            {/*================ Learning Course Class ====================== */}
            <div className="w-full h-full space-y-4 flex flex-col md:flex-row-reverse gap-5">
                {/*================ Video & Deskripsi ====================== */}
                <div className="md:w-[60%] px-5 space-y-4">
                    <h1 className="text-2xl font-bold">
                        {activeMaterial?.title ?? classData.title}
                    </h1>

                    {isLoading ? (
                        // loading effect
                        <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl bg-gray-200 animate-pulse" />
                    ) : activeMaterial?.embed_url ? (
                        <iframe
                            className="w-full h-64 sm:h-80 md:h-96 rounded-xl"
                            src={activeMaterial.embed_url}
                            title="Course Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl bg-gray-100 flex items-center justify-center">
                            <p className="text-gray-500">
                                Video tidak tersedia
                            </p>
                        </div>
                    )}

                    <p className="font-light px-2">
                        {activeMaterial?.description ?? classData.description}
                    </p>

                    {/*================ Download PDF ====================== */}
                    {!isLoading && activeMaterial?.pdf_url && (
                        <div className="w-full flex justify-center p-2 mt-7">
                            <a
                                href={`/storage/${activeMaterial.pdf_url}`}
                                download // <- ini kuncinya
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
                <div className="w-full mt-6 p-2 flex flex-col gap-3 md:w-[40%]">
                    <h1 className="text-2xl font-bold">Daftar Materi</h1>
                    {materials.map((material, index) => (
                        <Button
                            key={material.id}
                            onClick={() => handleMaterialClick(material)}
                            className={`w-full border py-5 flex justify-between items-center ${
                                activeMaterial?.id === material.id
                                    ? "bg-Base_Color text-white"
                                    : "bg-transparent border-Base_Color"
                            }`}
                            disabled={isLoading}
                        >
                            <span className="flex-1 truncate text-left">
                                {index + 1}. {material.title}
                            </span>
                            <FaRegPlayCircle className="ml-4 flex-shrink-0" />
                        </Button>
                    ))}
                </div>
            </div>

            {/*================ Deskripsi Kelas, Requirement, Mentor ====================== */}
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <DescriptionClass
                        title={classData.title}
                        description={classData.description}
                        rating={5}
                    />
                </div>
                <div className="md:w-1/2">
                    <ProfileMentor
                        name={classData.mentor.name}
                        role={classData.mentor.specialist}
                        description={classData.mentor.description}
                        photo={classData.mentor.photo}
                        instagram={classData.mentor.instagram_link}
                    />
                </div>
            </div>
        </div>
    );
}

LearningPageClass.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default LearningPageClass;
