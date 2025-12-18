import React, { useEffect, useState } from "react";
import AdminTaskStore from "../store/AdminTaskStore";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Upload,
  Pill,
  Tag,
  DollarSign,
  FileText,
  AlertTriangle,
  Save,
  RotateCcw,
  Eye,
  EyeOff,
  Package,
  Shield,
  Loader2,
} from "lucide-react";

const UpdateMedicine = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    MedicineFormData,
    MedicineFormDataChange,
    UpdateMedicineRequest,
    MedicineDetailsRequest,
    MedicineDetails,
  } = AdminTaskStore();

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [showSideEffects, setShowSideEffects] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (id) {
      (async () => {
        setLoading(true);
        await MedicineDetailsRequest(id);
        setLoading(false);
      })();
    }
  }, [id, MedicineDetailsRequest]);

  // Set image preview when form data changes
  useEffect(() => {
    if (MedicineFormData.image && typeof MedicineFormData.image === "string") {
      setImagePreview(MedicineFormData.image);
    }
  }, [MedicineFormData.image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        MedicineFormDataChange("image", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetForm = () => {
    if (MedicineDetails) {
      // Reset form to original values
      const fields = [
        "name",
        "group",
        "price",
        "effectiveness",
        "sideeffect",
        "image",
      ];
      fields.forEach((field) => {
        MedicineFormDataChange(field, MedicineDetails[field] || "");
      });
      setImagePreview(MedicineDetails.image);
      toast.success("Form reset to original values");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      let res = await UpdateMedicineRequest(MedicineFormData, id);
      if (res) {
        toast.success("Medicine Updated Successfully!");
        navigate("/admin-dashboard");
      } else {
        toast.error("Update failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong", error);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6">
          <div className="relative">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto" />
            <div className="absolute inset-0 bg-blue-600/10 blur-xl rounded-full"></div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Loading Medicine Details
            </h3>
            <p className="text-gray-500 max-w-sm">
              Fetching current information for editing
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!MedicineDetails) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Medicine Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The medicine you're trying to edit doesn't exist or has been
            removed.
          </p>
          <Link
            to="/admin-dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            <ArrowLeft size={18} />
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Link
              to="/admin-dashboard"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Dashboard
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Update Medicine
                </h1>
                <p className="text-gray-600">
                  Edit details for{" "}
                  <span className="font-semibold">{MedicineDetails.name}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                ID: {id?.substring(0, 8)}...
              </div>
              <div className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                Editing Mode
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <span className="text-sm font-medium text-gray-700">
                Basic Info
              </span>
            </div>
            <div className="h-0.5 w-12 bg-emerald-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <span className="text-sm font-medium text-gray-700">
                Medical Details
              </span>
            </div>
            <div className="h-0.5 w-12 bg-emerald-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <span className="text-sm text-gray-500">Review & Save</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Form Header */}
          <div className="bg-linear-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  Medicine Information
                </h2>
                <p className="text-emerald-100/90 text-sm">
                  Update the details below and save changes
                </p>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

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
                        Medicine Image
                      </h3>
                      <p className="text-blue-600 text-sm">
                        Update product image
                      </p>
                    </div>
                  </div>

                  {/* Current Image Preview */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-2">Current Image:</p>
                    <div className="relative bg-linear-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                      <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-inner">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Medicine preview"
                            className="w-full h-full object-contain p-4"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                            <div className="text-center p-4">
                              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Package className="w-8 h-8 text-gray-500" />
                              </div>
                              <p className="text-gray-600 font-medium">
                                No Image
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Image Upload Button */}
                  <label
                    htmlFor="image-upload"
                    className="block w-full border-2 border-dashed border-blue-300 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Upload className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">
                      Click to upload new image
                    </p>
                    <p className="text-gray-500 text-sm">
                      PNG, JPG, WEBP up to 5MB
                    </p>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>

                {/* Basic Information Card */}
                <div className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <div className="w-2 h-6 bg-emerald-600 rounded-full"></div>
                    Basic Information
                  </h3>

                  <div className="space-y-5">
                    {/* Medicine Name */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-gray-700 font-medium mb-2"
                        htmlFor="product-name"
                      >
                        <Pill className="w-4 h-4 text-emerald-600" />
                        Medicine Name
                      </label>
                      <input
                        value={MedicineFormData.name}
                        onChange={(e) =>
                          MedicineFormDataChange("name", e.target.value)
                        }
                        id="product-name"
                        type="text"
                        placeholder="e.g., Monas, Paracetamol, etc."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 placeholder:text-gray-400"
                        required
                      />
                    </div>

                    {/* Medicine Group */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-gray-700 font-medium mb-2"
                        htmlFor="product-group"
                      >
                        <Tag className="w-4 h-4 text-emerald-600" />
                        Medicine Group
                      </label>
                      <input
                        value={MedicineFormData.group}
                        onChange={(e) =>
                          MedicineFormDataChange("group", e.target.value)
                        }
                        id="product-group"
                        type="text"
                        placeholder="e.g., Montelukast, NSAID, Antibiotic"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 placeholder:text-gray-400"
                        required
                      />
                    </div>

                    {/* Medicine Price */}
                    <div>
                      <label
                        className="flex items-center gap-2 text-gray-700 font-medium mb-2"
                        htmlFor="product-price"
                      >
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        Current Price
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          $
                        </div>
                        <input
                          value={MedicineFormData.price}
                          onChange={(e) =>
                            MedicineFormDataChange("price", e.target.value)
                          }
                          id="product-price"
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="Per Piece"
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 placeholder:text-gray-400"
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
                <div className="bg-linear-to-br from-blue-50/50 to-white rounded-xl p-6 border border-blue-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Medicine Pharmacology
                      </h3>
                      <p className="text-blue-600 text-sm">
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
                      value={MedicineFormData.effectiveness}
                      onChange={(e) =>
                        MedicineFormDataChange("effectiveness", e.target.value)
                      }
                      id="product-effect"
                      rows={8}
                      className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                      placeholder="Describe the medicine's pharmacology, mechanism of action, and effectiveness..."
                      required
                    ></textarea>
                    <div className="flex items-center gap-2 mt-2 text-blue-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            Side Effects
                          </h3>
                          <p className="text-amber-600 text-sm">
                            Important safety information
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowSideEffects(!showSideEffects)}
                          className="text-amber-600 hover:text-amber-800 transition-colors"
                        >
                          {showSideEffects ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
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
                      value={MedicineFormData.sideeffect}
                      onChange={(e) =>
                        MedicineFormDataChange("sideeffect", e.target.value)
                      }
                      id="product-sideeffect"
                      rows={8}
                      className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                      placeholder="List common and rare side effects, precautions, and warnings..."
                      required
                    ></textarea>
                    <div className="flex items-center gap-2 mt-2 text-amber-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      Include contraindications if any
                    </div>
                  </div>
                </div>

                {/* Edit Guidelines */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-800 font-medium mb-1">
                        Editing Guidelines
                      </p>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1"></div>
                          Ensure all medical information is accurate and
                          verified
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1"></div>
                          Review FDA or regulatory guidelines before updating
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1"></div>
                          Changes will be reflected immediately across the
                          platform
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
                <div className="flex gap-4 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => navigate("/admin-dashboard")}
                    className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 w-full sm:w-auto"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-8 py-3.5 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 w-full sm:w-auto"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Reset Form
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={updating}
                  className="px-10 py-3.5 bg-linear-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl hover:shadow-emerald-500/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  {updating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Updating...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      <span>Update Medicine</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Change Summary */}
            <div className="mt-8 bg-linear-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-5">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                Change Summary
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-700 mb-1">
                    Original Name:
                  </p>
                  <p className="bg-gray-100 p-2 rounded">
                    {MedicineDetails.name}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">New Name:</p>
                  <p className="bg-emerald-50 border border-emerald-200 p-2 rounded">
                    {MedicineFormData.name}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Quick Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Verify Changes</p>
                <p className="text-sm text-gray-600">
                  Double-check medical accuracy
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Complete Fields</p>
                <p className="text-sm text-gray-600">All fields are required</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Safety First</p>
                <p className="text-sm text-gray-600">
                  Include all side effects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMedicine;
