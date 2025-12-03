import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";




const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
     
          </Routes>
    </>
  );
};

export default App;