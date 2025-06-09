"use client";

import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/Components/ui/card";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("verification.send"));
    };

    return (
        <>
            <Head title="Verifikasi Email" />
            <div className="min-h-screen flex items-center justify-center bg-[#141414] px-4 py-12 text-[#D7D4D4]">
                <Card className="w-full max-w-md bg-[#2C2B2B] border-none shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl text-center text-[#EBEBEB]">
                            Verifikasi Email
                        </CardTitle>
                        <CardDescription className="text-center text-[#D7D4D4] text-sm">
                            Terima kasih telah mendaftar. Silakan verifikasi
                            email Anda.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="text-sm text-[#D7D4D4] mb-4">
                            Klik tautan verifikasi yang telah kami kirimkan ke
                            email Anda. Jika belum menerima, kirim ulang melalui
                            tombol di bawah.
                        </div>

                        {status === "verification-link-sent" && (
                            <div className="mb-4 text-sm font-medium text-[#88DE53]">
                                Tautan verifikasi baru telah dikirim ke email
                                Anda.
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full sm:w-auto bg-[#7966CE] text-white hover:bg-opacity-90"
                                >
                                    Kirim Ulang
                                </Button>

                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="text-sm underline text-[#D7D4D4] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7966CE]"
                                >
                                    Keluar
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
