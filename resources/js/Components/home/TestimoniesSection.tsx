import React from "react";
import TestimonyCards from "../TestimonyCards";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimoniesSection() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <div className="p-3 mt-5">
            <div className="w-full p-2">
                <h2 className="text-2xl font-bold mb-4 text-Second_Color">
                    Testimony
                </h2>
            </div>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>
                </div>
            </div>
        </div>
    );
}
