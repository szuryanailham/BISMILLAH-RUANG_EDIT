import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayouts";
function EditClass() {
    return (
        <section>
            <header>
                <h1>Edit Course</h1>
            </header>
            <div>{/* form section */}</div>
        </section>
    );
}
EditClass.layout = (page: React.ReactNode) => (
    <DashboardLayout>{page}</DashboardLayout>
);

export default EditClass;
