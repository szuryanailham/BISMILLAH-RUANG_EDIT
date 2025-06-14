import GuestLayout from "@/Layouts/AppLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginUserSchema } from "@/Schema/LoginUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
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
        <GuestLayout>
            <Head title="Login" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="max-w-md w-full mx-auto p-5 rounded-md shadow-xl bg-Fourt_Color">
                <h1 className="text-2xl font-semibold text-center mb-6 text-Second_Color">
                    Login
                </h1>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5"
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
                                            className="w-full rounded-md border text-Sixth_Color px-4 bg-Fourt_Color py-3 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
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
                                            className="w-full bg-Fourt_Color text-Sixth_Color rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-Second_Color"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {canResetPassword && (
                            <div className="text-right text-sm">
                                <Link
                                    href="/forgot-password"
                                    className="text-Second_Color hover:underline"
                                >
                                    Lupa Password?
                                </Link>
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-Base_Color hover:bg-opacity-90 text-white py-3"
                        >
                            Login
                        </Button>

                        <div className="relative text-center">
                            <span className="text-gray-400 text-sm">atau</span>
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full flex items-center justify-center gap-2 bg-transparent text-Sixth_Color py-3"
                            onClick={() =>
                                (window.location.href = "/auth/google")
                            }
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
                <p className="w-full text-sm text-gray-500 py-4 text-center">
                    Belum punya akun?{" "}
                    <Link
                        href="/register"
                        className="text-Second_Color hover:underline cursor-pointer"
                    >
                        Daftar
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
