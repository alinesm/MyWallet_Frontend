import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage({ token, setToken, setName }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/`;
    const body = { email, password };

    const promise = axios.post(URL, body);
    promise.then((res) => {
      setToken(res.data.token);
      setName(res.data.name);
      navigate("/home");
    });
    promise.catch((err) => {
      alert("email ou senha incorreta");
      console.log(err);
    });
  }

  console.log(token);

  return (
    <div className="loginPageContainer">
      <h1>My Wallet</h1>

      <div className="inputsContainer">
        <form>
          <input
            data-test="email-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="E-mail"
          />
          <input
            data-test="password-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Senha"
          />
          <button data-test="login-btn" type="submit" onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
      <Link data-test="signup-link" to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </div>
  );
}

export default LoginPage;
