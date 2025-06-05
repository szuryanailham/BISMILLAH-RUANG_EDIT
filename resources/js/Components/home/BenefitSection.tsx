import { Dot } from "lucide-react";

export default function BenefitSection(): JSX.Element {
    const benefits = [
        "Mentor Berkompeten",
        "Fleksibilitas Belajar",
        "Bersertifikat (soon)",
        "Akses Selamanya",
        "Meet with Mentoring (soon)",
        "Tidak Butuh Penyimpanan",
        "Challenge Mingguan (soon)",
        "Materi Update",
        "Real Komunitas",
    ];

    return (
        <section className="px-4 py-6 sm:px-6 md:px-12 lg:px-20 font-normal">
            {/* Judul Section */}
            <h1 className="text-Second_Color text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center md:text-left">
                LET’S JOIN US, GET MORE BENEFIT
            </h1>

            {/* Flex wrap container */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 w-[45%] sm:w-[30%] md:w-[28%] lg:w-[22%] max-w-xs"
                    >
                        <Dot className="mt-1 shrink-0" />
                        <span className="text-sm sm:text-base leading-relaxed">
                            {benefit}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
