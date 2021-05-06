import React from "react";

function Ul(props) {
    return (
        <ul id={props.id ? props.id : ""} className="uL">{props.children}</ul>
    )
}

export default Ul;