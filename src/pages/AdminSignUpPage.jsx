import { AiOutlineMail } from "react-icons/ai";
import { FaImage, FaLocationArrow, FaRegEye } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const AdminSignUpPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* FORM */}
        <div className="w-full max-w-md">
          <div className="bg-white text-gray-500 w-full p-6 sm:p-8 text-left text-sm rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
              Admin Sign Up
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
            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Password
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <RiLockPasswordLine className="text-blue-800" />
                <input
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="password"
                  placeholder="password"
                  defaultValue="••••••••"
                />
                <FaRegEye />
              </div>
            </div>
             {/* Name Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Name
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <MdOutlineDriveFileRenameOutline className="text-blue-800" />
                <input
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="text"
                  placeholder="Company Name"
                  defaultValue="MedInsight Pharmaceuticals"
                />
              </div>
            </div>
 {/* Image Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Image URL
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <FaImage className="text-blue-800" />
                <input
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="text"
                  placeholder="Company Image URL"
                  defaultValue="https://example.com/logo.png"
                />
              </div>
            </div>

            {/* Location Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Location
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <FaLocationArrow className="text-blue-800" />
                <input
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="text"
                  placeholder="Company Location"
                  defaultValue="New York, USA"
                />
              </div>
            </div>


  {/* Description Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Description
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <textarea
                  rows={4}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  placeholder="Enter a bio..."
                  defaultValue="Leading pharmaceutical company focused on innovative healthcare solutions and patient wellness."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full mb-4 bg-linear-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98] py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-100">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUpPage;

