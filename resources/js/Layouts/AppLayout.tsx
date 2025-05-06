import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { Button } from "@/Components/ui/button";

export default function AppLayouts({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-Fourt_Color text-white ">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-Fourt_Color text-white drop-shadow-lg py-1">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        {/* logo icon */}
                        <h1 className="text-xl font-semibold">
                            RUANG <span className="text-Base_Color">EDIT</span>
                        </h1>
                        {/* Login button */}
                        <Button
                            variant="outline"
                            className="border-Base_Color text-Base_Color hover:bg-Base_Color hover:text-white bg-transparent px-7"
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </header>
            {/* Spacer to offset fixed header */}
            <div className="h-[84px]" />{" "}
            {/* Ubah sesuai tinggi header jika perlu */}
            <main>{children}</main>
        </div>
    );
}
