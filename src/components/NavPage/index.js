import React, { useContext } from "react";
import NavPageContext from "../../util/NavPageContext";
import "./style.css";

function NavPage() {
    const bool = useContext(NavPageContext);
    return (
        <div id="navPage" className={bool ? "nav-page custom-flex flex-align hidden" : "nav-page custom-flex flex-align"}>
            <div className="nav-close">
                <a>X</a>
            </div>
            <div>
                <a id="home">Home</a>
                <a id="aboutMePage">About me</a>
                <a href="resume.html">Resume</a>
                <a id="port">Portfolio</a>
            </div>
        </div>
    )
}

export default NavPage;