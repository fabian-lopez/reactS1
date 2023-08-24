import ReactDOM from "react-dom";
import Button from './Button'
import Card from './Card'
import styles from './Modal.module.css'
import React from "react";

const ModalOverlay = (props) => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.content}</p>
    </div>
    <div className={styles.actions}>
      <Button onClick={props.onConfirm}>Aceptar</Button>
    </div>
  </Card>
)


const Backdrop = (props) => (
    <div className={styles.backdrop} onClick={props.onConfirm}/>
)

function Modal(props) {
    return (
        
        <React.Fragment>
            {
                ReactDOM.createPortal(
                    <Backdrop
                        onClick={props.onConfirm}
                    />,
                    document.getElementById('backdrop-root')
                )
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay
                        title={props.title}
                        content={props.content}
                        onConfirm={props.onConfirm}
                    />,
                    document.getElementById('modal-root')
                )
            }
        </React.Fragment>
    );
  }

export default Modal