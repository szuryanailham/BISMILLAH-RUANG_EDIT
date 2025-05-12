import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/AppLayout";
import HeroSection from "@/Components/home/HeroSection";
import AboutSection from "@/Components/home/AboutSection";
import VideoProfileSection from "@/Components/home/VideoProfileSection";
import BenefitSection from "@/Components/home/BenefitSection";
import CategoriesSection from "@/Components/home/CategoriesSection";
import GeneralClassesSection from "@/Components/home/GeneralClassesSection";
import ExperedClassesSection from "@/Components/home/ExperedClassesSection";
import TestimoniesSection from "@/Components/home/TestimoniesSection";
import QuestionSection from "@/Components/home/QuestionSection";
import QuotesSection from "@/Components/home/QuotesSection";
import { ClassModel } from "@/types/ClassModel";

interface WelcomeProps {
    beginnerClasses: ClassModel[];
    expertClasses: ClassModel[];
}

function Welcome({ beginnerClasses, expertClasses }: WelcomeProps) {
    return (
        <>
            <Head title="Welcome" />
            <HeroSection />
            <AboutSection />
            <VideoProfileSection />
            <BenefitSection />
            <CategoriesSection />
            <GeneralClassesSection classes={beginnerClasses} />
            <ExperedClassesSection classes={expertClasses} />
            <TestimoniesSection />
            <QuestionSection />
            <QuotesSection />
        </>
    );
}

Welcome.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Welcome;
