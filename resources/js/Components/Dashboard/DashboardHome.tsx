import { BookOpen, FileText, Users, UserCheck, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
type StatItem = {
    title: string;
    value: number;
    icon: React.ReactNode;
};

const stats: StatItem[] = [
    {
        title: "Jumlah Kelas",
        value: 24,
        icon: <BookOpen className="w-5 h-5 text-white" />,
    },
    {
        title: "Jumlah Materi",
        value: 120,
        icon: <FileText className="w-5 h-5 text-white" />,
    },
    {
        title: "Jumlah Mentor",
        value: 8,
        icon: <Users className="w-5 h-5 text-white" />,
    },
    {
        title: "Jumlah Pengguna",
        value: 302,
        icon: <UserCheck className="w-5 h-5 text-white" />,
    },
];

const activities: string[] = [
    "User IlhamS baru saja mendaftar.",
    "Kelas 'Belajar UI Figma' ditambahkan.",
    "Mentor Nanda bergabung ke platform.",
];

export default function DashboardHome() {
    return (
        <div className="w-full max-w-full px-4 md:px-8 py-6 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">
                Selamat datang, Admin 👋
            </h2>
        </div>
    );
}
