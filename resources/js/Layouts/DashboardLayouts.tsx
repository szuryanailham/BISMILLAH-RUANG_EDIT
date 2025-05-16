import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { AppSidebar } from "@/Components/Dashboard/AppSidebar";
import { Header } from "@/Components/Dashboard/Header";
import { TopNav } from "@/Components/Dashboard/Top-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    const navLinks = [
        {
            title: "Home",
            href: "/",
            isActive: true,
        },
        {
            title: "About",
            href: "/about",
            isActive: false,
        },
        {
            title: "Contact",
            href: "/contact",
            isActive: false,
            disabled: true,
        },
        {
            title: "Penyelenggara Kelas",
            href: "/kelas/penyelenggara",
            isActive: false,
        },
    ];
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <Header>
                    <TopNav links={navLinks} />
                </Header>
            </SidebarProvider>
        </>
    );
}
