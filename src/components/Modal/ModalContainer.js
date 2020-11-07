import React, {useState} from "react";
import ModalContents from "./ModalContents";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"

import "./style.css"

function ModalContainer (props) {

    const [lgShow, setLgShow] = useState(false);

    return (
        <>
        <div id="button-div">
          <div class="container">
            <div class="row justify-content-md-center">
              <div id="button" class="col-md-auto">
                <Button 
                  variant="outline-light"
                  size="lg"
                  onClick={() => setLgShow(true)}>
                  Meet Our Staff
                </Button>
              </div>
            </div>
          </div>
        </div>
          
          <Modal {...props}
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton
                id="example-modal-sizes-title-lg"> 
                Directory 
            </Modal.Header>
            <Modal.Body className="show-grid">
                <ModalContents />
            </Modal.Body>
          </Modal>
        </>
    );
  }
  
  
  export default ModalContainer;