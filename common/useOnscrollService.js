import React, { useContext, useState, useEffect, createContext } from "react";

const ScrollServiceContext = createContext();

export function useOnscrollService() {
  return useContext(ScrollServiceContext);
}

export function ScrollService({ children }) {
  const goToTop = (fieldRef) => {
    if (fieldRef.current) {
      // fieldRef.current.scrollIntoView();
      fieldRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const value = {
    goToTop,
  };

  return (
    <ScrollServiceContext.Provider value={value}>
      {children}
    </ScrollServiceContext.Provider>
  );
}
