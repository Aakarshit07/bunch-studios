import { Header } from "@/components/custom/header"
import { Footer } from "@/components/custom/footer"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="inline-block mr-2">🔐</span> Privacy Policy
              </h1>
              <p className="text-lg text-gray-600">
                Effective Date:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  This Privacy Policy outlines how Bunch Studios ("we," "us," or "our") collects, uses, and protects the
                  personal information of users visiting our website www.bunchstudios.in or engaging with our services.
                  By accessing our site or working with us, you consent to the collection and use of your information as
                  described here.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of data:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>
                    <strong>Personal Details:</strong> Name, email address, phone number, social media handles, and
                    business name — when you contact us or fill out a form.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> Browser type, device info, IP address, and usage patterns —
                    collected via cookies or analytics tools.
                  </li>
                  <li>
                    <strong>Project Information:</strong> Any content, files, or brand assets you voluntarily share for
                    design/development work.
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We do not collect sensitive personal information unless explicitly provided for a project.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Your data is used to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Communicate with you about projects or inquiries</li>
                  <li>Provide design and development services</li>
                  <li>Improve our website experience</li>
                  <li>Share occasional updates or showcase finished work (with your permission)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">We never sell your data.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Storage & Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your data is securely stored using platforms such as Google Workspace and Notion, with restricted
                  access.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All reasonable measures are taken to protect your information from unauthorized access or disclosure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not share your personal information with third parties, except:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>With your explicit consent</li>
                  <li>With service providers working directly with us (e.g., payment gateways, hosting tools)</li>
                  <li>If required by law, legal process, or government authority</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights (Under Indian Law)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As per India's [Information Technology Act, 2000] and draft [Digital Personal Data Protection Act,
                  2023], you have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Request access to your personal data</li>
                  <li>Ask for correction or deletion of your data</li>
                  <li>Withdraw consent to data use (which may affect service delivery)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise these rights, email us at contact@bunchstudios.in.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies to enhance user experience. You can choose to disable cookies in your
                  browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our site may contain links to external websites. We are not responsible for the privacy practices or
                  content of those websites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may revise this policy from time to time. Any changes will be posted on this page with a revised
                  effective date. Continued use of our site implies acceptance.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Use of Client Credentials</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In certain cases, we may require access to client accounts or platforms (e.g., domain providers, email
                  services, form tools, analytics platforms) to properly deliver services — such as linking forms,
                  setting up hosting, or configuring email.
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Any such credentials shared with us are treated as strictly confidential.</li>
                  <li>
                    We use them only for the agreed purpose and never retain, share, or access them beyond what is
                    necessary for the project.
                  </li>
                  <li>Clients are encouraged to change passwords after project delivery for added security.</li>
                  <li>
                    We are not responsible for issues arising from pre-existing misconfigurations or vulnerabilities in
                    third-party platforms.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about this policy, contact:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Bunch Studios</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="inline-block mr-2">📩</span> support@bunchstudios.in
                  </p>
                </div>
              </section>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <Link href="/" className="text-[#6d49e2] hover:text-[#6d49e2]/80 font-medium">
                  ← Back to Home
                </Link>
                <Link href="/terms-of-service" className="text-[#6d49e2] hover:text-[#6d49e2]/80 font-medium">
                  View Terms of Service →
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
