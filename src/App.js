import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import RegisterIncome from "./pages/RegisterIncome";
import RegisterOutflow from "./pages/RegisterOutflow";

function App() {
  const [token, setToken] = useState("");
  const [listData, setListData] = useState([]);
  const [name, setName] = useState("");
  return (
    <BrowserRouter>
      <div className="masterContainer">
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage token={token} setToken={setToken} setName={setName} />
            }
          />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route
            path="/home"
            element={
              <HomePage
                name={name}
                listData={listData}
                setListData={setListData}
                token={token}
              />
            }
          />
          <Route
            path="/nova-entrada"
            element={
              <RegisterIncome
                token={token}
                listData={listData}
                setListData={setListData}
              />
            }
          />
          <Route
            path="/nova-saida"
            element={
              <RegisterOutflow
                token={token}
                listData={listData}
                setListData={setListData}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
