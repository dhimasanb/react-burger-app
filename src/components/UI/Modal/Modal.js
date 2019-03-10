import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => (
    <div
        className={classes.Modal} style={{
        transform: props.show ? "translateY(0)" : "translateT(-10)",
        opacity: props.show ? "1" : "0"
    }}>
        {props.children}
    </div>
);

export default Modal;