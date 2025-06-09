import AppLayouts from "@/Layouts/AppLayout";
import React from "react";
import { useForm as useInertiaForm } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/types/Users";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const schema = z.object({
    name: z.string().min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Email tidak valid"),
});

interface propsUser {
    user: User;
}

function Edit({ user }: propsUser) {
    const inertiaForm = useInertiaForm({
        name: user.name,
        email: user.email,
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: user.name,
            email: user.email,
        },
    });

    const onSubmit = () => {
        console.log("siap bang");
    };

    return (
        <>
            <div className="max-w-xl mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Edit Profil</h1>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Nama lengkap"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Email aktif"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" disabled={inertiaForm.processing}>
                            Simpan
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    );
}

Edit.layout = (page: React.ReactNode) => <AppLayouts>{page}</AppLayouts>;

export default Edit;
