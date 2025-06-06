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
import CardClass from "@/Components/CardClass";
import Layout from "@/Layouts/AppLayout";
import { useForm as useZodForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema, SearchSchema } from "@/Schema/searchSchema";
import { ClassModel } from "@/types/ClassModel";
import { router } from "@inertiajs/react"; // ✅ gunakan router

interface ClassProps {
    classes: ClassModel[];
    search?: string;
}

function ListClasses({ classes, search = "" }: ClassProps) {
    const form = useZodForm<SearchSchema>({
        resolver: zodResolver(searchSchema),
        defaultValues: {
            search: search || "",
        },
    });

    const handleSubmit = (values: SearchSchema) => {
        router.get("/classes", values, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        });
    };

    return (
        <div className="p-4 md:px-10 lg:px-16 flex flex-col items-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-row items-center gap-3 w-full max-w-xl"
                >
                    <FormField
                        control={form.control}
                        name="search"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                {/* Sembunyikan label visualnya agar tidak mengganggu alignment */}
                                <FormLabel className="sr-only">
                                    Cari Kelas
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Masukkan kata kunci..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-Base_Color mt-2">
                        Cari
                    </Button>
                </form>
            </Form>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {classes.length > 0 ? (
                    classes.map((classItem) => (
                        <CardClass
                            key={classItem.id}
                            title={classItem.title}
                            description={classItem.description}
                            price={classItem.is_free ? 0 : classItem.price}
                            rating={classItem.rating_class}
                            image={classItem.poster_image}
                            categoryIcon={
                                classItem.category_class?.category_class ??
                                "Uncategorized"
                            }
                            mentorName={classItem.mentor?.name ?? "Unknown"}
                            isBestSeller={classItem.students_count > 50}
                            href={`/classes/${classItem.slug}`}
                        />
                    ))
                ) : (
                    <p className="text-center col-span-full mt-10 text-gray-500">
                        Tidak ada kelas ditemukan.
                    </p>
                )}
            </div>
        </div>
    );
}

ListClasses.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default ListClasses;
