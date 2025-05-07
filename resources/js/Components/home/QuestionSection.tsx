import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

export default function QuestionSection() {
    return (
        <div className="p-3 px-7">
            <h2 className="text-2xl font-bold mb-4 text-Second_Color">
                Pertanyaan Umum
            </h2>
            <Accordion type="single" collapsible>
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

                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Apakah kelas bisa diakses selamanya?
                    </AccordionTrigger>
                    <AccordionContent>
                        Ya, setelah kamu membeli kelas, akses ke materi akan
                        tersedia selamanya tanpa batas waktu.
                    </AccordionContent>
                </AccordionItem>

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
