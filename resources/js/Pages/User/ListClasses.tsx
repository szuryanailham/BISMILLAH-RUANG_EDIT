import React from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import CardClass from "@/Components/CardClass";
function ListClasses() {
    return (
        <>
            <div className="p-3">
                {/* Search Section */}
                <div className="flex w-full max-w-sm items-center space-x-3">
                    <Input
                        type="text"
                        className=""
                        placeholder="Cari Kelas..."
                    />
                    <Button className="bg-Base_Color" type="submit">
                        Search
                    </Button>
                </div>
                {/* Container Result Class */}
                <div className="mt-10 flex flex-wrap gap-5">
                    <CardClass
                        title="Photoshop Mastering Become New Legend of Manipulation"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far."
                        price={0}
                        rating={4.5}
                        image="/image/mentors/mentor_sample.png"
                        categoryIcon="Photoshop"
                        mentorName="Salsa Julianj P"
                        isBestSeller
                        href="/Detail-Class"
                    />
                    <CardClass
                        title="Photoshop Mastering Become New Legend of Manipulation"
                        description="Here are the biggest enterprise technology acquisitions of 2021 so far."
                        price={0}
                        rating={4.5}
                        image="/image/mentors/mentor_sample.png"
                        categoryIcon="Photoshop"
                        mentorName="Salsa Julianj P"
                        isBestSeller
                        href="/Detail-Class"
                    />
                </div>
            </div>
        </>
    );
}

export default ListClasses;
