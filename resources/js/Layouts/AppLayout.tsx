import { PropsWithChildren } from "react";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogTrigger } from "@/Components/ui/dialog";
import { useAuthDialog } from "@/stores/useAuthDialog";
import DialogRegister from "@/Components/auth/DialogRegister";
import DialogLogin from "@/Components/auth/DialogLogin";
import { Link } from "@inertiajs/react";

/**
 * AppLayouts Component
 *
 * Layout utama untuk aplikasi Ruang Edit.
 * Menyediakan struktur dasar halaman dengan header, footer, dan dialog login/register.
 */
export default function AppLayouts({ children }: PropsWithChildren) {
    const { isRegister, openLogin, openRegister } = useAuthDialog();

    return (
        <div className="min-h-screen bg-Fourt_Color text-white">
            {/* Header tetap di atas layar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-Fourt_Color text-white drop-shadow-lg py-1">
                <Dialog
                    onOpenChange={(isOpen) => {
                        if (!isOpen) {
                            openLogin(); // Reset ke login form saat dialog ditutup
                        }
                    }}
                >
                    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-4">
                        <div className="flex justify-between items-center">
                            {/* Logo / Brand */}
                            <Link href="/">
                                <h1 className="text-xl font-semibold">
                                    RUANG{" "}
                                    <span className="text-Base_Color">
                                        EDIT
                                    </span>
                                </h1>
                            </Link>

                            {/* Tombol Login */}
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="border-Base_Color text-Base_Color hover:bg-Base_Color hover:text-white bg-transparent px-7"
                                >
                                    Login
                                </Button>
                            </DialogTrigger>
                        </div>
                    </div>

                    {/* Menampilkan form Login atau Register */}
                    {!isRegister ? <DialogLogin /> : <DialogRegister />}
                </Dialog>
            </header>

            {/* Spacer untuk menghindari konten tertutup header */}
            <div className="h-[84px]" />

            {/* Konten utama */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="p-2 text-center">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025{" "}
                    <a href="#" className="hover:underline">
                        Suryana_dev™
                    </a>
                    . All Rights Reserved.
                </span>
            </footer>
        </div>
    );
}
