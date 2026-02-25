import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ClawTransition from "@/components/ClawTransition";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <main className="relative w-full">
      <ClawTransition />
      <ProgressBar />
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
