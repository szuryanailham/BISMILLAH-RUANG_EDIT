import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayouts";
function EditMateri() {
    return (
        <div>
            <h1>Hallo World</h1>
        </div>
    );
}
EditMateri.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);
export default EditMateri;
