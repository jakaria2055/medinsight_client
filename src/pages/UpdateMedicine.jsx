import React from "react";
import AdminTaskStore from "../store/AdminTaskStore";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

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

  useEffect(() => {
    if (id) {
      (async () => {
        await MedicineDetailsRequest(id);
      })();
    }
  }, [id, MedicineDetailsRequest]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await UpdateMedicineRequest(MedicineFormData, id);
    if (res) {
      navigate("/admin-dashboard");
      toast.success("Medicine Updated Successfully.");
    } else {
      toast.error("Something went wrong");
    }
  };

  if (!MedicineDetails) {
    return (
      <div className="py-10 flex justify-center items-center">
        <p className="text-gray-500">Loading medicine details...</p>
      </div>
    );
  }

  return (
    <div className="py-10 flex flex-col items-center bg-white">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        {/* Current Image Display */}
        <div className="flex flex-col gap-1 max-w-md">
          <p className="text-base font-medium">Current Medicine Image</p>
          {MedicineFormData.image &&
            typeof MedicineFormData.image === "string" && (
              <img
                src={MedicineFormData.image}
                alt="Current medicine"
                className="w-32 h-32 object-cover border rounded"
              />
            )}
        </div>

        {/* Medicine Name */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Medicine Name
          </label>
          <input
            value={MedicineFormData.name}
            onChange={(e) => MedicineFormDataChange("name", e.target.value)}
            id="product-name"
            type="text"
            placeholder="Medicine Name(Monas)"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        {/* Medicine Group*/}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-group">
            Medicine Group
          </label>
          <input
            value={MedicineFormData.group}
            onChange={(e) => MedicineFormDataChange("group", e.target.value)}
            id="product-group"
            type="text"
            placeholder="Medicine Group(Montilucast)"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        {/* Medicine Price*/}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-price">
            Current Price
          </label>
          <input
            value={MedicineFormData.price}
            onChange={(e) => MedicineFormDataChange("price", e.target.value)}
            id="product-price"
            type="number"
            placeholder="Per Piece"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        {/* Medicine Effective */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-effect">
            Medicine Pharmacology
          </label>
          <textarea
            value={MedicineFormData.effectiveness}
            onChange={(e) =>
              MedicineFormDataChange("effectiveness", e.target.value)
            }
            id="product-effect"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            required
          ></textarea>
        </div>

        {/* Medicine SideEffect */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-sideeffect">
            Side Effects
          </label>
          <textarea
            value={MedicineFormData.sideeffect}
            onChange={(e) =>
              MedicineFormDataChange("sideeffect", e.target.value)
            }
            id="product-sideeffect"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded hover:bg-indigo-600 transition"
        >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default UpdateMedicine;
