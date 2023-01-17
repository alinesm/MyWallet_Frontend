import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterOutflow() {
  const [money, setMoney] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSaveOutflow(e) {
    e.preventDefault();
    // // setIsLoading(true);
    //   const URL =`${REACT_APP_API_URL}/nova-saida`
    // const body = { email, password };

    // const promise = axios.post(URL, body);
    // promise.then((res) => {
    //   setToken(res.data.token);
    //   setUserInfo({
    //     email: res.data.email,
    //     password: res.data.password,
    //   });

    navigate("/home");
    // });
    // promise.catch((err) => console.log(err));
  }

  return (
    <div className="registerOutflowContainer">
      <h1>Nova Saida</h1>

      <div className="inputsContainer">
        <form>
          <input
            data-test="email-input"
            onChange={(e) => setMoney(e.target.value)}
            value={money}
            type="text"
            placeholder="Valor"
            // disabled={isLoading}
          />
          <input
            data-test="password-input"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Descrição"
            // disabled={isLoading}
          />
          <button
            data-test="login-btn"
            // disabled={isLoading}
            type="submit"
            onClick={handleSaveOutflow}
          >
            Salvar entrada
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterOutflow;
