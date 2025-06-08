import React from "react";
import {
    DialogContent,
    DialogFooter,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/Components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/Schema/register-schema";
import { useAuthDialog } from "@/stores/useAuthDialog";
import { router } from "@inertiajs/react";
import { z } from "zod";
function DialogRegister() {
    const { openLogin } = useAuthDialog();
    const { toast } = useToast();
    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    function onSubmit(values: z.infer<typeof registerSchema>) {
        const payload = {
            name: values.firstName + " " + values.lastName,
            email: values.email,
            password: values.password,
            password_confirmation: values.password_confirmation,
        };
        router.post("/register", payload, {
            onSuccess: () => {
                toast({
                    title: "Pendaftaran Berhasil",
                    description:
                        "Akun kamu berhasil didaftarkan. Silakan login untuk melanjutkan.",
                    variant: "default",
                });
                console.log("Siap ");
            },
            onError: (errors) => {
                toast({
                    title: "Gagal Mendaftar",
                    description:
                        "Silakan periksa kembali isian formulir dan coba lagi.",
                    variant: "destructive",
                });

                console.error("Error validasi:", errors);
            },
        });
    }

    return (
        <DialogContent className="w-[90%] rounded-xl sm:max-w-[400px] bg-Fourt_Color text-white p-6 border-none">
            <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-center text-Second_Color">
                    Sign Up
                </DialogTitle>
                <DialogDescription className="text-center text-sm text-Sixth_Color">
                    Daftar Sekarang & Kembangkan Kreativitasmu!
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4 py-2"
                >
                    <div className="grid grid-cols-2 gap-2">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Nama Depan"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Nama Belakang"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                <p className="text-xs text-gray-400 mt-1">
                                    Gunakan minimal 8 karakter dengan kombinasi
                                    huruf besar, angka, dan simbol.
                                </p>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password_confirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Konfirmasi Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-Base_Color hover:bg-opacity-90 text-white"
                    >
                        Daftar
                    </Button>

                    <div className="text-center">
                        <span className="text-gray-400 text-sm">atau</span>
                    </div>

                    <Button
                        type="button"
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
                </form>
            </Form>

            <DialogFooter className="w-full text-center pt-4">
                <p className="text-sm text-gray-500">
                    Sudah punya akun?{" "}
                    <span
                        onClick={openLogin}
                        className="text-Second_Color hover:underline cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </DialogFooter>
        </DialogContent>
    );
}

export default DialogRegister;
