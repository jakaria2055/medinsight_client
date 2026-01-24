import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageSquare,
  BookOpen,
  Shield,
  Heart,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question:
        "What's the difference between brand-name and generic medicine?",
      answer:
        "The main difference is cost. Generics have the same active ingredient, dosage, safety, strength, quality, and effectiveness as brand-name drugs but are typically 80-85% cheaper. Both meet the same FDA standards for safety and efficacy.",
      category: "Medicine Types",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "Is it safe to buy medicine online?",
      answer:
        "Only from licensed pharmacies that require a prescription. Avoid sites that sell without one. Look for verified internet pharmacy practice sites (VIPPS) certification. We work exclusively with licensed pharmacies and require valid prescriptions for all relevant medications.",
      category: "Safety",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "Can I stop taking medicine when I feel better?",
      answer:
        "No. Always finish the full course as prescribed by your doctor to prevent relapse, antibiotic resistance, or incomplete treatment. Stopping medication early can lead to the return of symptoms and potentially more serious complications.",
      category: "Usage",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      question: "What does 'take with food' mean?",
      answer:
        "Take the medicine during or right after a meal to prevent stomach upset, improve absorption, or reduce gastrointestinal side effects. Some medications require food to work properly, while others should be taken on an empty stomach for optimal absorption.",
      category: "Usage",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      question: "What if I miss a dose?",
      answer:
        "Take it as soon as you remember. If it's almost time for the next dose, skip the missed one. Never double the dose. For specific guidance, check the medication instructions or consult your pharmacist, as some medications have different protocols.",
      category: "Dosage",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      question: "How should I store my medicine?",
      answer:
        "In a cool, dry place away from sunlight and moisture (usually 20-25°C). Keep out of reach of children. Some medications require refrigeration - always check the label. Avoid storing in bathrooms or kitchens where humidity fluctuates.",
      category: "Storage",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "Are generic medicines less effective than brand names?",
      answer:
        "No. Generic medicines contain the same active ingredients in the same amounts as brand-name drugs and are required to have the same quality, safety, and effectiveness. They undergo rigorous FDA testing before approval.",
      category: "Medicine Types",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "How do I know if I'm having an allergic reaction?",
      answer:
        "Common signs include rash, hives, itching, swelling (especially of face/tongue/throat), severe dizziness, or trouble breathing. Seek immediate medical attention if you experience these symptoms after taking any medication.",
      category: "Safety",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium">
              Frequently Asked Questions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Questions,
            <span className="text-blue-600 block">Answered</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick, reliable answers to common health and medicine queries
            from our medical experts
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Search & Categories */}
          <div className="lg:w-1/4 space-y-6">
            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Search Questions
                  </h3>
                  <p className="text-sm text-gray-500">Find specific answers</p>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type your question..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Browse by Category
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                    onClick={() => setSearchTerm(category)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700 group-hover:text-blue-700">
                        {category}
                      </span>
                      <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - FAQ List */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* FAQ Header */}
              <div className="bg-linear-to-r from-blue-50 to-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Common Questions
                      </h3>
                      <p className="text-sm text-gray-600">
                        {filteredFaqs.length} questions • Click to expand
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Verified Information
                    </span>
                  </div>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="divide-y divide-gray-100">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer transition-all duration-300 hover:bg-blue-50/50"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <div className="px-6 py-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                {faq.icon}
                              </div>
                              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                                {faq.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                              {faq.question}
                            </h3>

                            <div
                              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                openIndex === index
                                  ? "max-h-96 opacity-100 translate-y-0"
                                  : "max-h-0 opacity-0 translate-y-2"
                              }`}
                            >
                              <div className="pt-4 pb-2">
                                <div className="pl-4 border-l-2 border-blue-500">
                                  <p className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                  {index === 1 && (
                                    <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                                      <p className="text-sm text-emerald-800">
                                        <span className="font-semibold">
                                          Tip:
                                        </span>{" "}
                                        Always verify the pharmacy's license
                                        before purchasing medication online.
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="shrink-0 ml-4">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                openIndex === index
                                  ? "bg-blue-600 text-white rotate-180"
                                  : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                              }`}
                            >
                              <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-16 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      No FAQs match your search for "{searchTerm}". Try a
                      different term or browse by category.
                    </p>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>

              {/* FAQ Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Information provided by licensed pharmacists and medical
                    professionals
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      Medically Reviewed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-white to-blue-50 p-5 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Medical Library
                    </p>
                    <p className="text-sm text-gray-600">Detailed guides</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Access comprehensive information about medications and
                  treatments
                </p>
              </div>

              <div className="bg-linear-to-br from-white to-emerald-50 p-5 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Health Tips</p>
                    <p className="text-sm text-gray-600">Stay informed</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Get the latest health advice and wellness recommendations
                </p>
              </div>

              <div className="bg-linear-to-br from-white to-purple-50 p-5 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Expert Guidance
                    </p>
                    <p className="text-sm text-gray-600">
                      Certified healthcare
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Verified medical information from trusted sources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
