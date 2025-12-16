import { AiOutlineMail } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";

const AdminSignInPage = () => {
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
                <AiOutlineMail className="text-blue-800" />
                <input
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="email"
                  placeholder="Company Email"
                  defaultValue="company@example.com"
                />
              </div>
            </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignInPage;