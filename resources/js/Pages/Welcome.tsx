import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/AppLayout";
import HeroSection from "@/Components/home/HeroSection";
import AboutSection from "@/Components/home/AboutSection";
import VideoProfileSection from "@/Components/home/VideoProfileSection";
import BenefitSection from "@/Components/home/BenefitSection";
import CategoriesSection from "@/Components/home/CategoriesSection";
import GeneralClassesSection from "@/Components/home/BeginnerClassesSection";
import ExperedClassesSection from "@/Components/home/ExperedClassesSection";
import TestimoniesSection from "@/Components/home/TestimoniesSection";
import QuestionSection from "@/Components/home/QuestionSection";
import QuotesSection from "@/Components/home/QuotesSection";
import { ClassModel } from "@/types/ClassModel";

/**
 * Welcome Component
 * Halaman utama yang menampilkan berbagai section seperti hero, tentang,
 * profil video, manfaat, kategori kelas, kelas umum, kelas expert,
 * testimoni, FAQ, dan quotes.
 *
 * Menerima dua props:
 * - beginnerClasses: Array kelas pemula (ClassModel[])
 * - expertClasses: Array kelas expert (ClassModel[])
 *
 * Menggunakan layout utama dari AppLayout.
 *
 * @param {Object} props - Properti komponen
 * @param {ClassModel[]} props.beginnerClasses - Data kelas pemula
 * @param {ClassModel[]} props.expertClasses - Data kelas expert
 * @returns JSX.Element - Halaman welcome lengkap dengan section-section konten
 */

// interface type w
interface WelcomeProps {
    beginnerClasses: ClassModel[];
    expertClasses: ClassModel[];
}

function Welcome({ beginnerClasses, expertClasses }: WelcomeProps) {
    return (
        <>
            {/* Head untuk title halaman */}
            <Head title="Welcome" />

            {/* Section Hero */}
            <HeroSection />

            {/* Section Tentang */}
            <AboutSection />

            {/* Section Video Profil */}
            <VideoProfileSection />

            {/* Section Benefit */}
            <BenefitSection />

            {/* Section Kategori */}
            <CategoriesSection />

            {/* Section Kelas Umum, menggunakan data kelas pemula */}
            <GeneralClassesSection classes={beginnerClasses} />

            {/* Section Kelas Expert, menggunakan data kelas expert */}
            <ExperedClassesSection classes={expertClasses} />

            {/* Section Testimoni */}
            <TestimoniesSection />

            {/* Section Pertanyaan Umum */}
            <QuestionSection />

            {/* Section Quotes */}
            <QuotesSection />
        </>
    );
}

// Menentukan layout untuk halaman ini menggunakan AppLayout
Welcome.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Welcome;
