import React from "react";
import TestimonyCards from "../TestimonyCards";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimoniesSection() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <section className="px-4 mt-10">
            {/* Judul Section Testimony */}
            <header className="mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-Second_Color">
                    Testimony
                </h2>
            </header>

            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {/* Slide 1 */}
                    <div className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>

                    {/* Slide 2 */}
                    <div className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>

                    {/* Slide 3 */}
                    <div className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>

                    {/* Slide 4 */}
                    <div className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>

                    {/* Slide 5 */}
                    <div className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>
                </div>
            </div>
        </section>
    );
}
