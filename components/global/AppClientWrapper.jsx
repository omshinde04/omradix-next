"use client";

import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CookieBanner from "./CookieBanner";
import Loader from "../Loader";
import OfferWheelTrigger from "./OfferWheelTrigger";

export default function AppClientWrapper({ children }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Loader onComplete={() => setLoaded(true)}>
            <Navbar />

            <main>{children}</main>

            <Footer />

            <CookieBanner />

            {/* 🎯 OFFER WHEEL (AFTER LOADER FINISH) */}
            <OfferWheelTrigger enabled={loaded} />
        </Loader>
    );
}