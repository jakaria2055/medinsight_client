import React from "react";

const UpdateMedicine = () => {
  return (
    <div className="py-10 flex flex-col items-center bg-white">
      <form className="md:p-10 p-4 space-y-5 max-w-lg">
        {/* Current Image Display */}
        <div className="flex flex-col gap-1 max-w-md">
          <p className="text-base font-medium">Current Medicine Image</p>
          <img
            src="https://miro.medium.com/v2/resize:fit:640/1*8DIwYzajy5b_24aAMk9hgA.jpeg"
            alt="Current medicine"
            className="w-32 h-32 object-cover border rounded"
          />
        </div>

        {/* Medicine Name */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Medicine Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Medicine Name(Monas)"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            defaultValue="Paracetamol 500mg"
            required
          />
        </div>

        {/* Medicine Group*/}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-group">
            Medicine Group
          </label>
          <input
            id="product-group"
            type="text"
            placeholder="Medicine Group(Montilucast)"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            defaultValue="Analgesic"
            required
          />
        </div>

        {/* Medicine Price*/}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-price">
            Current Price
          </label>
          <input
            id="product-price"
            type="number"
            placeholder="Per Piece"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            defaultValue="0.50"
            required
          />
        </div>

        {/* Medicine Effective */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-effect">
            Medicine Pharmacology
          </label>
          <textarea
            id="product-effect"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            defaultValue="Paracetamol is a common analgesic and antipyretic used to treat fever and mild to moderate pain. It works by inhibiting the synthesis of prostaglandins in the brain. Effective for headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers."
            required
          ></textarea>
        </div>

        {/* Medicine SideEffect */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-sideeffect">
            Side Effects
          </label>
          <textarea
            id="product-sideeffect"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            defaultValue="Common side effects include nausea, stomach pain, and loss of appetite. Rare but serious side effects include skin rash, liver damage, allergic reactions (swelling of face/tongue/throat, difficulty breathing), dark urine, and yellowing of eyes/skin."
            required
          ></textarea>
        </div>

        <button
          type="button"
          className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded hover:bg-indigo-600 transition"
        >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default UpdateMedicine;