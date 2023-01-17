import React, { useEffect } from "react";
import { FaSignOutAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import RegisterData from "../components/RegisterData";

function HomePage() {
  // useEffect(() => {
  //   const URL =`${REACT_APP_API_URL}/`

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };

  //   const promise = axios.get(URL, config);

  //   promise.then((res) => setListHabits(res.data));
  //   promise.catch((err) => console.log(err.response.data));
  // }, []);

  return (
    <div className="homePageContainer">
      <div className="containerHeader">
        <h1>Olá, Fulano</h1>
        <FaSignOutAlt color="#FFFFFF" size={23} />
      </div>
      {/* <div className="noDataBox">Não há registros de entrada ou saída</div> */}

      <div className="dataBox">
        <div>
          <RegisterData />
          <RegisterData />
          <RegisterData />
          <RegisterData />
        </div>

        <div className="total">
          <p className="totalText">Saldo</p>
          <p className="totalValue">Total</p>
        </div>
      </div>

      <div className="buttonsContainer">
        <div className="incomeButton">
          <Link to="/nova-entrada">
            <FaPlusCircle color="#FFFFFF" size={23} />
          </Link>
          <p>Nova Entrada</p>
        </div>
        <div className="outflowButton">
          <Link to="/nova-saida">
            <FaMinusCircle color="#FFFFFF" size={23} />
          </Link>
          <p>Nova Saida</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
