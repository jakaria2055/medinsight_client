import { Link } from "react-router-dom";
import AdminTaskStore from "../store/AdminTaskStore";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AdminDashBoard = () => {
  const { MedicineList, MedicineListRequest, MedicineDeleteRequest } =
    AdminTaskStore();

  // Fetch all medicines
  useEffect(() => {
    (async () => {
      await MedicineListRequest();
    })();
  }, [MedicineListRequest]);

  //  delete handler
  const handleDelete = async (medicineId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this medicine?"
    );
    if (!confirmed) return;

    const success = await MedicineDeleteRequest(medicineId);

    if (success) {
      toast.success("Medicine deleted successfully");
      await MedicineListRequest();
    } else {
      toast.error("Failed to delete medicine");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Add Medicine Section */}
      <section className="max-w-5xl py-16 md:pl-20 md:w-full max-md:text-center mx-2 md:mx-auto flex flex-col md:flex-row items-center justify-between text-left linear-to-b from-[#4C0083] to-[#180047] rounded-2xl p-10 text-white shadow-lg">
        <div>
          <h1 className="text-4xl md:text-[46px] md:leading-[60px] font-semibold bg-linear-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
            Create Medicine Entry
          </h1>
          <p className="bg-linear-to-r from-white to-[#CAABFF] text-transparent bg-clip-text text-lg">
            Enter the details to create a new medicine entry in the master
            database.
          </p>
        </div>

        <Link
          to="/add-medicine"
          className="px-12 py-3 text-slate-800 bg-white rounded-full text-sm mt-6 md:mt-0 hover:bg-gray-100 transition"
        >
          Add Medicine
        </Link>
      </section>

      {/* Medicine List Section */}
      <section className="flex-1 py-10 flex flex-col justify-between">
        <div className="w-full md:p-10 p-4">
          <h2 className="pb-4 text-2xl font-medium text-gray-800">
            All Medicines
          </h2>

          <div className="flex flex-col items-center max-w-7xl w-full overflow-hidden rounded-md bg-white border border-gray-300 shadow-sm mx-auto">
            <table className="w-full table-auto">
              <thead className="text-gray-900 text-sm bg-gray-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-left">
                    Medicine
                  </th>
                  <th className="px-4 py-3 font-semibold text-left">
                    Group/Category
                  </th>
                  <th className="px-4 py-3 font-semibold text-center hidden md:table-cell">
                    Price/Unit
                  </th>
                  <th className="px-4 py-3 font-semibold text-center">Edit</th>
                  <th className="px-4 py-3 font-semibold text-center text-red-500">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm text-gray-700">
                {Array.isArray(MedicineList) && MedicineList.length > 0 ? (
                  MedicineList.map((medicine, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 flex items-center space-x-3 align-middle">
                        <Link
                          to={`/medicine-details/${medicine["_id"]}`}
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

                      <td className="px-4 py-3 align-middle">
                        {medicine.group}
                      </td>

                      <td className="px-4 py-3 text-center hidden md:table-cell align-middle">
                        ${medicine.price}
                      </td>

                      <td className="px-4 py-3 text-center align-middle">
                        <Link
                          to={`/update-medicine/${medicine["_id"]}`}
                          className="hover:scale-110 transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </Link>
                      </td>

                      <td className="px-4 py-3 text-center align-middle">
                        <button
                          onClick={() => handleDelete(medicine._id)}
                          className="hover:scale-110 transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-10 text-gray-500 font-medium"
                    >
                      {MedicineList === null
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
    </main>
  );
};

export default AdminDashBoard;
