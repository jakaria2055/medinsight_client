import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Pill,
  Tag,
  DollarSign,
  FileText,
  AlertTriangle,
  Package,
  Shield,
  Calendar,
  Eye,
  Edit2,
  Loader2,
} from "lucide-react";
import AdminTaskStore from "../store/AdminTaskStore";
import { useEffect, useState } from "react";

const MedicineDetailsPage = () => {
  const { id } = useParams();
  const { MedicineDetailsRequest, MedicineDetails } = AdminTaskStore();
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    (async () => {
      await MedicineDetailsRequest(id);
      setLoading(false);
    })();
  }, [id, MedicineDetailsRequest]);

  if (loading)
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
              Fetching comprehensive information from the database
            </p>
          </div>
        </div>
      </div>
    );

  if (!MedicineDetails)
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
            The medicine you're looking for doesn't exist or has been removed
            from the system.
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

  const { name, image, group, price, effectiveness, sideeffect } =
    MedicineDetails;

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <nav className="flex items-center text-sm text-gray-600 mb-4">
            <Link
              to="/admin-dashboard"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Dashboard
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Medicine Details</span>
            <span className="mx-2">/</span>
            <span className="text-gray-500 truncate max-w-xs">{name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Medicine Details
              </h1>
              <p className="text-gray-600">
                Complete pharmaceutical information and specifications
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Admin View
              </span>
              <Link
                to={`/update-medicine/${id}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                <Edit2 className="w-4 h-4" />
                Edit Medicine
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Basic Info & Image */}
          <div className="lg:col-span-1 space-y-6">
            {/* Medicine Image Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Product Image
                </h3>
              </div>
              <div className="p-6">
                <div className="relative bg-linear-to-br from-blue-50 to-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-inner">
                    {imageError || !image ? (
                      <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Package className="w-8 h-8 text-gray-500" />
                          </div>
                          <p className="text-gray-600 font-medium">
                            No Image Available
                          </p>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                        onError={() => setImageError(true)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Information Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-linear-to-r from-gray-800 to-gray-900 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Basic Information
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Medicine ID</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {id?.substring(0, 8)}...
                      </span>
                    </div>
                    <p className="text-xl font-bold text-gray-900 truncate">
                      {name}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        Category
                      </span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full">
                      <span className="font-medium">{group}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Price Information
                      </span>
                    </div>
                    <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-blue-700">
                          ${price}
                        </span>
                        <span className="text-gray-500">USD per unit</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        This price is set for wholesale and retail distribution
                      </p>
                    </div>
                  </div>

                  {/* Additional Metadata */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Additional Info
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Status</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Last Updated
                        </span>
                        <span className="text-sm text-gray-900">Today</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          View Count
                        </span>
                        <span className="text-sm text-gray-900 flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          1,245
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-linear-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Quick Actions
              </h4>
              <div className="space-y-3">
                <Link
                  to={`/update-medicine/${id}`}
                  className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Edit2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Edit Medicine</p>
                    <p className="text-xs text-gray-500">
                      Update details and pricing
                    </p>
                  </div>
                </Link>
                <button className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group w-full">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-gray-900">Generate Report</p>
                    <p className="text-xs text-gray-500">
                      Export medicine data
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Effectiveness Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-linear-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Pill className="w-5 h-5 text-white" />
                  </div>
                  <span>Effectiveness & Pharmacology</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    How it Works
                  </h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {effectiveness}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-emerald-600 rounded-sm"></div>
                      </div>
                      <span className="font-medium text-gray-900">
                        Primary Use
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Treatment and prevention
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        Duration
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      As prescribed by doctor
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">
                        Efficacy Rate
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">High success rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Effects Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-linear-to-r from-rose-600 to-rose-700 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <span>Possible Side Effects</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Common Adverse Reactions
                  </h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {sideeffect}
                  </p>
                </div>

                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-rose-800 mb-1">
                        Important Safety Information
                      </h4>
                      <ul className="text-sm text-rose-700 space-y-1">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5"></div>
                          Consult healthcare provider before use
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5"></div>
                          Do not exceed recommended dosage
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5"></div>
                          Discontinue if severe reactions occur
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage & Usage Guidelines */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-linear-to-r from-gray-700 to-gray-800 px-6 py-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span>Storage & Usage Guidelines</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Storage Instructions
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Store in a cool, dry place (20-25°C)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Protect from direct sunlight and moisture
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Keep away from children and pets
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Check expiration date before use
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Administration
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Follow prescribed dosage exactly
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Take with food if stomach upset occurs
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Do not crush or chew unless instructed
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Complete full course as directed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MedicineDetailsPage;
