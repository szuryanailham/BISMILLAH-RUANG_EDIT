import React from "react";
import Layout from "@/Layouts/DashboardLayouts";
import DashboardHome from "@/Components/Dashboard/DashboardHome";

function index() {
    return (
        <div className="p-5">
            <DashboardHome />
        </div>
    );
}

index.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default index;
