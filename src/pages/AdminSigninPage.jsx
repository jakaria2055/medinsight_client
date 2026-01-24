import { Link, useNavigate } from "react-router-dom";
import AdminSubmitButton from "../components/AdminSubmitButton";
import ValidationHelper from "../utility/ValidationHelper";
import AdminStore from "../store/AdminStore";
import toast from "react-hot-toast";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Shield, Key, LogIn, Eye, EyeOff, Building2 } from "lucide-react";
import { useState } from "react";

const AdminSigninPage = () => {
  let navigate = useNavigate();
  const { AdminFormData, AdminFormChange, LoginRequest } = AdminStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(AdminFormData.email)) {
      toast.error("Valid email address required!");
      return;
    }

    setIsLoading(true);
    try {
      let res = await LoginRequest(AdminFormData);
      if (res) {
        toast.success("Logged in Successfully!");
        navigate("/admin-dashboard");
      } else {
        toast.error("Invalid credentials or something went wrong");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Pharma<span className="text-blue-600">Admin</span>
            </h1>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Secure administration portal for pharmaceutical management
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Left Column - Illustration/Info */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <div className="bg-linear-to-br from-blue-50/50 to-indigo-50/50 border border-blue-100 rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium">Admin Portal</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Secure Pharmaceutical Management
                </h2>
                <p className="text-gray-600 mb-8">
                  Access your centralized dashboard to manage medicine
                  inventory, view analytics, and control pharmaceutical
                  operations with enterprise-grade security.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Enterprise Security
                    </h4>
                    <p className="text-sm text-gray-600">
                      Multi-layered security with encrypted sessions and
                      role-based access control
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <Key className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Secure Authentication
                    </h4>
                    <p className="text-sm text-gray-600">
                      Protected login with email verification and activity
                      monitoring
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Compliance Ready
                    </h4>
                    <p className="text-sm text-gray-600">
                      Meets pharmaceutical industry standards for data
                      protection and privacy
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>System Status: All Services Operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      Admin Sign In
                    </h2>
                    <p className="text-blue-100/90 text-sm">
                      Enter your credentials to access the dashboard
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <LogIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Company Email Address</span>
                      </div>
                    </label>
                    <div className="relative group">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600/80">
                        <TfiEmail className="w-5 h-5" />
                      </div>
                      <input
                        value={AdminFormData.email}
                        onChange={(e) =>
                          AdminFormChange("email", e.target.value)
                        }
                        className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-blue-400"
                        type="email"
                        placeholder="admin@pharmacorp.com"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Use your company-provided email address
                    </p>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Password</span>
                      </div>
                    </label>
                    <div className="relative group">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600/80">
                        <RiLockPasswordLine className="w-5 h-5" />
                      </div>
                      <input
                        value={AdminFormData.password}
                        onChange={(e) =>
                          AdminFormChange("password", e.target.value)
                        }
                        className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-blue-400"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-gray-500">
                        Minimum 8 characters with special characters
                      </p>
                      <button
                        type="button"
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <Shield className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-800 mb-1">
                          Security Notice
                        </p>
                        <p className="text-xs text-blue-600">
                          This system is for authorized personnel only. All
                          activities are logged and monitored.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      onClick={onFormSubmit}
                      disabled={isLoading}
                      className="w-full px-6 py-4 bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Authenticating...</span>
                        </>
                      ) : (
                        <>
                          <LogIn className="w-5 h-5" />
                          <span>Sign In to Dashboard</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Alternative Login Options */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm font-medium">Microsoft</span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <div className="w-5 h-5 bg-red-600 rounded-full"></div>
                      <span className="text-sm font-medium">Google</span>
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center pt-4">
                    <p className="text-gray-600 text-sm">
                      Need an admin account?{" "}
                      <Link
                        to={"/signup"}
                        className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 decoration-2 transition-colors group"
                      >
                        Sign Up
                        <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-8 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>v2.1.4</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Secure Connection
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Privacy
                    </a>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Terms
                    </a>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} PharmaAdmin. All rights reserved.
            <span className="mx-2">•</span>
            <span className="text-blue-600 font-medium">GDPR Compliant</span>
            <span className="mx-2">•</span>
            <span className="text-green-600 font-medium">HIPAA Certified</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSigninPage;
