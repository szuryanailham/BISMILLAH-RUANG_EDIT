export interface Mentor {
    name: string;
    photo: string;
    specialist: string;
    status: "active" | "inactive";
    rating_mentor: number;
    description: string;
    instagram_link: string;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
}

export const mentorsDummy: Mentor[] = [
    {
        name: "Andi Pratama",
        photo: "mentors/andi-pratama.jpg",
        specialist: "Graphic Design",
        status: "active",
        rating_mentor: 4.8,
        description:
            "Andi adalah seorang desainer grafis profesional dengan pengalaman lebih dari 8 tahun di industri kreatif. Spesialisasi dalam desain brand identity, UI/UX, dan ilustrasi digital. Alumnus Universitas Seni Indonesia dengan berbagai penghargaan desain nasional.",
        instagram_link: "https://instagram.com/andi.design",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        name: "Dina Wijaya",
        photo: "mentors/dina-wijaya.jpg",
        specialist: "UI/UX Design",
        status: "active",
        rating_mentor: 4.9,
        description:
            "Dina adalah UI/UX Designer dengan pengalaman 6 tahun bekerja di perusahaan teknologi terkemuka di Indonesia dan Singapura. Fokus pada desain produk digital yang user-centered dan memiliki sertifikasi internasional di bidang UX Research.",
        instagram_link: "https://instagram.com/dina.uxdesign",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        name: "Budi Santoso",
        photo: "mentors/budi-santoso.jpg",
        specialist: "Video Editing",
        status: "active",
        rating_mentor: 4.7,
        description:
            "Budi adalah seorang video editor profesional dengan portofolio yang mencakup iklan TV, film pendek, dan konten media sosial. Memiliki keahlian khusus dalam Adobe Premiere Pro, After Effects, dan DaVinci Resolve. Pengalaman 10 tahun di industri perfilman Indonesia.",
        instagram_link: "https://instagram.com/budi.films",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
];
