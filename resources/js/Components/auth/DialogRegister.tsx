import React from "react";
import {
    DialogContent,
    DialogFooter,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useAuthDialog } from "@/stores/useAuthDialog";

function DialogRegister() {
    const { openLogin } = useAuthDialog();
    return (
        <>
            <DialogContent className="w-[90%] rounded-xl sm:max-w-[400px] bg-Fourt_Color text-white p-6">
                <DialogHeader>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold text-center text-Second_Color">
                            Sign Up
                        </DialogTitle>
                        <DialogDescription className="text-center text-sm text-Sixth_Color">
                            Daftar Sekarang & Kembangkan Kreativitasmu!
                        </DialogDescription>
                    </DialogHeader>
                </DialogHeader>

                <div className="grid gap-4 py-5">
                    <div className="grid grid-cols-2 gap-2">
                        <Input
                            type="text"
                            placeholder="Nama Depan"
                            className="rounded-md border px-4 bg-Fourt_Color py-3 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
                        />
                        <Input
                            type="text"
                            placeholder="Nama Belakang"
                            className="rounded-md border px-4 bg-Fourt_Color py-3 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
                        />
                    </div>

                    <Input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md border px-4 bg-Fourt_Color py-3 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-Fourt_Color rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
                    />
                    <Input
                        type="password"
                        placeholder="Konfirmasi Password"
                        className="w-full bg-Fourt_Color rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
                    />

                    <Button
                        type="submit"
                        className="w-full bg-Base_Color hover:bg-opacity-90 text-white"
                    >
                        Daftar
                    </Button>

                    <div className="relative text-center">
                        <span className="text-gray-400 text-sm">atau</span>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 bg-transparent text-Sixth_Color"
                    >
                        <img
                            src="/image/icons/google_icons.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Daftar dengan Google
                    </Button>
                </div>

                <DialogFooter className="text-center">
                    <p className="text-sm text-gray-500">
                        Sudah punya akun?{" "}
                        <span
                            onClick={openLogin}
                            className="text-Second_Color hover:underline"
                        >
                            Login
                        </span>
                    </p>
                </DialogFooter>
            </DialogContent>
        </>
    );
}

export default DialogRegister;
