import React, { useContext, useState, useEffect, createContext } from "react";
import LoadingScreen from "../component/Loading-Screen/loading-screen";

const AuthContext = createContext();

export function useLoader() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [showLoading, setLoading] = useState(true);

  useEffect(() => {
    if (showLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [showLoading]);

  const value = {
    showLoading,
  };

  /* useEffect(() => {
    let bodyEl = document.querySelector("body");
    let paceEl = document.querySelector(".pace");
    console.log("log from useeffect befor cheak");

    if (!showLoading) {
      console.log("log from useeffect after cheak");
      let elem = document.getElementById("pace");
      let head = document.getElementsByTagName("head")[0];
      elem.parentElement.removeChild(elem);
      paceEl.classList.add("hideX");
    }
  }, []); */

  return (
    <AuthContext.Provider value={value}>
      {showLoading && <LoadingScreen />}
      {children}
    </AuthContext.Provider>
  );
}
