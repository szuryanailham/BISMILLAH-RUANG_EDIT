import React from "react";
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useAuthDialog } from "@/stores/useAuthDialog";

export default function DialogLogin() {
    const { openRegister } = useAuthDialog();
    return (
        <div>
            <DialogContent className="w-[90%] rounded-xl sm:max-w-[400px] bg-Fourt_Color p-6">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-center text-Second_Color">
                        Login
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm text-Sixth_Color">
                        Silahkan login Untuk Akses Kelas Kreatif Mu
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-5">
                    <Input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md border px-4 bg-Fourt_Color py-4 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-Fourt_Color  rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
                    />

                    <Button
                        type="submit"
                        className="w-full bg-Base_Color hover:bg-opacity-90 text-white"
                    >
                        Login
                    </Button>

                    <div className="relative text-center">
                        <span className="text-gray-400 text-sm">atau</span>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 bg-transpart  text-Sixth_Color"
                    >
                        <img
                            src="/image/icons/google_icons.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Login dengan Google
                    </Button>
                </div>

                <DialogFooter className="text-center">
                    <p className="text-sm text-gray-500">
                        Belum punya akun?{" "}
                        <span
                            onClick={openRegister}
                            className="text-Second_Color hover:underline"
                        >
                            Daftar
                        </span>
                    </p>
                </DialogFooter>
            </DialogContent>
        </div>
    );
}
