import { useContext } from "react";
import CategoriasContex from "../contex/CategoriasProvider";

const useCategorias = () => {
  return useContext(CategoriasContex);
};


export default useCategorias