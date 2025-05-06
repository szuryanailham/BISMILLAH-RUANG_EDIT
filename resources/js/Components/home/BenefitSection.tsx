import { Dot } from "lucide-react";
import React from "react";
function BenefitSection() {
    return (
        <section className="font-normal text-2xl mt-5 px-5 py-3 mb-5 ">
            {/* title */}
            <h1 className="w-[50%] mb-5 text-Second_Color">
                LET’S JOIN US, GET MORE BENEFIT
            </h1>
            {/* section */}
            <div className="flex flex-wrap items-cente mt-3">
                <div className="w-[50%]">
                    <ul>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Mentor Berkompeten</p>
                        </li>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Fleksibilitas Belajar</p>
                        </li>
                        <li className="flex items-center ">
                            <Dot className="text-md mt-2" />
                            <p className="text-sm">Bersertifikat (soon)</p>
                        </li>
                    </ul>
                </div>
                <div className="w-[50%]">
                    <li className="flex items-center ">
                        <Dot className="text-md mt-2" />
                        <p className="text-sm">Akses Selamanya</p>
                    </li>
                    <li className="flex items-center ">
                        <Dot className="text-md mt-2" />
                        <p className="text-sm">Meet with Mentoring( soon )</p>
                    </li>
                    <li className="flex items-center ">
                        <Dot className="text-md mt-2" />
                        <p className="text-sm">Tidak Butuh Penyimpanan</p>
                    </li>
                </div>
                <div className="w-[50%] mx-auto mt-2">
                    <li className="flex items-center ">
                        <Dot className="text-md mt-2" />
                        <p className="text-sm">Chellenge mingguan ( soon )</p>
                    </li>
                    <li className="flex items-center ">
                        <Dot className="text-md mt-2" />
                        <p className="text-sm">Materi Update</p>
                    </li>
                    <li className="flex items-center ">
                        <Dot className="text-md mt-2" />
                        <p className="text-sm">Real Komunitas</p>
                    </li>
                </div>
            </div>
        </section>
    );
}

export default BenefitSection;
