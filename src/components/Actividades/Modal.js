import ReactDOM from "react-dom";
import styled from "styled-components";
//import Button from "./Button";
import { useState } from "react";

const Card = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  position: fixed;
  margin:1rem;
  width: 95%;
  height:90%;
  z-index: 100;
  overflow: "hidden;"
  text-align: center;
`;

function Modal(props) {
    
    return ReactDOM.createPortal(
        <Card>
            <h2>{props.title}</h2> 
            {/* <Button accion="Cerrar Modal" onClick={props.onClose}>
            </Button> */}
        </Card>,
        document.getElementById("modal")
    );
}
export default Modal;
