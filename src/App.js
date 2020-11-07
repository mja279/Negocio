import React, {useState} from "react";

import Wrapper from "./components/Wrapper/index";
import Container from "./components/Container";
import Nav from "./components/Nav/index";
import ModalContainer from "./components/Modal/ModalContainer";



import './App.css';


function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Nav />
    <Wrapper>
      <Container className="col-md-12">
      <ModalContainer show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Wrapper>
  </>
  );
}

export default App;
