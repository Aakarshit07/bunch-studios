import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
              <p className="text-lg text-gray-600">Effective Date: 10 Jun 2025</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Bunch Studios. By accessing or using our website or services, you agree to the following
                  terms and conditions. Please read them carefully.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Services Offered</h2>
                <p className="text-gray-700 leading-relaxed">
                  We provide custom web design and development services, specifically short-form websites. All services
                  are delivered digitally and tailored to each client's needs, as outlined in individual agreements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Project Engagement</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All projects begin after a mutual agreement and an advance payment.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Clients are responsible for providing accurate and timely content (text, images, branding assets,
                  etc.).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Timeline estimates depend on client responsiveness and may adjust based on revision cycles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payments & Refunds</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A 30% advance is required to begin work. The remaining 70% is due on project completion, before final
                  delivery.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Advance payments are non-refundable once work has commenced.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Invoices will be issued with payment options via UPI or bank transfer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Revisions & Scope</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each project includes 3 rounds of revisions unless otherwise stated.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Revisions beyond the agreed scope or page limit may incur additional charges, which will be
                  communicated in advance.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Final deliverables become the client's property upon full payment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We retain the right to display completed work in our portfolio and promotional materials unless
                  explicitly stated otherwise by the client on mail.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Client Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To ensure timely and successful project completion, clients agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Respond to feedback and revision requests within 48–72 hours.</li>
                  <li>Provide clear communication throughout the project duration.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancellations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If a project is cancelled before work begins, the advance may be refunded in full.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If cancelled after work starts, the advance is non-refundable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Pro Bono Projects</h2>
                <p className="text-gray-700 leading-relaxed">
                  Projects we take on pro bono for social impact — such as NGOs, schools, or public service
                  organizations. These are chosen at our discretion. We evaluate these on a case-by-case basis and may
                  offer the project either free of charge or at a significantly reduced rate, depending on the project's
                  scale, urgency, and our current capacity. The final decision on pricing remains at the sole discretion
                  of Bunch Studios.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bunch Studios is not liable for any direct or indirect damages arising from the use of our services or
                  delays caused by third-party tools or platforms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these terms periodically. Continued use of our website or services after any changes
                  implies acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For any questions, reach us at support@bunchstudios.in or DM us on Instagram, Twitter, or LinkedIn.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Bunch Studios</strong>
                  </p>
                  <p className="text-gray-700 mb-2">Email: support@bunchstudios.in</p>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <Link href="/" className="text-[#6d49e2] hover:text-[#6d49e2]/80 font-medium">
                  ← Back to Home
                </Link>
                <Link href="/privacy-policy" className="text-[#6d49e2] hover:text-[#6d49e2]/80 font-medium">
                  View Privacy Policy →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
