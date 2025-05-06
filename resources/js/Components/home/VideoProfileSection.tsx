import React from "react";

export default function () {
    return (
        <div className="w-full bg-Base_Color ">
            {/* video profile */}
            <iframe
                className="aspect-video w-full h-[300px] p-2 rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            ></iframe>
            {/* title */}
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-center text-3xl p-2 pt-5 w-[80%] font-black">
                    GROW YOUR <span className="text-Second_Color">SKILLS </span>{" "}
                    AND <span className="text-Second_Color">UNLEASH</span> YOUR
                    CRAFT
                </h1>
                <p className="text-center px-7 py-1 font-light pb-5">
                    Ruang Edit menyediakan platform terbaik bagi para
                    kreator.Dengan berbagai kursus dan tutorial desain visual,
                    kami membantu Anda mengasah keterampilan kreatif dan
                    menciptakan karya yang memukau.
                </p>
            </div>
        </div>
    );
}
