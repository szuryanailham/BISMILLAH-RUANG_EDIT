"use client";

import React from "react";
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useAuthDialog } from "@/stores/useAuthDialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "@/Schema/LoginUserSchema";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { router } from "@inertiajs/react";
import { toast } from "@/hooks/use-toast";

export default function DialogLogin() {
    const { openRegister, close } = useAuthDialog();
    const form = useForm<z.infer<typeof loginUserSchema>>({
        resolver: zodResolver(loginUserSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginUserSchema>) => {
        router.post("/login", values, {
            onSuccess: () => {
                toast({
                    title: "Login Berhasil",
                    description: "Selamat datang kembali!",
                });
                form.reset();
            },
            onError: (errors) => {
                if (errors.email || errors.password) {
                    toast({
                        title: "Login Gagal",
                        description: "Email atau password salah.",
                        variant: "destructive",
                    });
                }
            },
        });
    };

    return (
        <DialogContent className="w-[90%] rounded-xl sm:max-w-[400px] border-none bg-Fourt_Color p-6 m-2">
            <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-center text-Second_Color">
                    Login
                </DialogTitle>
                <DialogDescription className="text-center text-sm text-Sixth_Color">
                    Silahkan login Untuk Akses Kelas Kreatif Mu
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4 py-5"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Email"
                                        className="w-full rounded-md border text-Sixth_Color px-4 bg-Fourt_Color py-4 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
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
                                        {...field}
                                        placeholder="Password"
                                        className="w-full bg-Fourt_Color text-Sixth_Color rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
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
                        Login
                    </Button>

                    <div className="relative text-center">
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
                        Login dengan Google
                    </Button>
                </form>
            </Form>

            <DialogFooter className="w-full text-center">
                <p className="w-full text-sm text-gray-500">
                    Belum punya akun?{" "}
                    <span
                        onClick={openRegister}
                        className="text-Second_Color hover:underline cursor-pointer"
                    >
                        Daftar
                    </span>
                </p>
            </DialogFooter>
        </DialogContent>
    );
}
