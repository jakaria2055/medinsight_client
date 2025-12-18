import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AdminTaskStore from "../store/AdminTaskStore";
import { useEffect, useState } from "react";

const MedicineDetailsPage = () => {
  const { id } = useParams();
  const { MedicineDetailsRequest, MedicineDetails } = AdminTaskStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await MedicineDetailsRequest(id);
      setLoading(false);
    })();
  }, [id, MedicineDetailsRequest]); // [id]

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 animate-pulse">
          Loading medicine details...
        </p>
      </div>
    );

  if (!MedicineDetails)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-medium">Medicine not found.</p>
      </div>
    );

  const { name, image, group, price, effectiveness, sideeffect } =
    MedicineDetails;

  return (
    <main className="min-h-screen bg-linear-to-b from-[#f5f3ff] to-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="flex justify-between items-center bg-linear-to-r from-[#3067dc] to-[#4021f1] px-6 py-4">
          <h1 className="text-white text-2xl font-semibold">
            Medicine Information
          </h1>
          <Link
            to="/admin-dashboard"
            className="text-sm text-white hover:text-gray-200 flex items-center gap-1"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>
        </div>

        {/* Content Section */}
        <div className="p-6 md:flex md:gap-8">
          {/* Image */}
          <div className="shrink-0 flex justify-center md:justify-start">
            <img
              src={image}
              alt={name}
              className="w-64 h-64 object-cover rounded-xl border border-gray-200 shadow-sm"
            />
          </div>

          {/* Details */}
          <div className="flex-1 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>

            <p className="text-gray-500 mb-4">Category: {group}</p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">💰 Price per unit:</span>{" "}
                <span className="text-blue-600 font-bold">${price}</span>
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-lg font-semibold text-blue-600 mb-1">
                Effectiveness
              </h3>
              <p className="text-gray-700 leading-relaxed">{effectiveness}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#B91C1C] mb-1">
                Possible Side Effects
              </h3>
              <p className="text-gray-700 leading-relaxed">{sideeffect}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MedicineDetailsPage;
