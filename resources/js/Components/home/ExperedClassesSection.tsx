import React from "react";
import { Button } from "../ui/button";
import CardClass from "../CardClass";
import { MoveRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { ClassModel } from "@/types/ClassModel"; // Pastikan path-nya sesuai

interface Props {
    classes: ClassModel[];
}
/**
 * ExperedClassesSection Component
 * Menampilkan daftar kelas dengan tipe Expert.
 * Setiap kelas ditampilkan dalam bentuk kartu menggunakan komponen CardClass.
 * Terdapat juga tombol navigasi untuk melihat semua kelas.
 *
 * @param {Props} props - Properti yang diterima komponen, berupa array kelas
 * @returns JSX Element - Tampilan section kelas expert
 */

function ExperedClassesSection({ classes }: Props) {
    return (
        <div className="px-5 mt-10">
            {/* Header Section: Judul dan deskripsi singkat */}
            <div className="flex">
                <h1 className="text-xl w-[50%] mb-3 text-Second_Color">
                    Expert Class
                </h1>
                <p className="w-[40%] text-right text-xs">
                    Lorem ipsum odor amet, consectetuer adipiscing
                </p>
            </div>

            {/* Daftar kartu kelas */}
            <div className="flex flex-col gap-2">
                {classes.map((item) => (
                    <CardClass
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        rating={item.rating_class}
                        image="/image/mentors/mentor_sample.png" // Ganti jika ada gambar mentor spesifik
                        categoryIcon={
                            item.category_class?.category_class ??
                            "Default Category"
                        }
                        mentorName={item.mentor?.name ?? "Unknown Mentor"}
                        isBestSeller={item.students_count > 50} // Tandai best seller jika siswa > 50
                        href={`/detail-class/${item.id}`} // Link ke halaman detail kelas
                    />
                ))}
            </div>

            {/* Tombol untuk menavigasi ke halaman semua kelas */}
            <div className="flex justify-center">
                <Link href={"/All-Classes"}>
                    <Button
                        variant="outline"
                        className="border-Base_Color text-Base_Color hover:bg-Base_Color hover:text-white bg-transparent px-5 py-6 rounded-xl mt-7 text-center"
                    >
                        Telusuri Kelas
                        <MoveRight />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ExperedClassesSection;
