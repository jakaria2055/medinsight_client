import AdminTaskStore from "../store/AdminTaskStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddMedicinePage = () => {
  const navigate = useNavigate();
  const { AddFormData, MedicineFormChange, AddMedicineRequest } =
    AdminTaskStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await AddMedicineRequest(AddFormData);
    if (res) {
      navigate("/admin-dashboard");
      toast.success("Medicine Added Successfully.");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="py-10 flex flex-col items-center bg-white">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        {/* Image */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <label
            htmlFor="fileInput"
            className="border bg-white rounded-md text-sm w-80 h-40 border-indigo-600/60 p-8 flex flex-col items-center gap-4  cursor-pointer hover:border-indigo-500 transition"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-gray-500">Drag & drop your image here</p>
            <p className="text-gray-400">
              Or <span className="text-indigo-500 underline">click</span> to
              upload
            </p>
            <input
              onChange={(e) => MedicineFormChange("image", e.target.files[0])}
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
          {AddFormData.image && (
            <p className="text-sm text-gray-600 mt-2">
              Selected: {AddFormData.image.name}
            </p>
          )}
        </div>

        {/* Medicine Name */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Medicine Name
          </label>
          <input
            value={AddFormData.name}
            onChange={(e) => MedicineFormChange("name", e.target.value)}
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
            value={AddFormData.group}
            onChange={(e) => MedicineFormChange("group", e.target.value)}
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
            value={AddFormData.price}
            onChange={(e) => MedicineFormChange("price", e.target.value)}
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
            value={AddFormData.effectiveness}
            onChange={(e) =>
              MedicineFormChange("effectiveness", e.target.value)
            }
            id="product-effect"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>

        {/* Medicine SideEffect */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-sideeffect">
            Side Effects
          </label>
          <textarea
            value={AddFormData.sideeffect}
            onChange={(e) => MedicineFormChange("sideeffect", e.target.value)}
            id="product-sideeffect"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddMedicinePage;
