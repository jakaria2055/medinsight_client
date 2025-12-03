<<<<<<< HEAD
import React from 'react'

const MedicineDetailsPage = () => {
  return (
    <div>MedicineDetailsPage</div>
  )
}

export default MedicineDetailsPage
=======
const MedicineDetailsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f3ff] to-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="flex justify-between items-center bg-gradient-to-r from-[#3067dc] to-[#4021f1] px-6 py-4">
          <h1 className="text-white text-2xl font-semibold">
            Medicine Information
          </h1>
          <div className="text-sm text-white hover:text-gray-200 flex items-center gap-1 cursor-pointer">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Dashboard
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:flex md:gap-8">
          {/* Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <img
              src="https://miro.medium.com/v2/resize:fit:640/1*8DIwYzajy5b_24aAMk9hgA.jpeg"
              alt="Paracetamol"
              className="w-64 h-64 object-cover rounded-xl border border-gray-200 shadow-sm"
            />
          </div>

          {/* Details */}
          <div className="flex-1 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Paracetamol 500mg</h2>

            <p className="text-gray-500 mb-4">Category: Analgesic</p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">💰 Price per unit:</span>{" "}
                <span className="text-blue-600 font-bold">5 taka</span>
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-lg font-semibold text-blue-600 mb-1">
                Effectiveness
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Paracetamol is a common analgesic and antipyretic used to treat fever and mild to moderate pain. 
                It works by inhibiting the synthesis of prostaglandins in the brain. Effective for headaches, 
                muscle aches, arthritis, backaches, toothaches, colds, and fevers. It reduces fever by affecting 
                the hypothalamic heat-regulating center.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#B91C1C] mb-1">
                Possible Side Effects
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Common side effects include nausea, stomach pain, and loss of appetite. 
                Rare but serious side effects include skin rash, liver damage (especially with overdose), 
                allergic reactions (swelling of face/tongue/throat, difficulty breathing), 
                dark urine, and yellowing of eyes/skin. Consult a doctor immediately if any severe reactions occur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MedicineDetailsPage;
>>>>>>> fe394f7 (Initial commit)
