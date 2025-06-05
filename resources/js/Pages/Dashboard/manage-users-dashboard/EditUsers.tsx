import React, { useState } from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { editUserSchema } from "@/Schema/EditUserSchema";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";
import { useToast } from "@/hooks/use-toast";
import { User } from "@/types/Users";

interface propsEditUsers {
    users: User;
}
function EditUsers({ users }: propsEditUsers) {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof editUserSchema>>({
        resolver: zodResolver(editUserSchema),
        defaultValues: {
            name: users.name,
            email: users.email,
            phone_number: users.phone_number ?? "",
            creative_field: users.creative_field ?? "",
            instagram_link: users.instagram_link ?? "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof editUserSchema>) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone_number", values.phone_number ?? "");
        formData.append("creative_field", values.creative_field ?? "");
        formData.append("instagram_link", users.instagram_link ?? "");
        formData.append("password", users.password ?? "");
        formData.append("_method", "PUT");
        console.log(formData);
        router.post(`/dashboard/manage-users/${users.id}`, formData, {
            onSuccess: () => {
                toast({
                    title: "Data User Berhasil Diperbarui",
                    description:
                        "Informasi pengguna telah berhasil diperbarui dan disimpan ke database.",
                });
                setTimeout(() => {
                    router.visit("/dashboard/manage-users");
                }, 2000);
            },
            onError: (errors) => {
                let description = "Terjadi kesalahan.";

                if (typeof errors === "string") {
                    description = errors;
                } else if (errors?.message) {
                    description = errors.message;
                } else if (errors?.errors) {
                    description = Object.values(errors.errors)
                        .flat()
                        .join(", ");
                } else if (typeof errors === "object") {
                    description = JSON.stringify(errors);
                }

                toast({
                    variant: "destructive",
                    title: "Terjadi Kesalahan",
                    description,
                });
            },
        });
    };
    return (
        <div>
            <h1>Hallo world</h1>
            <div className="max-w-screen-sm mx-auto mt-5">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Input: Nama */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Lengkap</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Nama lengkap"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Input: Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="email@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Input: Nomor HP */}
                        <FormField
                            control={form.control}
                            name="phone_number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nomor HP</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            placeholder="08xxxxxxxxxx"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Select: Creative Field */}
                        <FormField
                            control={form.control}
                            name="creative_field"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bidang Kreatif</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih bidang" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="design">
                                                Design
                                            </SelectItem>
                                            <SelectItem value="photographer">
                                                Photographer
                                            </SelectItem>
                                            <SelectItem value="videographer">
                                                Videographer
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Input: Link Instagram */}
                        <FormField
                            control={form.control}
                            name="instagram_link"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Link Instagram</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="url"
                                            placeholder="https://instagram.com/namakamu"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Optional: Ubah Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ubah Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Kosongkan jika tidak diubah"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit */}
                        <Button type="submit" className="w-full">
                            Simpan Perubahan
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

// Layout Dashboard
EditUsers.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default EditUsers;
