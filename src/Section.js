import { useContext } from "react";
import { ContextData } from "./Context";

export function Section() {
  const { info, styles, data, plus, minus } = useContext(ContextData);
  return (
    <>
      <h1>section</h1>
      <b style={{ ...styles }}>{info}</b>

      {data.map((item, index) => (
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: "15px",
          }}
          key={index}
        >
          <h1> {item.name} </h1>
          <p>{item.description}</p>
          <button onClick={() => plus(item)}>plus</button>
          <h2>{item.count}</h2>
          <button onClick={() => minus(item)}>minus</button>
        </div>
      ))}
    </>
  );
}
