import React from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question:
        "What's the difference between brand-name and generic medicine?",
      answer:
        "The main difference is cost. Generics have the same active ingredient and effectiveness as brand-name drugs but are much cheaper.",
    },
    {
      question: " Is it safe to buy medicine online?",
      answer:
        "Only from licensed pharmacies that require a prescription. Avoid sites that sell without one.",
    },
    {
      question: "Can I stop taking medicine when I feel better?",
      answer:
        "No. Always finish the full course as prescribed by your doctor to prevent relapse.",
    },
    {
      question: "What does (take with food) mean?",
      answer:
        "Take the medicine during or right after a meal to prevent stomach upset.",
    },
    {
      question: " What if I miss a dose?",
      answer:
        "Take it as soon as you remember. If it's almost time for the next dose, skip the missed one. Never double the dose.",
    },
    {
      question: " How should I store my medicine?",
      answer:
        " In a cool, dry place away from sunlight and moisture. Keep out of reach of children.",
    },
  ];

  return (
    <div className="mt-16">
      {/* Use Tailwind fonts via global CSS ideally, but inline import also works */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-0 py-10">
        {/* Left side image */}
        <div className="flex-1 flex">
          <img
            className="w-full h-full object-cover rounded-xl shadow-md"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
            alt="FAQ illustration"
          />
        </div>

        {/* FAQ Section */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-indigo-600 text-sm font-medium uppercase">FAQs</p>
          <h1 className="text-3xl font-semibold mb-2">Looking for answers?</h1>
          <p className="text-sm text-slate-500 mb-4">
            Your questions, clearly answered. Find quick help for common health
            and medicine queries.
          </p>

          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="border-b border-slate-200 py-4 cursor-pointer select-none"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{faq.question}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-500 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 translate-y-0 pt-3"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <p className="text-sm text-slate-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
