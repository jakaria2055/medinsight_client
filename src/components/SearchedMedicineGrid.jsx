import React from "react";
import { Link } from "react-router-dom";

const SearchedMedicineGrid = ({ medicineList }) => {
  return (
    <section className="flex-1 py-10 flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-2xl font-medium text-gray-800">
          All Medicines
        </h2>

        <div className="flex flex-col items-center max-w-7xl w-full overflow-hidden rounded-md bg-white border border-gray-300 shadow-sm mx-auto">
          <table className="w-full table-auto">
            <thead className="text-gray-900 text-sm bg-gray-100">
              <tr>
                <th className="px-4 py-3 font-semibold text-left">Medicine</th>
                <th className="px-4 py-3 font-semibold text-left">
                  Group/Category
                </th>
                <th className="px-4 py-3 font-semibold text-center md:table-cell">
                  Price/Unit
                </th>
                <th className="px-4 py-3 font-semibold text-center hidden md:table-cell">
                  Company
                </th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-700">
              {Array.isArray(medicineList) && medicineList.length > 0 ? (
                medicineList.map((medicine, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 flex items-center space-x-3 align-middle">
                      <Link
                        to={`/searched-medicine-details/${medicine["_id"]}`}
                        className="flex items-center space-x-3"
                      >
                        <div className="border border-gray-300 rounded overflow-hidden">
                          <img
                            src={medicine.image}
                            alt={medicine.name}
                            className="w-16 h-16 object-cover"
                          />
                        </div>
                        <span className="truncate">{medicine.name}</span>
                      </Link>
                    </td>

                    <td className="px-4 py-3 align-middle">{medicine.group}</td>

                    <td className="px-4 py-3 text-center md:table-cell align-middle">
                      ${medicine.price}
                    </td>

                    <td className="px-4 py-3 text-center hidden md:table-cell align-middle">
                      ${medicine.company.name}
                    </td>

                    <td className="px-4 py-3 text-center hidden align-middle">
                      <div className="flex items-center justify-center space-x-3">
                        {/* Company Image */}
                        <div className="border border-gray-300 rounded overflow-hidden">
                          <img
                            src={medicine.company.image}
                            alt={medicine.company.name}
                            className="w-12 h-12 object-cover"
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.target.src =
                                "https://via.placeholder.com/48?text=No+Image";
                            }}
                          />
                        </div>
                        {/* Company Name */}
                        <span className="truncate">
                          {medicine.company.name}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500 font-medium"
                  >
                    {medicineList === null
                      ? "Loading medicines..."
                      : "No medicines found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SearchedMedicineGrid;
