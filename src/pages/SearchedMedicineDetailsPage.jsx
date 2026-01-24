import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import UserStore from "../store/UserStore";

const SearchedMedicineDetailsPage = () => {
  const { id } = useParams();
  const {
    SearchedMedicineDetailsRequest,
    SearchedMedicineDetails,
    SearchKeyword,
  } = UserStore();
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    (async () => {
      await SearchedMedicineDetailsRequest(id);
      setLoading(false);
    })();
  }, [id, SearchedMedicineDetailsRequest]);

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
              Please wait while we fetch comprehensive information about the
              medicine
            </p>
          </div>
        </div>
      </div>
    );

  if (!SearchedMedicineDetails)
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Medicine Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The medicine details you're looking for are currently unavailable or
            may have been removed.
          </p>
          <Link
            to={`/MedicineByKeyword/${SearchKeyword}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            <ArrowLeft size={18} />
            Return to Search Results
          </Link>
        </div>
      </div>
    );

  // Destructure including nested company info
  const { name, image, group, price, effectiveness, sideeffect, company } =
    SearchedMedicineDetails;

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to={`/MedicineByKeyword/${SearchKeyword}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Results
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Medicine Details
                </h1>
                <p className="text-blue-100/90">
                  Comprehensive information about the medication
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                <span className="text-white font-medium">ID: {id}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Image & Basic Info */}
              <div className="lg:w-2/5 space-y-6">
                {/* Medicine Image */}
                <div className="relative">
                  <div className="bg-linear-to-br from-blue-50 to-gray-50 rounded-2xl p-4 border border-gray-200">
                    <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-inner">
                      {imageError || !image ? (
                        <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
                          <div className="text-center p-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                              <AlertCircle className="w-8 h-8 text-gray-500" />
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
                          className="w-full h-full object-contain p-4"
                          onError={() => setImageError(true)}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Basic Info Card */}
                <div className="bg-linear-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-blue-600 rounded-full"></div>
                    Basic Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Medicine Name
                      </p>
                      <p className="text-xl font-bold text-gray-900">{name}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Category</p>
                      <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {group}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Price per Unit
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-blue-700">
                          ${price}
                        </span>
                        <span className="text-gray-500">USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                {company && (
                  <div className="bg-linear-to-br from-white to-blue-50/50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
                      Manufacturer
                    </h3>

                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-linear-to-br from-blue-100 to-indigo-100 border border-blue-200 overflow-hidden">
                          {company.image ? (
                            <img
                              src={company.image}
                              alt={company.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-blue-100">
                              <span className="text-2xl font-bold text-blue-600">
                                {company.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {company.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Licensed Pharmaceutical Company
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Detailed Information */}
              <div className="lg:w-3/5 space-y-6">
                {/* Effectiveness Card */}
                <div className="bg-linear-to-br from-emerald-50 to-white rounded-xl p-6 border border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-emerald-600 rounded-md flex items-center justify-center">
                        <div className="w-2 h-3 bg-white"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Effectiveness
                      </h3>
                      <p className="text-emerald-600 text-sm">
                        Primary uses and benefits
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-5 border border-emerald-100">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {effectiveness}
                    </p>
                  </div>
                </div>

                {/* Side Effects Card */}
                <div className="bg-linear-to-br from-rose-50 to-white rounded-xl p-6 border border-rose-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-rose-600 rounded-md flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-white"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Possible Side Effects
                      </h3>
                      <p className="text-rose-600 text-sm">
                        Important safety information
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-5 border border-rose-100">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {sideeffect}
                    </p>
                  </div>
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-amber-800">
                        <span className="font-semibold">Important:</span>{" "}
                        Consult your healthcare provider if you experience any
                        side effects. This information is for educational
                        purposes only.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Usage Guidelines
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Always follow the prescribed dosage instructions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Store in a cool, dry place away from direct sunlight
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Keep out of reach of children
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Check expiration date before use
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 border-t border-gray-200 px-8 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-gray-600 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to={`/MedicineByKeyword/${SearchKeyword}`}
                  className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
                >
                  Back to List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchedMedicineDetailsPage;
