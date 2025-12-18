import AdminTaskStore from "../store/AdminTaskStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Upload,
  Pill,
  Tag,
  DollarSign,
  FileText,
  AlertTriangle,
  Plus,
} from "lucide-react";

const AddMedicinePage = () => {
  const navigate = useNavigate();
  const { AddFormData, MedicineFormChange, AddMedicineRequest } =
    AdminTaskStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await AddMedicineRequest(AddFormData);
    if (res) {
      navigate("/admin-dashboard");
      toast.success("Medicine Added Successfully.");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50/50 to-indigo-50/30 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Add New Medicine
              </h1>
              <p className="text-gray-600">
                Fill in the details below to add a new medicine to inventory
              </p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <span className="text-sm font-medium text-gray-700">
                Basic Info
              </span>
            </div>
            <div className="h-0.5 w-12 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <span className="text-sm text-gray-500">Medical Details</span>
            </div>
            <div className="h-0.5 w-12 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <span className="text-sm text-gray-500">Review & Submit</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Image & Basic Info */}
              <div className="space-y-6">
                {/* Image Upload */}
                <div className="bg-linear-to-br from-blue-50/50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Upload className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Product Image
                      </h3>
                      <p className="text-blue-600 text-sm">
                        Upload medicine image
                      </p>
                    </div>
                  </div>

                  <label
                    htmlFor="fileInput"
                    className="group relative block w-full border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Upload className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="absolute inset-0 bg-blue-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">
                      Drag & drop your image here
                    </p>
                    <p className="text-gray-500 text-sm">
                      Or{" "}
                      <span className="text-blue-600 font-semibold underline decoration-2 underline-offset-2">
                        click to browse
                      </span>{" "}
                      files
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      PNG, JPG, WEBP up to 5MB
                    </p>
                    <input
                      onChange={(e) =>
                        MedicineFormChange("image", e.target.files[0])
                      }
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>

                  {AddFormData.image && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-green-800 font-medium">
                            Image Selected
                          </p>
                          <p className="text-green-600 text-sm truncate">
                            {AddFormData.image.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Basic Information Card */}
                <div className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <div className="w-2 h-6 bg-blue-600 rounded-full"></div>
                    Basic Information
                  </h3>

                  <div className="space-y-5">
                    {/* Medicine Name */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-gray-700 font-medium mb-2"
                        htmlFor="product-name"
                      >
                        <Pill className="w-4 h-4 text-blue-600" />
                        Medicine Name
                      </label>
                      <input
                        value={AddFormData.name}
                        onChange={(e) =>
                          MedicineFormChange("name", e.target.value)
                        }
                        id="product-name"
                        type="text"
                        placeholder="e.g., Monas, Paracetamol, etc."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 placeholder:text-gray-400"
                        required
                      />
                    </div>

                    {/* Medicine Group */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-gray-700 font-medium mb-2"
                        htmlFor="product-group"
                      >
                        <Tag className="w-4 h-4 text-blue-600" />
                        Medicine Group
                      </label>
                      <input
                        value={AddFormData.group}
                        onChange={(e) =>
                          MedicineFormChange("group", e.target.value)
                        }
                        id="product-group"
                        type="text"
                        placeholder="e.g., Montelukast, NSAID, Antibiotic"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 placeholder:text-gray-400"
                        required
                      />
                    </div>

                    {/* Medicine Price */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-gray-700 font-medium mb-2"
                        htmlFor="product-price"
                      >
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        Current Price
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          $
                        </div>
                        <input
                          value={AddFormData.price}
                          onChange={(e) =>
                            MedicineFormChange("price", e.target.value)
                          }
                          id="product-price"
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="Per Piece"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Enter price in USD
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Medical Details */}
              <div className="space-y-6">
                {/* Effectiveness Card */}
                <div className="bg-linear-to-br from-emerald-50/50 to-white rounded-xl p-6 border border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Medicine Pharmacology
                      </h3>
                      <p className="text-emerald-600 text-sm">
                        Effectiveness & uses
                      </p>
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-gray-700 font-medium mb-2 block"
                      htmlFor="product-effect"
                    >
                      How does this medicine work?
                    </label>
                    <textarea
                      value={AddFormData.effectiveness}
                      onChange={(e) =>
                        MedicineFormChange("effectiveness", e.target.value)
                      }
                      id="product-effect"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                      placeholder="Describe the medicine's pharmacology, mechanism of action, and effectiveness..."
                    ></textarea>
                    <div className="flex items-center gap-2 mt-2 text-emerald-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      Be specific about conditions it treats
                    </div>
                  </div>
                </div>

                {/* Side Effects Card */}
                <div className="bg-linear-to-br from-amber-50/50 to-white rounded-xl p-6 border border-amber-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Side Effects
                      </h3>
                      <p className="text-amber-600 text-sm">
                        Important safety information
                      </p>
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-gray-700 font-medium mb-2 block"
                      htmlFor="product-sideeffect"
                    >
                      What are the potential side effects?
                    </label>
                    <textarea
                      value={AddFormData.sideeffect}
                      onChange={(e) =>
                        MedicineFormChange("sideeffect", e.target.value)
                      }
                      id="product-sideeffect"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                      placeholder="List common and rare side effects, precautions, and warnings..."
                    ></textarea>
                    <div className="flex items-center gap-2 mt-2 text-amber-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      Include contraindications if any
                    </div>
                  </div>
                </div>

                {/* Guidelines Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-sm text-blue-800 font-medium mb-1">
                        Important Guidelines
                      </p>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1"></div>
                          Ensure all information is accurate and up-to-date
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1"></div>
                          Include proper dosage instructions in effectiveness
                          section
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1"></div>
                          Review FDA or equivalent regulatory guidelines
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <button
                  type="button"
                  onClick={() => navigate("/admin-dashboard")}
                  className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 w-full sm:w-auto"
                >
                  Cancel
                </button>
                <div className="flex gap-4 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      // Reset form or clear fields
                      toast("Form cleared", { icon: "🗑️" });
                    }}
                    className="px-8 py-3.5 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 w-full sm:w-auto"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-3.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <Plus className="w-5 h-5" />
                    Add Medicine
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Quick Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-600 rounded-md"></div>
              </div>
              <div>
                <p className="font-medium text-gray-900">Image Guidelines</p>
                <p className="text-sm text-gray-600">
                  Use high-quality product images
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-green-600 rounded-md"></div>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Accurate Information
                </p>
                <p className="text-sm text-gray-600">
                  Verify all medical details
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
              </div>
              <div>
                <p className="font-medium text-gray-900">Complete Fields</p>
                <p className="text-sm text-gray-600">All fields are required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicinePage;
