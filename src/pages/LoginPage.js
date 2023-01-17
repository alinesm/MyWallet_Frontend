import React, { useState } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // // setIsLoading(true);
    const URL =
      // `${REACT_APP_API_URL}/login`;
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

  // console.log(token);
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
            placeholder="email..."
            // disabled={isLoading}
          />
          <input
            data-test="password-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="senha..."
            // disabled={isLoading}
          />
          <button
            data-test="login-btn"
            // disabled={isLoading}
            type="submit"
            onClick={handleLogin}
          >
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
