import React from "react";
import TestimonyCards from "../TestimonyCards";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/**
 * TestimoniesSection Component
 *
 * Komponen ini menampilkan carousel berisi testimonial dari pengguna yang sudah mengikuti course.
 * Carousel menggunakan Embla dengan fitur autoplay (tanpa loop).
 *
 * Komponen `TestimonyCards` diasumsikan sudah menangani konten visual dari masing-masing testimonial.
 */
export default function TestimoniesSection() {
    // Inisialisasi carousel dengan autoplay
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <section className="p-3 mt-5">
            {/* Judul Section Testimony */}
            <header className="w-full p-2">
                <h2 className="text-2xl font-bold mb-4 text-Second_Color">
                    Testimony
                </h2>
            </header>

            {/* Container Carousel Testimony */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {/* Slide 1 */}
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>

                    {/* Slide 2 */}
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>

                    {/* Slide 3 */}
                    <div className="flex-[0_0_100%] min-w-0 px-2">
                        <TestimonyCards />
                    </div>
                </div>
            </div>
        </section>
    );
}
