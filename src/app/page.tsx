import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PartnersSection } from "@/components/partners-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ProjectModal } from "@/components/project-modal";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="flex flex-col gap-8 sm:gap-16">
        <section id="hero">
          <HeroSection />
        </section>

        <PartnersSection />

        <section id="services">
          <ServicesSection />
        </section>

        <section id="portfolio">
          <ProjectsSection />
        </section>

        <section id="process">
          <ProcessSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </section>



      <ProjectModal />
    </main>
  );
}
