import { Header } from "@/components/custom/header";
import { ProjectModal } from "@/components/custom/project-modal";
import { Footer } from "../custom/footer";

export default function DefaultLayout({ children } : { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="flex flex-col gap-[100px] sm:gap-20">
        {children}
        <Footer />
      </section>
      <ProjectModal />
    </main>
  );
}
