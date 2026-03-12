import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesProcess from "@/components/services/ServicesProcess";

export default function ServicesPage() {
    return (
        <main className="bg-white">

            <ServicesHero />

            <ServicesGrid />

            <ServicesProcess />

        </main>
    );
}