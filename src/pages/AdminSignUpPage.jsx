import React from "react";

const AdminSignUpPage = () => {
  let navigate = useNavigate();
  const { RegisterFormData, RegisterFormChange, AdminRegisterRequest } =
    AdminStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(RegisterFormData.email)) {
      toast.error("Valid Email Required!");
    } else {
      let res = await AdminRegisterRequest(RegisterFormData);
      if (res) {
        AdminStore.getState().RegisterFormChange(
          "email",
          RegisterFormData.email
        );
        navigate("/signin");
        toast.success("Company Registered Successfully.");
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
              Admin Sign Up
            </h2>
             {/* Email Field */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Email
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <img src="/icon/email.svg" alt="Email icon" />
                <input
                  value={RegisterFormData.email}
                  onChange={(e) => RegisterFormChange("email", e.target.value)}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="email"
                  placeholder="Company Email"
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
                <img src="/icon/password.svg" alt="Password icon" />
                <input
                  value={RegisterFormData.password}
                  onChange={(e) =>
                    RegisterFormChange("password", e.target.value)
                  }
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="password"
                  placeholder="password"
                  required
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
                <img src="/icon/name.svg" alt="Name icon" />
                <input
                  value={RegisterFormData.name}
                  onChange={(e) => RegisterFormChange("name", e.target.value)}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            </div>
 {/* Image Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Image URL
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <img src="/icon/image.svg" alt="Image icon" />
                <input
                  value={RegisterFormData.image}
                  onChange={(e) => RegisterFormChange("image", e.target.value)}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="text"
                  placeholder="Company Image URL"
                  required
                />
              </div>
            </div>

            {/* Location Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Location
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <img src="/icon/location.svg" alt="Location icon" />
                <input
                  value={RegisterFormData.location}
                  onChange={(e) =>
                    RegisterFormChange("location", e.target.value)
                  }
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="text"
                  placeholder="Company Location"
                  required
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
                  onChange={(e) =>
                    RegisterFormChange("shortDes", e.target.value)
                  }
                  value={RegisterFormData.shortDes}
                  rows={4}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  placeholder="Enter a bio..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full mb-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98] py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-100">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUpPage;
