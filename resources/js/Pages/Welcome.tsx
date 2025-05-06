import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/AppLayout";
import HeroSection from "@/Components/home/HeroSection";
import AboutSection from "@/Components/home/AboutSection";
import VideoProfileSection from "@/Components/home/VideoProfileSection";
import BenefitSection from "@/Components/home/BenefitSection";
import CategoriesSection from "@/Components/home/CategoriesSection";
import GeneralClassesSection from "@/Components/home/GeneralClassesSection";
function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <HeroSection />
            <AboutSection />
            <VideoProfileSection />
            <BenefitSection />
            <CategoriesSection />
            <GeneralClassesSection />
        </>
    );
}

Welcome.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Welcome;
