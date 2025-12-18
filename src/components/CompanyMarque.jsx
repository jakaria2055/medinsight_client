import { Building2, Shield, Award, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";

function CompanyMarque() {
  const companyLogos = [
    "/image/ACI.png",
    "/image/ACME.png",
    "/image/BEXIMCOpng.png",
    "/image/BIOPHARMA.png",
    "/image/GENERAL.jpg",
    "/image/IBNESINA.png",
    "/image/INSEPTA.png",
    "/image/RENATA.png",
    "/image/SQUARE.png",
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(15);

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Certified Sources",
      description: "All medicines from licensed manufacturers",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Quality Assured",
      description: "GMP certified production facilities",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Industry Leaders",
      description: "Top pharmaceutical companies",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Partners</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certified Pharmaceutical
            <span className="block text-blue-600">Brands & Partners</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate exclusively with certified pharmaceutical
            manufacturers to ensure the highest quality and safety standards for
            all medicine information.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Marquee */}
        <div className="relative group">
          {/* Marquee Container */}
          <div
            className="overflow-hidden relative py-8 px-4 bg-linear-to-br from-white to-blue-50/50 rounded-2xl border border-gray-200 shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-linear-to-r from-white via-white/90 to-transparent" />

            {/* Right Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-linear-to-l from-white via-white/90 to-transparent" />

            {/* Marquee Track 1 */}
            <div
              className={`flex items-center space-x-12 min-w-full ${
                isPaused ? "animation-paused" : ""
              }`}
              style={{
                animation: `marquee ${scrollSpeed}s linear infinite`,
                width: "calc(200%)",
              }}
            >
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div key={index} className="relative group/logo shrink-0">
                  <div className="relative p-6 bg-white rounded-xl border border-gray-200 shadow-sm group-hover/logo:shadow-lg group-hover/logo:border-blue-300 transition-all duration-300">
                    {/* Logo Container */}
                    <div className="w-32 h-24 flex items-center justify-center p-4">
                      <img
                        src={logo}
                        alt={`Pharmaceutical company logo ${index + 1}`}
                        className="w-full h-full object-contain filter group-hover/logo:scale-105 transition-transform duration-300"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>

                    {/* Hover Badge */}
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300">
                      <div className="px-2 py-1 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full">
                        Certified
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Marquee Track 2 (Behind for continuous effect) */}
            <div
              className={`flex items-center space-x-12 min-w-full absolute top-8 ${
                isPaused ? "animation-paused" : ""
              }`}
              style={{
                animation: `marquee ${scrollSpeed + 2}s linear infinite`,
                width: "calc(200%)",
                left: "100%",
              }}
            >
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div key={`track2-${index}`} className="shrink-0">
                  <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm opacity-70">
                    <div className="w-32 h-24 flex items-center justify-center p-4">
                      <img
                        src={logo}
                        alt={`Pharmaceutical company logo ${index + 1}`}
                        className="w-full h-full object-contain"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speed Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-sm text-gray-600">Scroll Speed:</span>
            <div className="flex items-center gap-2">
              {[12, 15, 18].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setScrollSpeed(speed)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    scrollSpeed === speed
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {speed}s
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-linear-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                {companyLogos.length}+
              </p>
              <p className="text-gray-700 font-medium">Trusted Brands</p>
              <p className="text-sm text-gray-600 mt-1">GMP Certified</p>
            </div>
          </div>

          <div className="bg-linear-to-br from-emerald-50 to-white rounded-xl p-6 border border-emerald-200">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">
                1000+
              </p>
              <p className="text-gray-700 font-medium">Medicines</p>
              <p className="text-sm text-gray-600 mt-1">Verified Information</p>
            </div>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-200">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">
                24/7
              </p>
              <p className="text-gray-700 font-medium">Quality Check</p>
              <p className="text-sm text-gray-600 mt-1">
                Continuous Monitoring
              </p>
            </div>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-white rounded-xl p-6 border border-amber-200">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
                99.8%
              </p>
              <p className="text-gray-700 font-medium">Accuracy Rate</p>
              <p className="text-sm text-gray-600 mt-1">Verified Data</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Pharmaceutical Partnerships
              </h3>
            </div>
            <p className="text-gray-600">
              Our partnerships with leading pharmaceutical companies ensure that
              all medicine information is accurate, up-to-date, and verified by
              medical professionals. We only work with manufacturers who meet
              the highest standards of quality and safety.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Animation Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animation-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}

export default CompanyMarque;
