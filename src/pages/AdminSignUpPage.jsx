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
</div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUpPage;
