import React from "react";
import "./style.css";

function Button(props) {
    return (
        <button className="btn" style={{ backgroundColor: props.bg ? props.bg : "#0275d8" }}>{props.children}</button>
    )
}

export default Button;