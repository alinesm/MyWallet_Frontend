import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterIncome({ token, listData, setListData }) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSaveIncome(e) {
    e.preventDefault();
    const body = {
      description: description,
      value: parseFloat(value).toFixed(2),
    };

    const URL = `${process.env.REACT_APP_API_URL}/nova-entrada`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(URL, body, config);
    promise.then((res) => {
      const aux = [...listData, res.data];
      setListData(aux);
      navigate("/home");
    });
    promise.catch((err) => {
      alert("descrição já castrada");
      console.log(err.response.data);
    });

    setValue("");
    setDescription("");
    // setListData([]);
  }

  return (
    <div className="registerIncomeContainer">
      <h1>Nova Entrada</h1>

      <div className="inputsContainer">
        <form>
          <input
            data-test="email-input"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Valor"
          />
          <input
            data-test="password-input"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Descrição"
          />
          <button
            data-test="login-btn"
            type="submit"
            onClick={handleSaveIncome}
          >
            Salvar entrada
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterIncome;
