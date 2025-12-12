import React from "react";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashBoard";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import AdminSigninPage from "./pages/AdminSigninPage";
import AddMedicinePage from "./pages/AddMedicinePage";
import MedicineDetailsPage from "./pages/MedicineDetailsPage";
import UpdateMedicine from "./pages/UpdateMedicine";
import SearchedMedicinePage from "./pages/SearchedMedicinePage";
import SearchedMedicineDetailsPage from "./pages/SearchedMedicineDetailsPage";

const App = () => {
  return (
    <>
      <Toaster />
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/dashboard" element={<AdminDashBoard />} />
     </Routes>
      <Footer />
    </>
  );
};



export default App;
