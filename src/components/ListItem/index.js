import React from "react";

// ListItem classes in root style.css
function ListItem(props) {
    return (
        <li className="center-text list-item">
            {props.children}
        </li>
    )
}

export default ListItem;