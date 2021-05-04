import React, { useContext, useEffect } from "react";
import NavPageContext from "../../util/NavPageContext";
import CubeFaceContext from "../../util/CubeFaceContext";
import "./style.css";

function NavPage() {
    const { navState, handleNavPageChange, animateNavPage } = useContext(NavPageContext);
    const { handleCubeFaceChange } = useContext(CubeFaceContext);

    useEffect(() => {
        const navPage = document.getElementById("navPage");

        // If navState, Hide it. Hide immedietely if animate is false. 
        // If animate is true, add class slideout and add hidden after 0.7s.
        if (navState) {
            navPage.classList.remove("slideIn");
            if (!animateNavPage) {
                navPage.classList.add("hidden");
            } else {
                navPage.classList.add("slideOut");
                setTimeout(() => {
                    navPage.classList.add("hidden");
                    navPage.classList.remove("slideOut");
                }, 700);
            }
        } else {
            navPage.classList.remove("hidden");
            navPage.classList.add("slideIn");
        }

    }, [navState, animateNavPage]);

    const changeCube = (e, face) => {
        e.preventDefault();

        handleCubeFaceChange(`show-${face}`);
        handleNavPageChange(e, true);
    }

    return (
        <div id="navPage" className={"nav-page custom-flex flex-align"}>
            <div className="nav-close">
                <button onClick={(e) => handleNavPageChange(e)}>X</button>
            </div>
            <div>
                <button onClick={(e) => changeCube(e, "front")} id="home">Home</button>
                <button onClick={(e) => changeCube(e, "left")} id="aboutMePage">About me</button>
                <a href="/Resume">Resume</a>
                <button onClick={(e) => changeCube(e, "bottom")} id="port">Portfolio</button>
            </div>
        </div>
    )
}

export default NavPage;