import {
    BookOpen,
    FileText,
    Users,
    UserCheck,
    User2,
    ChevronUp,
    Camera,
    GraduationCap,
    NotepadText,
    Megaphone,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
} from "@/Components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import { TeamSwitcher } from "./team-switcher";
import { Link } from "@inertiajs/react";
// Menu items.
const items = [
    {
        title: "Kelola Kelas",
        url: "/dashboard/manage-class",
        icon: BookOpen,
    },
    {
        title: "Kelola Materi",
        url: "/dashboard/manage-course",
        icon: FileText,
    },
    {
        title: "Kelola Mentor",
        url: "/dashboard/manage-mentor",
        icon: Users,
    },
    {
        title: "Kelola Pengguna",
        url: "/dashboard/manage-users",
        icon: UserCheck,
    },
    {
        title: "Kelola Order",
        url: "/dashboard/manage-orders",
        icon: NotepadText,
    },
];

const teams = [
    {
        name: "Content Team",
        logo: Camera,
        plan: "Creative",
    },
    {
        name: "Instructors",
        logo: GraduationCap,
        plan: "Educator",
    },
    {
        name: "Marketing",
        logo: Megaphone,
        plan: "Growth",
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <TeamSwitcher teams={teams} />
            </SidebarHeader>
            <SidebarContent className=" truncate font-semibold">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            {/* ========================== SIDEBAR FOOTER ===================== */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
