// src/Layouts/DashboardLayout.tsx

import React from "react";
import { AppSidebar } from "@/Components/Dashboard/AppSidebar";
import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
} from "@/Components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Toaster } from "@/Components/ui/toaster";
import { Separator } from "@/Components/ui/separator";

/**
 * DashboardLayout
 *
 * Layout utama untuk halaman dashboard admin Ruang Edit.
 * Menyediakan struktur dasar berupa:
 * - Sidebar
 * - Header dengan tombol trigger & breadcrumb
 * - Area konten
 *
 * Props:
 * - children: React.ReactNode — konten utama halaman
 *
 * Struktur layout:
 * ┌────────────────────────────────────────────┐
 * │ Sidebar                                    │
 * │ ┌────────────────────────────────────────┐ │
 * │ │ Header (Trigger + Breadcrumb)          │ │
 * │ │ ┌────────────────────────────────────┐ │ │
 * │ │ │ Main Content                      │ │ │
 * │ │ └────────────────────────────────────┘ │ │
 * └────────────────────────────────────────────┘
 */
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                {/* HEADER SECTION */}
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />

                        {/* Breadcrumb Navigation */}
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/dashboard">
                                        Dashboard
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Home</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>

                {/* MAIN CONTENT SECTION */}
                <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                    <Toaster />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
