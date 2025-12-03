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

        <button className="px-12 py-3 text-slate-800 bg-white rounded-full text-sm mt-6 md:mt-0 hover:bg-gray-200 transition">
          <Link to="/add-medicine">Add Medicine</Link>
        </button>
      </section>
    </main>
  );
};

export default AdminDashBoard;
