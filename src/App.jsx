import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./contex/CategoriasProvider";
import { BebidasProvider } from "./contex/BebidasProvider";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import Banner from "./components/Banner";

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <Banner/>

        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas/>
          <ModalBebida/>
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
