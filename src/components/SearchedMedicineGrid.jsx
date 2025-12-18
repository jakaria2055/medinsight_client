import React from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Tag,
  DollarSign,
  Building2,
  Grid,
  List,
  Filter,
  Search,
  ChevronRight,
  AlertCircle,
  Star,
} from "lucide-react";

const SearchedMedicineGrid = ({ medicineList, viewMode = "grid" }) => {
  // Empty state component
  if (!medicineList || medicineList.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            No Medicines Found
          </h3>
          <p className="text-gray-600 mb-6">
            There are currently no medicines available in this category. Check
            back later or try a different search.
          </p>
        </div>
      </div>
    );
  }

  // Grid View
  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {medicineList.map((medicine, index) => (
          <Link
            key={medicine._id || index}
            to={`/searched-medicine-details/${medicine._id}`}
            className="group relative"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              {/* Medicine Badge */}
              <div className="absolute top-3 left-3 z-10">
                <div className="px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  #{index + 1}
                </div>
              </div>

              {/* Featured Badge (for first item) */}
              {index === 0 && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="px-2.5 py-1 bg-linear-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Medicine Image */}
              <div className="relative pt-8 px-6 pb-4">
                <div className="bg-linear-to-br from-blue-50 to-gray-100 rounded-xl p-4">
                  <div className="aspect-square rounded-lg overflow-hidden bg-white">
                    <img
                      src={medicine.image}
                      alt={medicine.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x300?text=No+Image";
                        e.target.className =
                          "w-full h-full object-cover p-8 bg-gray-100";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Medicine Info */}
              <div className="px-6 pb-6 pt-2 flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {medicine.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Tag className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-600">
                      {medicine.group}
                    </span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Price per unit
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-blue-700">
                          ${medicine.price}
                        </span>
                        <span className="text-gray-500 text-sm">USD</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Manufacturer</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-linear-to-br from-indigo-100 to-purple-100 overflow-hidden border border-indigo-200">
                          {medicine.company?.image ? (
                            <img
                              src={medicine.company.image}
                              alt={medicine.company.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Building2 className="w-3 h-3 text-indigo-600" />
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700 truncate max-w-20">
                          {medicine.company?.name || "Unknown"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center justify-center">
                    <button className="w-full py-2.5 bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 font-medium rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-sm">
                      View Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // List View (Enhanced Table)
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="bg-linear-to-r from-blue-50 to-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Medicine List</h3>
              <p className="text-sm text-gray-600">
                {medicineList.length} medicines • Click any row for details
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>All medicines are in stock</span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-4 px-6 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold text-gray-700">Medicine</span>
                </div>
              </th>
              <th className="py-4 px-6 text-left">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <span className="font-semibold text-gray-700">Category</span>
                </div>
              </th>
              <th className="py-4 px-6 text-left">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <span className="font-semibold text-gray-700">Price</span>
                </div>
              </th>
              <th className="py-4 px-6 text-left hidden md:table-cell">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gray-500" />
                  <span className="font-semibold text-gray-700">
                    Manufacturer
                  </span>
                </div>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="font-semibold text-gray-700">Action</span>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {medicineList.map((medicine, index) => (
              <tr
                key={medicine._id || index}
                className="hover:bg-blue-50/30 transition-colors group"
              >
                {/* Medicine Cell */}
                <td className="py-4 px-6">
                  <Link
                    to={`/searched-medicine-details/${medicine._id}`}
                    className="flex items-center gap-4 group/link"
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-50 to-gray-100 border border-gray-200 overflow-hidden">
                        {medicine.image ? (
                          <img
                            src={medicine.image}
                            alt={medicine.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src =
                                "https://via.placeholder.com/56?text=No+Image";
                              e.target.className =
                                "w-full h-full object-cover bg-gray-200";
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-blue-100">
                            <Package className="w-6 h-6 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover/link:text-blue-600 transition-colors">
                        {medicine.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        ID: {medicine._id?.substring(0, 8) || "N/A"}
                      </p>
                    </div>
                  </Link>
                </td>

                {/* Category Cell */}
                <td className="py-4 px-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-medium">
                      {medicine.group}
                    </span>
                  </div>
                </td>

                {/* Price Cell */}
                <td className="py-4 px-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-blue-700">
                      ${medicine.price}
                    </span>
                    <span className="text-gray-500 text-sm">/unit</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">USD</p>
                </td>

                {/* Manufacturer Cell */}
                <td className="py-4 px-6 hidden md:table-cell">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-100 to-purple-100 overflow-hidden border border-indigo-200">
                      {medicine.company?.image ? (
                        <img
                          src={medicine.company.image}
                          alt={medicine.company.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/40?text=Co";
                            e.target.className =
                              "w-full h-full object-cover bg-indigo-200";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-indigo-100">
                          <Building2 className="w-5 h-5 text-indigo-600" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {medicine.company?.name || "Unknown"}
                      </p>
                      <p className="text-xs text-gray-500">Manufacturer</p>
                    </div>
                  </div>
                </td>

                {/* Action Cell */}
                <td className="py-4 px-6">
                  <Link
                    to={`/searched-medicine-details/${medicine._id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-sm transition-all duration-200 group/btn"
                  >
                    <span>View</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>
              Showing{" "}
              <span className="font-semibold">{medicineList.length}</span>{" "}
              medicines
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-gray-500" />
              <span>Total: {medicineList.length} items</span>
            </div>
            <span className="hidden md:inline text-gray-300">•</span>
            <div className="hidden md:flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-500" />
              <span>
                {new Set(medicineList.map((m) => m.company?.name)).size}{" "}
                manufacturers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedMedicineGrid;
