import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import CardClass from "@/Components/CardClass";
import Layout from "@/Layouts/AppLayout";

/**
 * Komponen ListClasses
 * Menampilkan kolom pencarian dan daftar kelas dalam bentuk kartu.
 */
function ListClasses() {
    return (
        <div className="p-3">
            {/* 🔍 Section: Search Input dan Tombol */}
            <div className="flex w-full max-w-sm items-center space-x-3">
                <Input type="text" placeholder="Cari Kelas..." />
                <Button className="bg-Base_Color" type="submit">
                    Search
                </Button>
            </div>

            {/* 🧾 Section: Daftar Kelas (CardClass) */}
            <div className="mt-10 flex flex-wrap gap-5">
                {/* Kartu Kelas #1 */}
                <CardClass
                    title="Photoshop Mastering Become New Legend of Manipulation"
                    description="Here are the biggest enterprise technology acquisitions of 2021 so far."
                    price={0}
                    rating={4.5}
                    image="/image/mentors/mentor_sample.png"
                    categoryIcon="Photoshop"
                    mentorName="Salsa Julianj P"
                    isBestSeller
                    href="/detail-class/"
                />

                {/* Kartu Kelas #2 */}
                <CardClass
                    title="Photoshop Mastering Become New Legend of Manipulation"
                    description="Here are the biggest enterprise technology acquisitions of 2021 so far."
                    price={0}
                    rating={4.5}
                    image="/image/mentors/mentor_sample.png"
                    categoryIcon="Photoshop"
                    mentorName="Salsa Julianj P"
                    isBestSeller
                    href="/detail-class/"
                />
            </div>
        </div>
    );
}
ListClasses.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default ListClasses;
