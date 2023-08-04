import { useContext } from "react";
import BebidasContex from "../contex/BebidasProvider";

const useBebidas = () => {
  return useContext(BebidasContex);
};


export default useBebidas