import axios from "axios";
import React, { useEffect } from "react";
import { FaSignOutAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import RegisterData from "../components/RegisterData";

function HomePage({ listData, setListData, token, name }) {
  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/home`;
    console.log("token", token);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((res) => {
      const aux = [...res.data].reverse();
      setListData(aux);
    });
    promise.catch((err) => console.log(err.response.data));
  }, []);

  const sumOutflow = listData
    .filter((item) => item.type === "outflow")
    .reduce((acc, item) => acc + parseFloat(item.value), 0);

  const sumEntries = listData
    .filter((item) => item.type !== "outflow")
    .reduce((acc, item) => acc + parseFloat(item.value), 0);

  const total = (sumEntries - sumOutflow).toFixed(2);

  return (
    <div className="homePageContainer">
      <div className="containerHeader">
        <h1>Olá, {name}</h1>
        <FaSignOutAlt color="#FFFFFF" size={23} />
      </div>
      {listData.length <= 0 ? (
        <div className="noDataBox">Não há registros de entrada ou saída</div>
      ) : (
        <div className="dataBox">
          <div className="listData">
            {listData.map((item) => (
              <RegisterData item={item} />
            ))}
          </div>

          <div className="total">
            <p className="totalText">Saldo</p>
            <p className={total > 0 ? "positive" : "negative"}>{total}</p>
          </div>
        </div>
      )}

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
