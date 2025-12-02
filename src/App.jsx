import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashBoard";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import AdminSigninPage from "./pages/AdminSigninPage";
import AddMedicinePage from "./pages/AddMedicinePage";
import MedicineDetailsPage from "./pages/MedicineDetailsPage";
import UpdateMedicine from "./pages/UpdateMedicine";
import SearchedMedicinePage from "./pages/SearchedMedicinePage";
import SearchedMedicineDetailsPage from "./pages/SearchedMedicineDetailsPage";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<AdminSigninPage />} />
        <Route path="/signup" element={<AdminSignUpPage />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
        <Route path="/add-medicine" element={<AddMedicinePage />} />
        <Route path="/medicine-details/:id" element={<MedicineDetailsPage />} />
        <Route path="/update-medicine/:id" element={<UpdateMedicine />} />
        <Route
          path="/MedicineByKeyword/:keyword"
          element={<SearchedMedicinePage />}
        />
        <Route
          path="/searched-medicine-details/:id"
          element={<SearchedMedicineDetailsPage />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;