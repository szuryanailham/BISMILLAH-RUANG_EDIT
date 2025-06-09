import React from "react";
import Layout from "@/Layouts/AppLayout";
import { ClassModel } from "@/types/ClassModel";
import CardClass from "@/Components/CardClass";

interface Props {
    classes: ClassModel[];
}

const MyClassUser = ({ classes }: Props) => {
    return (
        <div className="px-4 py-10 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-Second_Color text-center mb-6">
                My Class
            </h1>

            {classes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                    {classes.map((classItem) => (
                        <CardClass
                            key={classItem.id}
                            title={classItem.title}
                            description={classItem.description}
                            price={classItem.is_free ? 0 : classItem.price}
                            rating={classItem.rating_class}
                            image={classItem.poster_image}
                            categoryIcon={
                                classItem.category_class?.category_class ??
                                "Default Category"
                            }
                            mentorName={
                                classItem.mentor?.name ?? "Unknown Mentor"
                            }
                            isBestSeller={classItem.students_count > 50}
                            href={`/classes/${classItem.slug}`}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-20">
                    Kamu belum memiliki kelas saat ini.
                </p>
            )}
        </div>
    );
};

// Jika kamu menggunakan setup `PageWithLayout` custom, gunakan tipe seperti ini:
// const MyClassUser: PageWithLayout<Props> = ({ classes }) => { ... }
// Tapi jika belum, kamu bisa langsung set layout seperti di bawah:

MyClassUser.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default MyClassUser;
