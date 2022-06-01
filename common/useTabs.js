import React, { useContext, useState, useEffect, createContext } from "react";

const TabContext = createContext();

export function useTab() {
  return useContext(TabContext);
}

export function TabProvider({ children }) {
  const [tab, setTab] = useState("");

  const value = {
    setTab,

    tab,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}
