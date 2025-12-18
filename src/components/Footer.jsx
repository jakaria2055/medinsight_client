import {
  Heart,
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Quick Links": [
      { label: "Home", href: "/" },
      { label: "Medicine Search", href: "/medicine-search" },
      { label: "FAQ", href: "/faq" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    Resources: [
      { label: "Medicine Database", href: "/medicines" },
      { label: "Health Articles", href: "/articles" },
      { label: "Drug Interactions", href: "/interactions" },
      { label: "Dosage Calculator", href: "/calculator" },
      { label: "Side Effects Guide", href: "/side-effects" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR Compliance", href: "/gdpr" },
      { label: "HIPAA Compliance", href: "/hipaa" },
    ],
    Company: [
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Support", href: "/support" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start lg:items-start">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    <span className="text-blue-400">Med</span>Insight
                  </h2>
                  <p className="text-sm text-gray-400">
                    Trusted Medical Information
                  </p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 max-w-xs">
                Your comprehensive guide to pharmaceutical information,
                providing accurate, verified, and up-to-date medical data.
              </p>

              <div className="flex items-center gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">
                {category}
                <div className="h-0.5 w-12 bg-linear-to-r from-blue-600 to-indigo-600 mt-2"></div>
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 ml-auto transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Emergency Support</p>
                  <p className="text-white font-medium">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Address</p>
                  <p className="text-white font-medium">
                    support@medinsight.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Headquarters</p>
                  <p className="text-white font-medium">
                    123 Medical Center, San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest medical updates and
              health tips.
            </p>
            <div className="flex gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-gray-800 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-400">
                <span className="text-green-500 font-medium">HIPAA</span>{" "}
                Compliant
              </span>
            </div>
            <div className="hidden lg:block w-px h-4 bg-gray-800"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-400">
                <span className="text-blue-500 font-medium">GDPR</span>{" "}
                Compliant
              </span>
            </div>
            <div className="hidden lg:block w-px h-4 bg-gray-800"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-500" />
              <span className="text-sm text-gray-400">
                <span className="text-purple-500 font-medium">SSL</span>{" "}
                Encrypted
              </span>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-sm text-gray-400 mb-2">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-semibold">MedInsight</span>. All
              rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Made with <Heart className="w-3 h-3 inline text-red-500" /> for
              better healthcare worldwide
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-900">
          <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> The information provided on this
            website is for educational purposes only and is not a substitute for
            professional medical advice. Always consult with a qualified
            healthcare provider regarding any medical conditions or concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
