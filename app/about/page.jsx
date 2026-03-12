import AboutHero from "../../components/about/AboutHero";
import AboutImpact from "../../components/about/AboutImpact";
import AboutValues from "../../components/about/AboutValues";
import AboutCTA from "../../components/about/AboutCTA";

export default function AboutPage() {
    return (
        <main className="bg-white">
            <AboutHero />

            <AboutImpact />

            <AboutValues />

            <AboutCTA />
        </main>
    );
}