<<<<<<< HEAD
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
=======
import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MedicineDetailsPage from "./pages/MedicineDetailsPage";
import UpdateMedicine from "./pages/UpdateMedicine";
import SearchedMedicinePage from "./pages/SearchedMedicinePage";
import SearchedMedicineDetailsPage from "./pages/SearchedMedicineDetailsPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medicine-details/:id" element={<MedicineDetailsPage />} />
        <Route path="/update-medicine/:id" element={<UpdateMedicine />} />
        <Route path="/MedicineaByKeyword/:id" element={<SearchedMedicinePage />} />
        <Route path="/searched-medicine-details/:id" element={<SearchedMedicineDetailsPage />} />
          </Routes>
    </>
  );
};

export default App;
>>>>>>> fe394f7 (Initial commit)
