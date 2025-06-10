import React from "react";
import { Link } from "@inertiajs/react";
import CardClass from "../CardClass";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { ClassModel } from "@/types/ClassModel";

/**
 * Props untuk komponen BeginnerClassesSection
 */
interface Props {
    classes: ClassModel[];
}

/**
 * BeginnerClassesSection Component
 *
 * Menampilkan daftar kelas generalist dengan informasi singkat dan tombol navigasi ke halaman semua kelas.
 *
 * Fitur utama:
 * - Header dengan judul dan deskripsi singkat
 * - Daftar kartu kelas dengan data dinamis dari props `classes`
 * - Tombol untuk menelusuri seluruh kelas
 *

 */
const BeginnerClassesSection: React.FC<Props> = ({ classes }) => {
    console.log(classes);
    return (
        <section className="px-5 mt-10">
            {/* Header Section */}
            <header className="mb-3 flex justify-between">
                <h1 className="text-Second_Color text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">
                    Beginner Class
                </h1>
                <p className="w-[40%] text-right text-xs md:text-xl">
                    Lorem ipsum odor amet, consectetuer adipiscing
                </p>
            </header>

            {/* List Semua Kelas */}
            <div className="flex flex-col md:flex-row gap-2">
                {classes.map((item) => (
                    <CardClass
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.is_free ? 0 : item.price}
                        rating={item.rating_class}
                        image={item.poster_image}
                        categoryIcon={
                            item.category_class?.category_class ??
                            "Default Category"
                        }
                        mentorName={item.mentor?.name ?? "Unknown Mentor"}
                        isBestSeller={item.students_count > 50} // Tandai best seller jika siswa > 50
                        href={`/classes/${item.slug}`} // Link ke halaman detail kelas
                    />
                ))}
            </div>

            {/* Tombol Untuk Menelusuri Semua Kelas */}
            <div className="mt-7 flex justify-center">
                <Link href="/classes">
                    <Button
                        variant="outline"
                        className="rounded-xl border-Base_Color bg-transparent px-5 py-6 text-Base_Color hover:bg-Base_Color hover:text-white"
                    >
                        Telusuri Kelas
                        <MoveRight className="ml-2" />
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default BeginnerClassesSection;
