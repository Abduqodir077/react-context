import React from "react";
import { useState } from "react";

export const ContextData = React.createContext();

function Context({ children }) {
  let info = ["salom men Abduqodir"];
  let styles = {
    fontSize: "50px",
    color: "white",
    background: "black",
    textTransform: "uppercase",
  };

  let style1 = {
    fontSize: "3rem",
    color: "red",
    background: "blue",
  };

  let [data, setData] = useState([
    { id: 1, name: "karam", description: "ewlkm", count: 0 },
    { id: 2, name: "olma", description: "ewlkm", count: 0 },
    { id: 3, name: "nok", description: "ewlkm", count: 0 },
    { id: 4, name: "banan", description: "ewlkm", count: 0 },
    { id: 5, name: "anor", description: "ewlkm", count: 0 },
  ]);

  function plus(prop) {
    const plData = data.map((item) => {
      return item.id === prop.id ? { ...item, count: item.count + 1 } : item;
    });
    setData(plData);
  }

  function minus(prop) {
    const plData = data.map((item) => {
      return item.id === prop.id ? { ...item, count: (item.count > 0 ? item.count - 1 : item.count) } : item;
    });
    setData(plData);
  }

  return (
    <ContextData.Provider value={{ info, styles, style1, data, plus, minus }}>
      {children}
    </ContextData.Provider>
  );
}

export default Context;
