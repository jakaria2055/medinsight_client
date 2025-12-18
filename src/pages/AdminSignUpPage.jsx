import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AdminSubmitButton from "../components/AdminSubmitButton";
import AdminStore from "../store/AdminStore";
import ValidationHelper from "../utility/ValidationHelper";
import toast from "react-hot-toast";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdDescription, MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegImage } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import {
  Building2,
  Shield,
  CheckCircle,
  Upload,
  Eye,
  EyeOff,
  Globe,
  UserPlus,
} from "lucide-react";

const AdminSignUpPage = () => {
  let navigate = useNavigate();
  const { RegisterFormData, RegisterFormChange, AdminRegisterRequest } =
    AdminStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(RegisterFormData.email)) {
      toast.error("Valid Email Required!");
      return;
    }

    setIsLoading(true);
    try {
      let res = await AdminRegisterRequest(RegisterFormData);
      if (res) {
        AdminStore.getState().RegisterFormChange(
          "email",
          RegisterFormData.email
        );
        toast.success("Company Registered Successfully!");
        navigate("/signin");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong during registration.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <UserPlus className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Company <span className="text-blue-600">Registration</span>
            </h1>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Register your pharmaceutical company to access the management
            dashboard
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <span className="font-bold">1</span>
              </div>
              <div className="hidden sm:block">
                <p
                  className={`text-sm font-medium ${
                    step >= 1 ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  Account Setup
                </p>
              </div>
            </div>

            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div
                className={`h-full ${step >= 2 ? "bg-blue-600" : ""}`}
                style={{ width: step >= 2 ? "100%" : "0%" }}
              ></div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <span className="font-bold">2</span>
              </div>
              <div className="hidden sm:block">
                <p
                  className={`text-sm font-medium ${
                    step >= 2 ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  Company Info
                </p>
              </div>
            </div>

            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div
                className={`h-full ${step >= 3 ? "bg-blue-600" : ""}`}
                style={{ width: step >= 3 ? "100%" : "0%" }}
              ></div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <span className="font-bold">3</span>
              </div>
              <div className="hidden sm:block">
                <p
                  className={`text-sm font-medium ${
                    step >= 3 ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  Complete
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-20">
          {/* Left Column - Info Panel */}
          <div className="w-full lg:w-2/5 max-w-xl">
            <div className="bg-linear-to-br from-blue-50/50 to-indigo-50/50 border border-blue-100 rounded-2xl p-8 shadow-lg h-full">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Enterprise Registration
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Join Our Pharmaceutical Network
                </h2>
                <p className="text-gray-600 mb-8">
                  Register your company to access advanced inventory management,
                  analytics dashboard, and streamline your pharmaceutical
                  operations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Secure Platform
                    </h4>
                    <p className="text-sm text-gray-600">
                      Enterprise-grade security with encrypted data and
                      compliance standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Company Profile
                    </h4>
                    <p className="text-sm text-gray-600">
                      Create a verified profile to establish credibility in the
                      network
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Global Access
                    </h4>
                    <p className="text-sm text-gray-600">
                      Access your dashboard from anywhere with our secure cloud
                      platform
                    </p>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="mt-10 p-6 bg-linear-to-br from-white to-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Registration Requirements
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    Valid pharmaceutical company email address
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    Minimum 8 character password with special characters
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    Official company name and location
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-3/5 max-w-2xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      Register Your Company
                    </h2>
                    <p className="text-blue-100/90 text-sm">
                      Step {step} of 3 • Fill in your company details
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Step 1: Account Setup */}
                  {step === 1 && (
                    <>
                      {/* Email Field */}
                      <div className="md:col-span-2">
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
                            value={RegisterFormData.email}
                            onChange={(e) =>
                              RegisterFormChange("email", e.target.value)
                            }
                            className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-blue-400"
                            type="email"
                            placeholder="contact@yourcompany.com"
                            required
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Use your official company email address
                        </p>
                      </div>

                      {/* Password Field */}
                      <div className="md:col-span-2">
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
                            value={RegisterFormData.password}
                            onChange={(e) =>
                              RegisterFormChange("password", e.target.value)
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
                        <div className="mt-2">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                RegisterFormData.password.length >= 8
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            ></div>
                            <span>Minimum 8 characters</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 2: Company Information */}
                  {step === 2 && (
                    <>
                      {/* Company Name Field */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Company Name</span>
                          </div>
                        </label>
                        <div className="relative group">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600/80">
                            <MdDriveFileRenameOutline className="w-5 h-5" />
                          </div>
                          <input
                            value={RegisterFormData.name}
                            onChange={(e) =>
                              RegisterFormChange("name", e.target.value)
                            }
                            className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-blue-400"
                            type="text"
                            placeholder="Pharmaceutical Company Ltd."
                            required
                          />
                        </div>
                      </div>

                      {/* Company Location Field */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Company Headquarters</span>
                          </div>
                        </label>
                        <div className="relative group">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600/80">
                            <GrMapLocation className="w-5 h-5" />
                          </div>
                          <input
                            value={RegisterFormData.location}
                            onChange={(e) =>
                              RegisterFormChange("location", e.target.value)
                            }
                            className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-blue-400"
                            type="text"
                            placeholder="123 Business Ave, City, Country"
                            required
                          />
                        </div>
                      </div>

                      {/* Company Image URL Field */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Company Logo URL</span>
                          </div>
                        </label>
                        <div className="relative group">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600/80">
                            <FaRegImage className="w-5 h-5" />
                          </div>
                          <input
                            value={RegisterFormData.image}
                            onChange={(e) =>
                              RegisterFormChange("image", e.target.value)
                            }
                            className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-gray-400 group-hover:border-blue-400"
                            type="text"
                            placeholder="https://example.com/logo.png"
                            required
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Provide a direct URL to your company logo (PNG, JPG,
                          SVG)
                        </p>
                      </div>
                    </>
                  )}

                  {/* Step 3: Description and Final */}
                  {step === 3 && (
                    <>
                      {/* Company Description Field */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Company Description</span>
                          </div>
                        </label>
                        <div className="relative group">
                          <div className="absolute left-3 top-4 text-blue-600/80">
                            <MdDescription className="w-5 h-5" />
                          </div>
                          <textarea
                            onChange={(e) =>
                              RegisterFormChange("shortDes", e.target.value)
                            }
                            value={RegisterFormData.shortDes}
                            rows={6}
                            className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-gray-400 resize-none group-hover:border-blue-400"
                            placeholder="Describe your company, mission, and pharmaceutical specialties..."
                          ></textarea>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Brief description of your company (max 500 characters)
                        </p>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="md:col-span-2">
                        <div className="p-4 bg-linear-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              id="terms"
                              className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <label
                              htmlFor="terms"
                              className="text-sm text-gray-700"
                            >
                              I agree to the{" "}
                              <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                              >
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                              >
                                Privacy Policy
                              </a>
                              . I confirm that I am an authorized representative
                              of this pharmaceutical company.
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <button
                      type="button"
                      onClick={() => navigate("/signin")}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 w-full sm:w-auto"
                    >
                      Back to Login
                    </button>

                    <div className="flex gap-4 w-full sm:w-auto">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-3 border-2 border-blue-200 text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-all duration-200 w-full sm:w-auto"
                        >
                          Previous Step
                        </button>
                      )}

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
                        >
                          Continue to Step {step + 1}
                        </button>
                      ) : (
                        <button
                          onClick={onFormSubmit}
                          disabled={isLoading}
                          className="px-10 py-3.5 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 hover:shadow-xl hover:shadow-green-500/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                        >
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Registering Company...</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-5 h-5" />
                              <span>Complete Registration</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Already have account */}
                <div className="text-center mt-8">
                  <p className="text-gray-600 text-sm">
                    Already have an account?{" "}
                    <Link
                      to={"/signin"}
                      className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 decoration-2 transition-colors group"
                    >
                      Sign In Here
                      <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-8 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>Secure Registration</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Encrypted Data
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>24/7 Support</span>
                    <a
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUpPage;
