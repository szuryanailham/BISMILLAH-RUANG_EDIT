import React from "react";
import { FaInstagram } from "react-icons/fa6";

type MentorProfileProps = {
    name: string;
    description: string;
    role: string;
    photo: string;
    instagram: string;
};

export default function ProfileMentor({
    name,
    description,
    role,
    photo,
    instagram,
}: MentorProfileProps) {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center text-Second_Color mb-7 w-full max-w-xl mt-5 mx-auto">
                Profile Mentor
            </h1>

            <div className="bg-Base_Color w-full max-w-4xl mx-auto p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-6">
                {/* Image */}
                <img
                    src={photo}
                    alt={`Foto ${name}`}
                    className="w-28 h-28 rounded-full object-cover shadow-lg"
                />

                {/* Info */}
                <div className="text-white space-y-3 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p className="text-sm text-gray-200">{role}</p>
                    </div>

                    <p className="text-sm text-gray-100">{description}</p>

                    <a
                        href={instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white hover:text-gray-200 transition"
                    >
                        <FaInstagram className="text-2xl" />
                        @{instagram.split("https://instagram.com/")[1]}
                    </a>
                </div>
            </div>
        </div>
    );
}
