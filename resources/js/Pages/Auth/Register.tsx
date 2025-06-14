import React, { useState } from "react";
import GuestLayout from "@/Layouts/AppLayout";
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
import { Link, router } from "@inertiajs/react";
import { z } from "zod";

function Register() {
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
        router.post("/register", payload, {
            onSuccess: () => {
                toast({
                    title: "Pendaftaran Berhasil",
                    description:
                        "Akun kamu berhasil didaftarkan. Silakan login untuk melanjutkan.",
                    variant: "default",
                });
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
            onFinish: () => {
                setIsLoading(false); // ⬅️ Reset loading setelah selesai
            },
        });
    }
    return (
        <GuestLayout>
            <div>
                <h1 className="text-2xl font-semibold text-center mb-6 text-Second_Color">
                    Sign Up
                </h1>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4 max-w-lg w-full mx-auto py-6 px-4"
                    >
                        {/* First & Last Name - Horizontal Flex */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
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
                                    <FormItem className="flex-1">
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

                        {/* Email */}
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

                        {/* Password */}
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
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Gunakan minimal 8 karakter dengan
                                        kombinasi huruf besar, angka, dan
                                        simbol.
                                    </p>
                                </FormItem>
                            )}
                        />

                        {/* Password Confirmation */}
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

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-Base_Color hover:bg-opacity-90 text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? "Mendaftarkan..." : "Daftar"}
                        </Button>

                        {/* OR Divider */}
                        <div className="text-center">
                            <span className="text-gray-400 text-sm">atau</span>
                        </div>

                        {/* Google Button */}

                        <Button
                            onClick={() =>
                                (window.location.href = "/auth/google")
                            }
                            type="button"
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 text-Fifth_Color"
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
            </div>
        </GuestLayout>
    );
}

export default Register;
