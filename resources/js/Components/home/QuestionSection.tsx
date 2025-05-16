import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

/**
 * QuestionSection Component
 * Menampilkan daftar Frequently Asked Questions (FAQ) dalam bentuk accordion.
 * Menggunakan komponen Accordion untuk memperlihatkan dan menyembunyikan jawaban
 * secara interaktif.
 *
 * @returns JSX.Element - Section pertanyaan umum dengan accordion
 */
export default function QuestionSection() {
    return (
        <div className="p-3 px-7">
            {/* Judul section */}
            <h2 className="text-2xl font-bold mb-4 text-Second_Color">
                Pertanyaan Umum
            </h2>

            {/* Accordion utama dengan mode single: hanya 1 item terbuka sekaligus,
             dan collapsible (bisa ditutup semua) */}

            <Accordion type="single" collapsible>
                {/* Item 1 */}
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Bagaimana cara membeli kelas di Ruang Edit?
                    </AccordionTrigger>
                    <AccordionContent>
                        Silakan login terlebih dahulu, kemudian pilih kelas yang
                        kamu inginkan dan klik "Beli Kelas". Setelah kamu
                        menyelesaikan pembayaran melalui payment gateway, kamu
                        akan langsung mendapatkan akses ke kelas tanpa perlu
                        memasukkan token.
                    </AccordionContent>
                </AccordionItem>

                {/* Item 2 */}
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Apakah saya perlu memasukkan token untuk mengikuti
                        kelas?
                    </AccordionTrigger>
                    <AccordionContent>
                        Tidak. Token hanya digunakan untuk mengakses kelas
                        gratis (promo). Untuk kelas berbayar, akses akan
                        diberikan secara otomatis setelah pembayaran berhasil.
                    </AccordionContent>
                </AccordionItem>

                {/* Item 3 */}
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Apakah kelas bisa diakses selamanya?
                    </AccordionTrigger>
                    <AccordionContent>
                        Ya, setelah kamu membeli kelas, akses ke materi akan
                        tersedia selamanya tanpa batas waktu.
                    </AccordionContent>
                </AccordionItem>

                {/* Item 4 */}
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Apakah saya bisa mendapatkan sertifikat?
                    </AccordionTrigger>
                    <AccordionContent>
                        Saat ini sertifikat belum tersedia. Namun, fitur
                        sertifikat akan segera hadir setelah pengembangan lebih
                        lanjut. Nantinya, kamu bisa mendapatkan sertifikat
                        setelah menyelesaikan kelas.
                    </AccordionContent>
                </AccordionItem>

                {/* Item 6 */}
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        Apakah saya mendapat relasi setelah ikut kelas?
                    </AccordionTrigger>
                    <AccordionContent>
                        Ya, kamu akan tergabung dalam komunitas alumni Ruang
                        Edit di mana kamu bisa terhubung, berdiskusi, dan
                        berkolaborasi dengan peserta lain maupun mentor.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
