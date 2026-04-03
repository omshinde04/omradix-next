"use client";

import { useEffect, useState } from "react";
import OfferWheelModal from "../offer/OfferWheelModal";

export default function OfferWheelTrigger({ enabled }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log("Enabled:", enabled);

        if (!enabled) return;

        // TEMP disable localStorage for testing
        // if (localStorage.getItem("offerShown")) return;

        const timer = setTimeout(() => {
            console.log("Opening modal");
            setOpen(true);
            localStorage.setItem("offerShown", "true");
        }, 4000);

        return () => clearTimeout(timer);
    }, [enabled]);

    return (
        <OfferWheelModal isOpen={open} onClose={() => setOpen(false)} />
    );
}