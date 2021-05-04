import React, { useContext } from "react";
import NavPageContext from "../../util/NavPageContext";

function Header(props) {
    const { handleNavPageChange } = useContext(NavPageContext);

    return (
        <nav className="relative">
            <h2 className="center-text">{props.h2}</h2> <span className="absolute-i"><i onClick={(e) => handleNavPageChange(e)} className="fas fa-bars"></i></span>
        </nav>
    )
}

export default Header;