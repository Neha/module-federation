import React, { createContext, useState } from "react";
const CountContext = createContext([0, () => {}]);

function CountProvider({ children }) {

  return (
    <CountContext.Provider value={useState(0)}>
      {children}
    </CountContext.Provider>
  );
}

export default CountProvider;
