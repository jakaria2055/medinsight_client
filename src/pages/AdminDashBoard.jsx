import { Link } from "react-router-dom";
import AdminTaskStore from "../store/AdminTaskStore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  Package,
  ChevronRight,
  Loader2,
  AlertCircle,
} from "lucide-react";

const AdminDashBoard = () => {
  const { MedicineList, MedicineListRequest, MedicineDeleteRequest } =
    AdminTaskStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(null);

  // Fetch all medicines
  useEffect(() => {
    (async () => {
      setLoading(true);
      await MedicineListRequest();
      setLoading(false);
    })();
  }, [MedicineListRequest]);

  // Filter medicines based on search
  const filteredMedicines =
    MedicineList?.filter(
      (medicine) =>
        medicine.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        medicine.group?.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  // Delete handler
  const handleDelete = async (medicineId, medicineName) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${medicineName}"? This action cannot be undone.`
    );
    if (!confirmed) return;

    setDeleteLoading(medicineId);
    const success = await MedicineDeleteRequest(medicineId);

    if (success) {
      toast.success("Medicine deleted successfully");
      await MedicineListRequest();
    } else {
      toast.error("Failed to delete medicine");
    }
    setDeleteLoading(null);
  };

  // Stats calculation
  const totalMedicines = MedicineList?.length || 0;
  const averagePrice =
    MedicineList?.length > 0
      ? (
          MedicineList.reduce(
            (sum, med) => sum + (parseFloat(med.price) || 0),
            0
          ) / MedicineList.length
        ).toFixed(2)
      : 0;

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50/50 to-blue-50/30 pb-12">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 via-blue-700 to-indigo-800 px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Medicine Dashboard
              </h1>
              <p className="text-blue-100/90 max-w-2xl">
                Manage your pharmaceutical inventory, add new medicines, and
                update existing entries
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-white/90">
                <Package className="w-5 h-5" />
                <span className="font-medium">{totalMedicines} Medicines</span>
              </div>
              <Link
                to="/add-medicine"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                <Plus className="w-5 h-5" />
                Add New Medicine
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 md:-mt-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Medicines
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {totalMedicines}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Active Listings
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {totalMedicines}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-emerald-600 rounded-md flex items-center justify-center">
                  <div className="w-2 h-3 bg-white"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Avg. Price</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ${averagePrice}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center">
                  <div className="text-xs font-bold text-white">$</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Medicine Inventory
              </h2>
              <p className="text-gray-500 text-sm">
                Manage all medicines in your database
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search medicines or categories..."
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Medicine Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="py-16 flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
              <p className="text-gray-600">Loading medicines...</p>
            </div>
          ) : filteredMedicines.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {searchTerm
                  ? "No matching medicines found"
                  : "No medicines yet"}
              </h3>
              <p className="text-gray-500 mb-6">
                {searchTerm
                  ? "Try adjusting your search terms"
                  : "Get started by adding your first medicine"}
              </p>
              {!searchTerm && (
                <Link
                  to="/add-medicine"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add First Medicine
                </Link>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-linear-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="py-4 px-6 text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-semibold text-gray-700">
                          Medicine
                        </span>
                      </div>
                    </th>
                    <th className="py-4 px-6 text-left">
                      <span className="font-semibold text-gray-700">
                        Category
                      </span>
                    </th>
                    <th className="py-4 px-6 text-left">
                      <span className="font-semibold text-gray-700">Price</span>
                    </th>
                    <th className="py-4 px-6 text-left">
                      <span className="font-semibold text-gray-700">
                        Actions
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredMedicines.map((medicine, index) => (
                    <tr
                      key={medicine._id}
                      className="hover:bg-gray-50/50 transition-colors group"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-50 to-gray-100 border border-gray-200 overflow-hidden">
                              {medicine.image ? (
                                <img
                                  src={medicine.image}
                                  alt={medicine.name}
                                  className="w-full h-full object-cover"
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
                            <Link
                              to={`/medicine-details/${medicine._id}`}
                              className="text-gray-900 font-semibold hover:text-blue-600 transition-colors group/link flex items-center gap-1"
                            >
                              {medicine.name}
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform -translate-x-1 group-hover/link:translate-x-0 transition-all" />
                            </Link>
                            <p className="text-gray-500 text-sm mt-1">
                              ID: {medicine._id.substring(0, 8)}...
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-medium">
                            {medicine.group}
                          </span>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-gray-900">
                            ${medicine.price}
                          </span>
                          <span className="text-gray-500 text-sm">/unit</span>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {/* View Button */}
                          <Link
                            to={`/medicine-details/${medicine._id}`}
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group/action"
                            title="View Details"
                          >
                            <Eye className="w-5 h-5" />
                          </Link>

                          {/* Edit Button */}
                          <Link
                            to={`/update-medicine/${medicine._id}`}
                            className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors group/action"
                            title="Edit Medicine"
                          >
                            <Edit2 className="w-5 h-5" />
                          </Link>

                          {/* Delete Button */}
                          <button
                            onClick={() =>
                              handleDelete(medicine._id, medicine.name)
                            }
                            disabled={deleteLoading === medicine._id}
                            className={`p-2 rounded-lg transition-colors ${
                              deleteLoading === medicine._id
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                            }`}
                            title="Delete Medicine"
                          >
                            {deleteLoading === medicine._id ? (
                              <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                              <Trash2 className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination and Info */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>
              Showing{" "}
              <span className="font-semibold">{filteredMedicines.length}</span>{" "}
              of <span className="font-semibold">{totalMedicines}</span>{" "}
              medicines
            </span>
          </div>

          {searchTerm && (
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>
                Search results for:{" "}
                <span className="font-semibold">"{searchTerm}"</span>
              </span>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-linear-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Plus className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Add Medicine</p>
                <p className="text-sm text-gray-600">Create new entry</p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-emerald-50 to-white p-5 rounded-xl border border-emerald-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Edit2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Quick Edit</p>
                <p className="text-sm text-gray-600">Update details</p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">View Details</p>
                <p className="text-sm text-gray-600">See full info</p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-red-50 to-white p-5 rounded-xl border border-red-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Delete Items</p>
                <p className="text-sm text-gray-600">Remove entries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashBoard;
