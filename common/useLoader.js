import React, { useContext, useState, useEffect, createContext } from "react";
import LoadingScreen from "../component/Loading-Screen/loading-screen";

const AuthContext = createContext();

export function useLoader() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [showLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const value = {
    showLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {showLoading && <LoadingScreen />}
      {children}
    </AuthContext.Provider>
  );
}
