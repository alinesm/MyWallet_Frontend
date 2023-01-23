import React from "react";

function RegisterData({ item }) {
  return (
    <div className="registerDataContainer">
      <div className="auxContainer">
        <span className="date">{item.date}</span>
        <span className="description">{item.description}</span>
      </div>
      <div className={item.type === "entry" ? "entry" : "outflow"}>
        {item.value}
      </div>
    </div>
  );
}

export default RegisterData;
