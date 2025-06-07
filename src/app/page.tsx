import { HeroSection } from "@/components/custom/hero-section";
import { PartnersSection } from "@/components/custom/partners-section";
import { ServicesSection } from "@/components/custom/services-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { ProcessSection } from "@/components/custom/process-section";
import { TestimonialsSection } from "@/components/custom/testimonials-section";
import { ContactSection } from "@/components/custom/contact-section";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function HomePage() {
  return (
    <DefaultLayout>
      <>
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

          <section id="testimonials">
            <TestimonialsSection />
          </section>

          <section id="process">
            <ProcessSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </>
    </DefaultLayout>
  );
}
