import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AdminStore from "../store/AdminStore";
import {
  Menu,
  X,
  LogOut,
  Home,
  Shield,
  User,
  Bell,
  Search,
  ChevronDown,
  Settings,
} from "lucide-react";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdmin, UserLogoutRequest } = AdminStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);

  // Check if user is admin
  const adminStatus = isAdmin();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
    setAdminDropdownOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleAdminDropdown = () => setAdminDropdownOpen(!adminDropdownOpen);

  const handleLogout = async () => {
    await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
    setAdminDropdownOpen(false);
  };

  // Navigation items
  const navItems = [
    { label: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { label: "FAQ", path: "/faq", icon: <Shield className="w-4 h-4" /> },
  ];

  const adminNavItems = [
    {
      label: "Dashboard",
      path: "/admin-dashboard",
      icon: <Home className="w-4 h-4" />,
    },
    {
      label: "Add Medicine",
      path: "/add-medicine",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-linear-to-r from-blue-600 via-blue-700 to-indigo-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  scrolled
                    ? "bg-linear-to-br from-blue-600 to-indigo-600"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Shield
                  className={`w-6 h-6 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                />
              </div>
              <div className="hidden md:block">
                <h1
                  className={`text-xl font-bold ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  <span className={scrolled ? "text-blue-600" : "text-white"}>
                    Med
                  </span>
                  Insight
                </h1>
                <p
                  className={`text-xs ${
                    scrolled ? "text-gray-600" : "text-blue-100"
                  }`}
                >
                  Trusted Medical Information
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      location.pathname === item.path
                        ? scrolled
                          ? "bg-blue-50 text-blue-700"
                          : "bg-white/20 text-white"
                        : scrolled
                          ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Admin Section */}
              <div className="relative">
                {adminStatus ? (
                  <div className="flex items-center gap-4">
                    {/* Admin Nav Items */}
                    {adminNavItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? "bg-linear-to-r from-emerald-600 to-emerald-700 text-white"
                            : scrolled
                              ? "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                              : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}

                    {/* Admin Profile Dropdown */}
                    <div className="relative">
                      <button
                        onClick={toggleAdminDropdown}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                          scrolled
                            ? "bg-gray-100 hover:bg-gray-200 text-gray-800"
                            : "bg-white/20 hover:bg-white/30 text-white"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium hidden lg:inline">
                          Admin
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            adminDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {adminDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                          <div className="p-4 border-b border-gray-100">
                            <p className="font-semibold text-gray-900">
                              Admin Account
                            </p>
                            <p className="text-sm text-gray-500">
                              Administrator
                            </p>
                          </div>
                          <div className="p-2">
                            <Link
                              to="/admin-dashboard"
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors"
                            >
                              <Home className="w-4 h-4" />
                              <span>Dashboard</span>
                            </Link>
                            <Link
                              to="/settings"
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors"
                            >
                              <Settings className="w-4 h-4" />
                              <span>Settings</span>
                            </Link>
                            <button
                              onClick={handleLogout}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-700 transition-colors mt-2"
                            >
                              <LogOut className="w-4 h-4" />
                              <span>Logout</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/signin"
                    className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      scrolled
                        ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
                        : "bg-white text-blue-700 hover:bg-blue-50 hover:shadow-lg"
                    }`}
                  >
                    <Shield className="w-4 h-4" />
                    Admin Login
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Menu Header */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">MedInsight</h2>
                    <p className="text-blue-100 text-sm">Navigation Menu</p>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-white hover:bg-white/20 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {adminStatus && (
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Admin Account</p>
                      <p className="text-blue-100 text-sm">Administrator</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Menu Content */}
            <div className="p-4 overflow-y-auto h-[calc(100vh-200px)]">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                  Main Navigation
                </p>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        location.pathname === item.path
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}

                {adminStatus && (
                  <>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2 mt-4">
                      Admin Section
                    </p>
                    {adminNavItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          location.pathname === item.path
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            location.pathname === item.path
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-4 bg-gray-50">
              {adminStatus ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-all"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                >
                  <Shield className="w-5 h-5" />
                  <span>Admin Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
