import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSubscription(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/cadastro`;

    const body = {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword,
    };

    const promise = axios.post(URL, body);
    promise.then((res) => {
      alert("Cadastro realizado!");
      navigate("/");
    });
    promise.catch((err) => console.log(err));
  }

  return (
    <div className="singUpContainer">
      <h1>My Wallet</h1>

      <div className="inputsContainer">
        <form>
          <input
            data-test="user-name-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Nome"
          />
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

          <input
            data-test="user-image-input"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="Confirme a senha"
          />
          <button
            data-test="signup-btn"
            type="submit"
            onClick={handleSubscription}
          >
            Cadastrar
          </button>
        </form>
      </div>
      <Link data-test="login-link" to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </div>
  );
}

export default SignUpPage;
