import { PropsWithChildren, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogTrigger } from "@/Components/ui/dialog";
import { useAuthDialog } from "@/stores/useAuthDialog";
import DialogRegister from "@/Components/auth/DialogRegister";
import DialogLogin from "@/Components/auth/DialogLogin";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

toast;
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/Components/ui/menubar";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/Components/ui/toaster";
/**
 * AppLayouts Component
 *
 * Layout utama untuk aplikasi Ruang Edit.
 * Menyediakan struktur dasar halaman dengan header, footer, dan dialog login/register.
 */
export default function AppLayouts({ children }: PropsWithChildren) {
    const { isRegister, openLogin, isOpen } = useAuthDialog();
    const { props } = usePage();
    const { auth } = usePage().props as {
        auth: {
            user: {
                name: string;
                profile_photo_url?: string;
            };
        };
    };
    const firstName = auth?.user?.name?.split(" ")[0];
    const photoUrl =
        auth?.user?.profile_photo_url ?? "https://github.com/shadcn.png";
    const user = props.auth?.user;

    useEffect(() => {
        if (props.toast && typeof props.toast === "object") {
            toast({
                title: props.toast.title,
                description: props.toast.description,
                variant: props.toast.variant ?? "default",
            });
        }
    }, [props.toast]);

    return (
        <div className="min-h-screen bg-Fourt_Color text-white">
            {/* Header tetap di atas layar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-Fourt_Color text-white drop-shadow-lg py-1">
                <Dialog
                    onOpenChange={(isOpen) => {
                        if (!isOpen) {
                            openLogin();
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
                            {user ? (
                                // Jika sudah login, tampilkan Profile (bisa diarahkan ke /profile atau halaman dashboard user)
                                <Menubar className="bg-transparent border-none">
                                    <MenubarMenu>
                                        <MenubarTrigger asChild>
                                            <div
                                                className="cursor-pointer border border-Base_Color px-4 py-2 rounded-md text-Base_Color 
                                                 hover:bg-Base_Color hover:text-white flex items-center gap-2 transition-colors 
                                                      bg-transparent data-[state=open]:bg-Base_Color data-[state=open]:text-white"
                                            >
                                                <span className="text-sm font-medium">
                                                    {firstName}
                                                </span>
                                                <img
                                                    src={photoUrl}
                                                    alt="User Avatar"
                                                    className="w-7 h-7 rounded-full object-cover"
                                                />
                                            </div>
                                        </MenubarTrigger>

                                        <MenubarContent
                                            align="end"
                                            className="bg-Fourt_Color text-Sixth_Color shadow-lg rounded-md py-2 w-40"
                                        >
                                            {/* Hanya untuk admin */}
                                            {user?.status === "admin" && (
                                                <MenubarItem asChild>
                                                    <Link
                                                        href="/dashboard"
                                                        className="px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                                                    >
                                                        Dashboard (Admin)
                                                    </Link>
                                                </MenubarItem>
                                            )}

                                            {/* Umum untuk semua user */}
                                            <MenubarItem asChild>
                                                <Link
                                                    href="/my-classes"
                                                    className="px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                                                >
                                                    My Class
                                                </Link>
                                            </MenubarItem>

                                            <MenubarItem asChild>
                                                <Link
                                                    href="/edit-profile"
                                                    className="px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                                                >
                                                    Profile
                                                </Link>
                                            </MenubarItem>

                                            <MenubarSeparator />

                                            <MenubarItem asChild>
                                                <Link
                                                    href="/logout"
                                                    method="post"
                                                    as="button"
                                                    className="px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                                                >
                                                    Logout
                                                </Link>
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            ) : (
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="border-Base_Color text-Base_Color hover:bg-Base_Color hover:text-white bg-transparent px-7"
                                    >
                                        Login
                                    </Button>
                                </DialogTrigger>
                            )}
                        </div>
                    </div>

                    {/* Menampilkan form Login atau Register */}
                    {/* {!isRegister ? <DialogLogin /> : <DialogRegister />} */}
                    {!isRegister ? <DialogLogin /> : <DialogRegister />}
                </Dialog>
            </header>
            <div className="h-[84px]" />

            <main>
                {children}
                <Toaster />
            </main>

            {/* Footer */}
            <footer className="p-2 text-center">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025{" "}
                    <a href="#" className="hover:underline">
                        RUANG_EDIT™
                    </a>
                    . All Rights Reserved.
                </span>
            </footer>
        </div>
    );
}
