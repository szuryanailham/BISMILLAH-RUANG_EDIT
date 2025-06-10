import AppLayouts from "@/Layouts/AppLayout";
import React from "react";
import { useForm as useInertiaForm } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/types/Users";
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
import { EditProfileSchema } from "@/Schema/EditProfileSchema";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

interface propsUser {
    user: User;
}

function Edit({ user }: propsUser) {
    const inertiaForm = useInertiaForm({
        name: user.name,
        email: user.email,
    });

    const form = useForm({
        resolver: zodResolver(EditProfileSchema),
        defaultValues: {
            name: user.name,
            email: user.email,
            phone_number: user.phone_number ?? " ",
            instagram_link: user.instagram_link ?? "",
            creative_field: user.creative_field ?? undefined,
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
                        {/* INPUT : Name of User */}
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
                        {/* INPUT : Number Phone */}
                        <FormField
                            control={form.control}
                            name="instagram_link"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number Phone</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Number Phone"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* INPUT : Email of user */}
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
                        {/* INPUT : Creative Field */}
                        <FormField
                            control={form.control}
                            name="creative_field"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bidang Kreatif</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value || undefined}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih bidang kreatif" />
                                            </SelectTrigger>
                                        </FormControl>
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
                        {/* INPUT : Instagram Link */}
                        <FormField
                            control={form.control}
                            name="instagram_link"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Link Instagarm</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Link Instagram"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            disabled={inertiaForm.processing}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
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
