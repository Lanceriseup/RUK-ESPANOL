import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import RegistrationForm from "@/components/RegistrationForm";
import Testimonials from "@/components/Testimonials";
import Pillars from "@/components/Pillars";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Testimonials />
      <Pillars />
      <FAQ />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
