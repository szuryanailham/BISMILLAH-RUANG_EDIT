// components/ToastHandler.tsx
"use client";

import { toast } from "@/hooks/use-toast";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function ToastHandler() {
    const { toast: toastData } = usePage().props as any;

    useEffect(() => {
        if (toastData) {
            toast({
                title: toastData.title,
                description: toastData.description,
                variant: toastData.variant || "default",
            });
        }
    }, [toastData]);

    return null;
}
