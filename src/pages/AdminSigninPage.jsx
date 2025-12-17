import { Link, useNavigate } from "react-router-dom";
import AdminSubmitButton from "../components/AdminSubmitButton";
import ValidationHelper from "../utility/ValidationHelper";
import AdminStore from "../store/AdminStore";
import toast from "react-hot-toast";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

const AdminSigninPage = () => {
  let navigate = useNavigate();
  const { AdminFormData, AdminFormChange, LoginRequest } = AdminStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(AdminFormData.email)) {
      toast.error("Valid email address required!");
    } else {
      let res = await LoginRequest(AdminFormData);
      if (res) {
        toast.success("Logged in Successfully");
        navigate("/admin-dashboard");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* FORM */}
        <div className="w-full max-w-md">
          <div className="bg-white text-gray-500 w-full p-6 sm:p-8 text-left text-sm rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
              Admin Sign In
            </h2>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Email
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <TfiEmail className="text-blue-900 " />
                <input
                  value={AdminFormData.email}
                  onChange={(e) => AdminFormChange("email", e.target.value)}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="email"
                  placeholder="Company email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Password
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <RiLockPasswordLine className="text-blue-900" />
                <input
                  value={AdminFormData.password}
                  onChange={(e) => AdminFormChange("password", e.target.value)}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <AdminSubmitButton
              onClick={onFormSubmit}
              text="Sign In"
              className="w-full mb-4 bg-linear-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98] py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-100"
            />

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-indigo-600 hover:text-indigo-800 font-medium underline transition-colors duration-200"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSigninPage;
