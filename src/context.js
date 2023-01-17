import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
