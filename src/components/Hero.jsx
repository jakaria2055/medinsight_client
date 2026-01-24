import mediImage from "/image/medi.png";
import UserStore from "../store/UserStore";
import { Link } from "react-router-dom";
import {
  Search,
  Star,
  Users,
  Shield,
  Award,
  ChevronRight,
  Sparkles,
  Pill,
  Heart,
} from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const { SetSearchKeyword, SearchKeyword } = UserStore();
  const [isFocused, setIsFocused] = useState(false);

  const stats = [
    {
      label: "Verified Medicines",
      value: "500+",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      label: "Companies",
      value: "10,000+",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      label: "Accuracy Rate",
      value: "99.8%",
      icon: <Award className="w-4 h-4" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50/30 pt-10 pb-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="lg:w-1/2 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                Trusted Medicine Resource
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Your Complete
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Medicine Guide
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-lg">
              Access accurate, up-to-date medicine details including uses,
              dosage, side effects and safety information — all reviewed by
              medical professionals.
            </p>

            {/* Search Section */}
            <div className="mt-8 max-w-xl">
              <div
                className={`relative rounded-2xl transition-all duration-300 ${
                  isFocused ? "shadow-xl shadow-blue-500/10" : "shadow-lg"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur-md opacity-20 transition-opacity duration-300 ${
                    isFocused ? "opacity-30" : ""
                  }`}
                ></div>
                <div className="relative bg-white rounded-2xl border-2 border-transparent">
                  <div className="flex items-center p-2">
                    <div className="flex-1">
                      <div className="flex items-center px-4">
                        <Search className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                          value={SearchKeyword}
                          onChange={(e) => SetSearchKeyword(e.target.value)}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          type="text"
                          placeholder="Search medicine name (e.g., Paracetamol, Ibuprofen...)"
                          className="w-full py-4 text-gray-800 placeholder-gray-400 bg-transparent outline-none text-lg"
                        />
                      </div>
                    </div>
                    <Link
                      to={
                        SearchKeyword.length > 0
                          ? `/MedicineByKeyword/${SearchKeyword}`
                          : `/`
                      }
                      className="ml-2 mr-2 flex items-center gap-2 px-6 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                    >
                      <Search className="w-5 h-5" />
                      <span>Search</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                Verified medical information from trusted sources
              </p>

              {/* Quick Search Tags */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3">Quick search:</p>
                <div className="flex flex-wrap gap-3">
                  {["Paracetamol", "Ibuprofen", "Amoxicillin", "Vitamin D"].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          SetSearchKeyword(tag);
                          document.getElementById("search-input")?.focus();
                        }}
                        className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
                      >
                        {tag}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 w-3xl grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <div className="text-blue-600">{stat.icon}</div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-10">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* User Avatars */}
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
                    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
                  ].map((src, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={src}
                        alt="user"
                        className="w-12 h-12 border-3 border-white rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-3 border-white">
                    <span className="text-white font-bold text-sm">+1K</span>
                  </div>
                </div>

                {/* Ratings */}
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-amber-500 fill-amber-500"
                        />
                      ))}
                    </div>
                    <span className="text-gray-900 font-bold">4.9/5</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Trusted by <span className="font-semibold">10,000+</span>{" "}
                    healthcare professionals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 relative">
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 z-10">
              <div className="bg-linear-to-br from-emerald-500 to-green-600 text-white p-4 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">Verified Information</p>
                    <p className="text-sm opacity-90">Medically reviewed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -left-6 z-10">
              <div className="bg-white p-4 rounded-2xl shadow-xl max-w-xs border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Expert Guidance</p>
                    <p className="text-sm text-gray-600">
                      Certified healthcare professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[48px] opacity-20 blur-3xl"></div>
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-indigo-500/10 rounded-[48px]"></div>
              <div className="relative rounded-[48px] overflow-hidden border-8 border-white shadow-2xl">
                <img
                  className="w-full h-auto object-cover"
                  src={mediImage}
                  alt="Medical illustration"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Image Badge */}
            <div className="absolute -bottom-4 right-10 z-10">
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Pill className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Updated Daily</p>
                    <p className="text-xs opacity-90">Latest medical data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
