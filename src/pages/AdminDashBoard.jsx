import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Add Medicine Section */}
      <section className="max-w-5xl py-16 md:pl-20 md:w-full max-md:text-center mx-2 md:mx-auto flex flex-col md:flex-row items-center justify-between text-left bg-linear-to-b from-[#4C0083] to-[#180047] rounded-2xl p-10 text-white shadow-lg">
        <div>
          <h1 className="text-4xl md:text-[46px] md:leading-[60px] font-semibold bg-linear-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
            Create Medicine Entry
          </h1>
          <p className="bg-linear-to-r from-white to-[#CAABFF] text-transparent bg-clip-text text-lg">
            Enter the details to create a new medicine entry in the master
            database.
          </p>
        </div>

        <button className="px-12 py-3 text-slate-800 bg-white rounded-full text-sm mt-6 md:mt-0 hover:bg-gray-100 transition">
          <Link to="/add-medicine">Add Medicine</Link>
        </button>
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
                {/* Demo Medicine Row 1 */}
                <tr className="border-t border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-3 flex items-center space-x-3 align-middle">
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <div className="border border-gray-300 rounded overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&auto=format&fit=crop"
                          alt="Medicine"
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      <span className="truncate">Paracetamol 500mg</span>
                    </div>
                  </td>

                  <td className="px-4 py-3 align-middle">Analgesic</td>

                  <td className="px-4 py-3 text-center hidden md:table-cell align-middle">
                    BDT 6
                  </td>

                  <td className="px-4 py-3 text-center align-middle">
                    <button className="hover:scale-110 transition">
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
                    </button>
                  </td>

                  <td className="px-4 py-3 text-center align-middle">
                    <button className="hover:scale-110 transition">
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

                {/* Demo Medicine Row 2 */}
                <tr className="border-t border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-3 flex items-center space-x-3 align-middle">
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <div className="border border-gray-300 rounded overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&auto=format&fit=crop"
                          alt="Medicine"
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      <span className="truncate">Amoxicillin 250mg</span>
                    </div>
                  </td>

                  <td className="px-4 py-3 align-middle">Antibiotic</td>

                  <td className="px-4 py-3 text-center hidden md:table-cell align-middle">
                    BDT 11
                  </td>

                  <td className="px-4 py-3 text-center align-middle">
                    <button className="hover:scale-110 transition">
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
                    </button>
                  </td>

                  <td className="px-4 py-3 text-center align-middle">
                    <button className="hover:scale-110 transition">
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

                {/* Demo Medicine Row 3 */}
                <tr className="border-t border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-3 flex items-center space-x-3 align-middle">
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <div className="border border-gray-300 rounded overflow-hidden">
                        <img
                          src="https://i.ibb.co.com/DfgRX4mF/Vitamin-C-1000mg-Mega-C-2.webp"
                          alt="Medicine"
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      <span className="truncate">Vitamin C 1000mg</span>
                    </div>
                  </td>

                  <td className="px-4 py-3 align-middle">Vitamin Supplement</td>

                  <td className="px-4 py-3 text-center hidden md:table-cell align-middle">
                    BDT 7
                  </td>

                  <td className="px-4 py-3 text-center align-middle">
                    <button className="hover:scale-110 transition">
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
                    </button>
                  </td>

                  <td className="px-4 py-3 text-center align-middle">
                    <button className="hover:scale-110 transition">
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
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashBoard;
