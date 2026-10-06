import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Devices from "@/components/Devices";
import Protocols from "@/components/Protocols";
import HowItWorks from "@/components/HowItWorks";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Devices />
        <Protocols />
        <HowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
