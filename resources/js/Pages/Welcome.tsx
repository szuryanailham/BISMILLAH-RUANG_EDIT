import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import Layout from "@/Layouts/GuestLayout";

function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <Button variant="destructive">Destructive</Button>
            </div>
        </>
    );
}

Welcome.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Welcome;
