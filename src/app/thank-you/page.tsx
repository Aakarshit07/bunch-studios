
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Sparkles, Clock, MessageSquare, FileText } from "lucide-react"
import DefaultLayout from "@/components/layouts/DefaultLayout"

export default function ThankYouPage() {
  return (
    <DefaultLayout>
      <div className="pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Card Container with subtle animation */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all animate-fade-in-up">
              {/* Top Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-primary-600 to-primary-600/70"></div>

              <div className="p-6 sm:p-10">
                {/* Success Icon with animation */}
                <div className="flex justify-center mb-8">
                  <div className="rounded-full bg-green-100 p-4 animate-pulse-slow">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                </div>

                {/* Header with improved typography */}
                <div className="text-center mb-10">
                  <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Thank You!</h1>
                  <div className="flex justify-center mb-4">
                    <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
                  </div>
                  <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                    Your message has been successfully sent. We appreciate you contacting Bunch Studios. We'll get back
                    to you as soon as possible, usually within <span className="font-semibold">24 hours</span>.
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="relative h-24 mb-10 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-600/5 flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-primary-600/40" />
                  </div>
                </div>

                {/* Next Steps with improved visuals */}
                <div className="bg-gray-50 p-8 rounded-xl mb-10 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <Clock className="mr-2 h-6 w-6 text-primary-600" />
                    What happens next?
                  </h2>
                  <ol className="space-y-6">
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mr-4 mt-0.5 shadow-sm flex-shrink-0">
                        1
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Review</h3>
                        <p className="text-gray-600">Our team will carefully review your message and requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mr-4 mt-0.5 shadow-sm flex-shrink-0">
                        2
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Discussion</h3>
                        <p className="text-gray-600">We'll reach out to discuss your needs in more detail</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mr-4 mt-0.5 shadow-sm flex-shrink-0">
                        3
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">Proposal</h3>
                        <p className="text-gray-600">
                          We'll provide a tailored proposal designed specifically for your project
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 mb-10">
                  <div className="flex-1 bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center mb-3">
                      <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-medium text-gray-900">Have questions?</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      If you have any questions while waiting, feel free to email us at{" "}
                      <a href="mailto:support@bunchstudios.in" className="text-blue-600 font-medium hover:underline">
                        support@bunchstudios.in
                      </a>
                    </p>
                  </div>
                  <div className="flex-1 bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <div className="flex items-center mb-3">
                      <FileText className="h-5 w-5 text-amber-600 mr-2" />
                      <h3 className="font-medium text-gray-900">Browse our work</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      While you wait, check out our{" "}
                      <Link href="/#portfolio" className="text-amber-600 font-medium hover:underline">
                        portfolio
                      </Link>{" "}
                      to see our previous projects
                    </p>
                  </div>
                </div>

                {/* Return Button with improved styling */}
                <div className="flex justify-center">
                  <Link href="/">
                    <Button className="bg-primary-600 hover:bg-primary-600/90 text-white px-8 py-6 h-auto text-base rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                      <ArrowLeft className="h-5 w-5" />
                      Return to Homepage
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
