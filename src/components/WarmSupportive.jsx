import { useState } from "react";
import {
  Droplets,
  Apple,
  Activity,
  Moon,
  Heart,
  ChevronRight,
  Sparkles,
  Target,
  Zap,
  Shield,
} from "lucide-react";

export default function WarmSupportive() {
  const [activeCard, setActiveCard] = useState(null);

  const wellnessTips = [
    {
      id: 1,
      title: "Hydration Mastery",
      subtitle: "Fuel Your Body",
      description:
        "Water is essential for energy, focus, and cellular function. Aim for 8-10 glasses daily to optimize metabolism and detoxification.",
      icon: <Droplets className="w-6 h-6" />,
      image: "/image/warm_water.jpg",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-linear-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      tips: [
        "Drink water upon waking",
        "Carry a reusable bottle",
        "Infuse with fruits for flavor",
      ],
      stat: "2L/Day",
      fact: "Proper hydration can boost metabolism by 30%",
    },
    {
      id: 2,
      title: "Nutrition Harmony",
      subtitle: "Nourish to Flourish",
      description:
        "A balanced diet rich in whole foods provides essential nutrients for optimal body function and disease prevention.",
      icon: <Apple className="w-6 h-6" />,
      image: "/image/warm_food.jpg",
      color: "from-emerald-500 to-green-400",
      bgColor: "bg-linear-to-br from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      tips: [
        "Eat colorful vegetables",
        "Choose whole grains",
        "Include lean proteins",
      ],
      stat: "5+ Colors",
      fact: "Each food color provides unique antioxidants",
    },
    {
      id: 3,
      title: "Active Lifestyle",
      subtitle: "Get Active, Feel Alive",
      description:
        "Regular physical activity boosts mood, strengthens immunity, and increases energy levels throughout the day.",
      icon: <Activity className="w-6 h-6" />,
      image: "/image/warm_exercise.jpg",
      color: "from-orange-500 to-amber-400",
      bgColor: "bg-linear-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      tips: [
        "30 minutes daily",
        "Mix cardio and strength",
        "Take walking breaks",
      ],
      stat: "150 Min/Week",
      fact: "Exercise releases endorphins - natural mood lifters",
    },
    {
      id: 4,
      title: "Quality Sleep",
      subtitle: "Your Nightly Reset",
      description:
        "Deep sleep improves memory consolidation, cellular repair, and immune system function for overall wellness.",
      icon: <Moon className="w-6 h-6" />,
      image: "/image/warm_sleep.jpg",
      color: "from-indigo-500 to-purple-400",
      bgColor: "bg-linear-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      tips: [
        "Consistent sleep schedule",
        "Dark, cool room",
        "Digital detox before bed",
      ],
      stat: "7-9 Hours",
      fact: "Sleep cleanses brain toxins accumulated during the day",
    },
    {
      id: 5,
      title: "Mindful Relaxation",
      subtitle: "Find Your Calm",
      description:
        "Stress management through mindfulness reduces cortisol levels and promotes emotional balance and mental clarity.",
      icon: <Heart className="w-6 h-6" />,
      image: "/image/warm_relax.jpg",
      color: "from-rose-500 to-pink-400",
      bgColor: "bg-linear-to-br from-rose-50 to-pink-50",
      borderColor: "border-rose-200",
      tips: ["5-minute meditation", "Deep breathing exercises", "Nature walks"],
      stat: "10 Min/Day",
      fact: "Meditation can reduce anxiety by up to 60%",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Wellness Journey</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Warm & Supportive
            <span className="block text-blue-600">Wellness Guide</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover simple, evidence-based tips to nourish your body, mind, and
            spirit for holistic well-being.
          </p>
        </div>

        {/* Wellness Tips Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {wellnessTips.map((tip) => (
              <button
                key={tip.id}
                onClick={() =>
                  setActiveCard(activeCard === tip.id ? null : tip.id)
                }
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeCard === tip.id
                    ? `${tip.borderColor} ${tip.bgColor} scale-105 shadow-lg`
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center bg-linear-to-br ${tip.color}`}
                  >
                    {tip.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{tip.title}</p>
                    <p className="text-xs text-gray-500">{tip.stat}</p>
                  </div>
                </div>
                <div
                  className={`h-1 w-full rounded-full bg-linear-to-r ${tip.color} mb-3`}
                ></div>
                <p className="text-sm text-gray-600 text-left line-clamp-2">
                  {tip.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Cards */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Column - Expanded Card View */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Card Header */}
              <div className="bg-linear-to-r from-gray-900 to-gray-800 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {activeCard
                        ? wellnessTips.find((t) => t.id === activeCard)?.title
                        : "Wellness Insights"}
                    </h2>
                    <p className="text-gray-300 text-sm">
                      {activeCard
                        ? "Detailed guidance"
                        : "Hover over cards to explore"}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {activeCard ? (
                  <div className="space-y-8">
                    {/* Selected Card Details */}
                    {(() => {
                      const tip = wellnessTips.find((t) => t.id === activeCard);
                      return (
                        <>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Image Section */}
                            <div className="relative">
                              <div className="bg-linear-to-br from-gray-100 to-white rounded-xl p-2 border border-gray-200">
                                <div className="aspect-video rounded-lg overflow-hidden bg-linear-to-br from-gray-200 to-gray-300">
                                  <img
                                    src={tip.image}
                                    alt={tip.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>
                              </div>

                              {/* Quick Stat */}
                              <div className="absolute -top-3 -right-3">
                                <div
                                  className={`px-4 py-2 rounded-lg bg-linear-to-br ${tip.color} text-white font-bold shadow-lg`}
                                >
                                  {tip.stat}
                                </div>
                              </div>
                            </div>

                            {/* Information Section */}
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {tip.subtitle}
                              </h3>
                              <p className="text-gray-700 leading-relaxed mb-6">
                                {tip.description}
                              </p>

                              {/* Quick Tips */}
                              <div className="bg-linear-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Zap className="w-4 h-4 text-amber-600" />
                                  Quick Tips
                                </h4>
                                <ul className="space-y-2">
                                  {tip.tips.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-center gap-2 text-sm text-gray-600"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-cyan-400"></div>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Fun Fact */}
                              <div
                                className={`rounded-xl p-4 border ${tip.borderColor} ${tip.bgColor}`}
                              >
                                <div className="flex items-start gap-3">
                                  <Shield className="w-5 h-5 text-gray-700 mt-0.5" />
                                  <div>
                                    <p className="text-sm font-medium text-gray-900 mb-1">
                                      Did You Know?
                                    </p>
                                    <p className="text-sm text-gray-700">
                                      {tip.fact}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Steps */}
                          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                            <h4 className="font-semibold text-gray-900 mb-4">
                              Your Action Plan
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {[
                                "Set a Daily Reminder",
                                "Track Your Progress",
                                "Share with Friends",
                              ].map((action, idx) => (
                                <div
                                  key={idx}
                                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                                      <span className="text-blue-600 font-bold">
                                        {idx + 1}
                                      </span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">
                                      {action}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  // Default State
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Explore Wellness Dimensions
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                      Click on any wellness category above to see detailed
                      guidance, practical tips, and scientific insights for
                      holistic health.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Evidence-based</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Practical tips</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Holistic approach</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Wellness Stats */}
          <div className="lg:w-1/3 space-y-6">
            {/* Daily Wellness Tracker */}
            <div className="bg-linear-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-blue-600 rounded-full"></div>
                Daily Wellness Tracker
              </h3>

              <div className="space-y-4">
                {[
                  {
                    label: "Water Intake",
                    value: "2.1L",
                    target: "2.5L",
                    color: "bg-blue-500",
                  },
                  {
                    label: "Active Minutes",
                    value: "45min",
                    target: "60min",
                    color: "bg-emerald-500",
                  },
                  {
                    label: "Sleep Quality",
                    value: "7.2h",
                    target: "8h",
                    color: "bg-indigo-500",
                  },
                  {
                    label: "Mindful Minutes",
                    value: "15min",
                    target: "20min",
                    color: "bg-rose-500",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-600">
                        {item.value} / {item.target}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-500`}
                        style={{
                          width: `${
                            (parseFloat(item.value) / parseFloat(item.target)) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 px-4 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2">
                Update Progress
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Weekly Challenge */}
            <div className="bg-linear-to-br from-emerald-50 to-white rounded-2xl shadow-lg border border-emerald-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Weekly Challenge
                  </h4>
                  <p className="text-sm text-gray-600">7-day mindfulness</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  Complete 10 minutes of meditation or deep breathing every day
                  this week.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Progress: 4/7 days</span>
                  <span className="font-medium text-emerald-600">57%</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(7)].map((_, idx) => (
                    <div
                      key={idx}
                      className={`flex-1 h-2 rounded-full ${
                        idx < 4 ? "bg-emerald-500" : "bg-gray-200"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Support */}
            <div className="bg-linear-to-br from-purple-50 to-white rounded-2xl shadow-lg border border-purple-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Join Our Community
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Connect with others on their wellness journey and share
                experiences.
              </p>
              <div className="flex -space-x-3 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full border-2 border-white bg-linear-to-br from-blue-400 to-purple-500"
                  ></div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">+24</span>
                </div>
              </div>
              <button className="w-full px-4 py-2.5 bg-white border-2 border-purple-300 text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors">
                Explore Groups
              </button>
            </div>
          </div>
        </div>

        {/* Wellness Principles */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Core Wellness Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "Consistency",
                desc: "Small daily habits > occasional extremes",
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "Balance",
                desc: "Nourish all aspects of well-being",
                color: "from-emerald-400 to-green-400",
              },
              {
                title: "Listen",
                desc: "Your body knows what it needs",
                color: "from-amber-400 to-orange-400",
              },
              {
                title: "Progress",
                desc: "Celebrate every step forward",
                color: "from-purple-400 to-pink-400",
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`h-1 w-full rounded-full bg-linear-to-r ${principle.color} mb-4`}
                ></div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {principle.title}
                </h4>
                <p className="text-sm text-gray-600">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
