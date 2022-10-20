import { useContext } from "react";
import { ContextData } from "./Context";
import { Section } from "./Section";

function Navbar() {
  const { style1, data } = useContext(ContextData);
  return (
    <>
      <h1 style={style1}>this is Navbar</h1>
      <Section />
    </>
  );
}

export default Navbar;
