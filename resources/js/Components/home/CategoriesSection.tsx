import React from "react";

export default function CategoriesSection() {
    return (
        <section className="w-full p-5 mb-5">
            <h1 className="text-xl w-[50%] mb-3 text-Second_Color">
                MORE CATEGORY MORE CRAFTING
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-[#6152A5] p-4 rounded shadow">
                    <img
                        src="/image/icons/design.svg"
                        alt="logo category edit"
                        className="w-10 mb-[130px]"
                    />
                    <h2 className="text-2xl mb-1 text-Fourt_Color">Design</h2>
                    <p className="text-xs text-Fourt_Color">
                        Kuasai industri kreatif visual dan berkarir dibidang
                        design dengan tambahan bekal AI
                    </p>
                </div>
                <div className="bg-[#C258AE] p-4 rounded shadow">
                    <img
                        src="/image/icons/photo.svg"
                        alt="logo category edit"
                        className="w-10 mb-[130px]"
                    />
                    <h2 className="text-2xl mb-1 text-Fourt_Color">
                        Photography
                    </h2>
                    <p className="text-xs text-Fourt_Color">
                        Kuasai dunia fotografi dan bangun karir di industri
                        visual dengan tambahan bekal AI.
                    </p>
                </div>
                <div className="bg-[#88DE53] p-4 rounded shadow">
                    <img
                        src="/image/icons/design.svg"
                        alt="logo category edit"
                        className="w-10 mb-[130px]"
                    />
                    <h2 className="text-2xl mb-1 text-Fourt_Color">
                        Videography
                    </h2>
                    <p className="text-xs text-Fourt_Color">
                        Kuasai seni videografi dan bangun karir di industri
                        kreatif dengan tambahan bekal AI."
                    </p>
                </div>
                <div className="bg-[#7966CE] p-4 rounded shadow">
                    <img
                        src="/image/icons/design.svg"
                        alt="logo category edit"
                        className="w-10 mb-[130px]"
                    />
                    <h2 className="text-2xl mb-1 text-Fourt_Color">
                        UI/UX Design
                    </h2>
                    <p className="text-xs text-Fourt_Color">
                        Kuasai desain UI/UX dan dengan sentuhan AI untuk
                        pengalaman yang lebih inovatif
                    </p>
                </div>
            </div>
        </section>
    );
}
