import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
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
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { useDescriptionStore } from "@/stores/dashboard/manage-class-dashboard/CreateClass";
import { useGoalsStore } from "@/stores/dashboard/manage-class-dashboard/goalsStore";
import { useRequirementsStore } from "@/stores/dashboard/manage-class-dashboard/requirementsStore";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    slug: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

import DashboardLayout from "@/Layouts/DashboardLayouts";
import { Button } from "@/Components/ui/button";
import { Label } from "@/components/ui/label";
function CreateClass() {
    const { description, setDescription } = useDescriptionStore();
    const { goals, setGoal, addGoal, removeGoal } = useGoalsStore();
    const { requirements, setRequirement, addRequirement, removeRequirement } =
        useRequirementsStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const input: string = e.target.value;
        const words: string[] = input.trim().split(/\s+/);

        if (words.length <= 25) {
            setDescription(input);
        }
    };

    return (
        <section>
            <header className="text-center">
                <h1 className="text-xl">Create Class</h1>
            </header>
            <div className="max-w-screen-sm mx-auto mt-5">
                <Form {...form}>
                    <form
                        // onSubmit={form.handleSubmit("")}
                        className="space-y-4"
                    >
                        {/* LInk youtube preview */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preview Url</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="shadcn"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/* Title Class */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title Class</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="shadcn"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/* Slug Title Class */}
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Slug</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="shadcn"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/* Price Input */}
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Harga</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Harga Kelas"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        {/* Mentor */}
                        <FormItem>
                            <FormLabel>Mentor</FormLabel>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih Mentor" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Figma</SelectLabel>
                                        <SelectItem value="dimas_saputra">
                                            Dimas Saputra
                                        </SelectItem>
                                        <SelectItem value="raisa_putri">
                                            Raisa Putri
                                        </SelectItem>
                                    </SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel>Canva</SelectLabel>
                                        <SelectItem value="ilham_suryana">
                                            Ilham Suryana
                                        </SelectItem>
                                        <SelectItem value="nadya_lestari">
                                            Nadya Lestari
                                        </SelectItem>
                                    </SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel>Capcut</SelectLabel>
                                        <SelectItem value="bagas_pratama">
                                            Bagas Pratama
                                        </SelectItem>
                                        <SelectItem value="anisa_maharani">
                                            Anisa Maharani
                                        </SelectItem>
                                    </SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel>Photoshop</SelectLabel>
                                        <SelectItem value="fajar_nugraha">
                                            Fajar Nugraha
                                        </SelectItem>
                                        <SelectItem value="sinta_dewi">
                                            Sinta Dewi
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormItem>

                        {/* Category Class  and Category Level*/}
                        <div className="flex gap-3">
                            <div>
                                <FormItem>
                                    <FormLabel>Category Class</FormLabel>
                                    <Select>
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue placeholder="Category Class" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Category Aplikasi
                                                </SelectLabel>
                                                <SelectItem value="Figma">
                                                    Figma
                                                </SelectItem>
                                                <SelectItem value="Canva">
                                                    Canva
                                                </SelectItem>
                                                <SelectItem value="Capcut">
                                                    Capcut
                                                </SelectItem>
                                                <SelectItem value="Photoshop">
                                                    Photoshop
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            </div>
                            <div>
                                <FormItem>
                                    <FormLabel>Category Level</FormLabel>
                                    <Select>
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue placeholder="Category Class" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Category Aplikasi
                                                </SelectLabel>
                                                <SelectItem value="Bignner">
                                                    Beginner
                                                </SelectItem>
                                                <SelectItem value="Medium">
                                                    Medium
                                                </SelectItem>
                                                <SelectItem value="Experted">
                                                    Experted
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            </div>
                        </div>

                        {/* Description Class */}
                        <FormItem>
                            <FormLabel>Desciption Class</FormLabel>
                            <Textarea
                                value={description}
                                onChange={handleChange}
                                placeholder="Type your message here."
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                {
                                    description
                                        .trim()
                                        .split(/\s+/)
                                        .filter(Boolean).length
                                }{" "}
                                / 25 kata
                            </p>
                        </FormItem>
                        {/* input goals */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Tujuan Pembelajaran
                            </label>
                            {goals.map((goal, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <Input
                                        type="text"
                                        value={goal}
                                        onChange={(e) =>
                                            setGoal(index, e.target.value)
                                        }
                                        placeholder={`Tujuan #${index + 1}`}
                                    />
                                    {goals.length > 1 && (
                                        <Button
                                            type="button"
                                            onClick={() => removeGoal(index)}
                                            className="text-red-500 hover:underline bg-transparent hover:bg-transparent"
                                        >
                                            Hapus
                                        </Button>
                                    )}
                                </div>
                            ))}

                            <Button
                                type="button"
                                onClick={addGoal}
                                className="px-3 py-1 mt-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                            >
                                + Tambah Goal
                            </Button>

                            <p className="text-sm text-gray-500 mt-2">
                                Total goals:{" "}
                                {goals.filter((g) => g.trim() !== "").length}
                            </p>
                        </div>
                        {/* Input Requirment */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Requirements Tools
                            </label>
                            {requirements.map((req, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type="text"
                                        value={req}
                                        onChange={(e) =>
                                            setRequirement(
                                                index,
                                                e.target.value
                                            )
                                        }
                                        placeholder={`Requirement #${
                                            index + 1
                                        }`}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded"
                                    />
                                    {requirements.length > 1 && (
                                        <Button
                                            type="button"
                                            onClick={() =>
                                                removeRequirement(index)
                                            }
                                            className="text-red-500 hover:underline bg-transparent hover:bg-transparent"
                                        >
                                            Hapus
                                        </Button>
                                    )}
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addRequirement}
                                className="px-3 py-1 mt-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                            >
                                + Tambah Requirement
                            </button>

                            <p className="text-sm text-gray-500 mt-2">
                                Total requirements:{" "}
                                {
                                    requirements.filter((r) => r.trim() !== "")
                                        .length
                                }
                            </p>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
}
CreateClass.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default CreateClass;
