import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

/**
 * QuestionSection Component
 * Menampilkan daftar Frequently Asked Questions (FAQ) dalam bentuk accordion
 * yang menarik dan mudah dibaca.
 */
export default function QuestionSection() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-24 py-12">
            {/* Judul Section */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-Second_Color mb-3">
                    Pertanyaan Umum
                </h2>
                <p className="text-sm sm:text-base text-Sixth_Color selection:max-w-md mx-auto">
                    Berikut beberapa pertanyaan yang sering diajukan oleh
                    pengguna sebelum membeli kelas di Ruang Edit.
                </p>
            </div>

            {/* Accordion FAQ */}
            <Accordion type="single" collapsible className="space-y-4">
                {/* FAQ Item */}
                {[
                    {
                        value: "item-1",
                        question: "Bagaimana cara membeli kelas di Ruang Edit?",
                        answer: `Silakan login terlebih dahulu, lalu pilih kelas yang kamu inginkan dan klik "Beli Kelas".
                        Setelah menyelesaikan pembayaran melalui payment gateway, kamu akan langsung mendapatkan akses
                        ke kelas tanpa perlu memasukkan token.`,
                    },
                    {
                        value: "item-2",
                        question:
                            "Apakah saya perlu memasukkan token untuk mengikuti kelas?",
                        answer: `Tidak. Token hanya digunakan untuk mengakses kelas gratis (promo). Untuk kelas berbayar,
                        akses akan diberikan secara otomatis setelah pembayaran berhasil.`,
                    },
                    {
                        value: "item-3",
                        question: "Apakah kelas bisa diakses selamanya?",
                        answer: `Ya, setelah kamu membeli kelas, akses ke materi akan tersedia selamanya tanpa batas waktu.`,
                    },
                    {
                        value: "item-4",
                        question: "Apakah saya bisa mendapatkan sertifikat?",
                        answer: `Saat ini sertifikat belum tersedia. Namun, fitur sertifikat akan segera hadir.
                        Nantinya kamu bisa mendapatkannya setelah menyelesaikan kelas.`,
                    },
                    {
                        value: "item-5",
                        question:
                            "Apakah saya mendapat relasi setelah ikut kelas?",
                        answer: `Ya, kamu akan tergabung dalam komunitas alumni Ruang Edit,
                        tempat berdiskusi dan berkolaborasi bersama peserta lain dan mentor.`,
                    },
                ].map((faq) => (
                    <AccordionItem key={faq.value} value={faq.value}>
                        <AccordionTrigger className="text-base sm:text-lg font-medium text-Sixth_Color hover:text-Second_Color transition-colors">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm sm:text-base text-Sixth_Color leading-relaxed">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
