// import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import RegisterIncome from "./pages/RegisterIncome";
import RegisterOutflow from "./pages/RegisterOutflow";

// import { AppProvider } from "../context";

function App() {
  return (
    <BrowserRouter>
      <div className="masterContainer">
        {/* <AppProvider> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-entrada" element={<RegisterIncome />} />
          <Route path="/nova-saida" element={<RegisterOutflow />} />
        </Routes>
        {/* </AppProvider> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
