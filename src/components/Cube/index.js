import React, { useState } from "react";
import "./style.css";
import Home from "../Home";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import CubeFaceContext from "../../util/CubeFaceContext";
import NavPage from "../../components/NavPage";
import NavPageContext from "../../util/NavPageContext";

function Cube(props) {
    const [cubeFace, setCubeFace] = useState("");
    // Change whether the navpage displays or not (hidden if true)
    const [navState, setNavState] = useState(true);
    const [animateNavPage, setAnimateNavPageState] = useState(false);

    const handleCubeFaceChange = (side) => {
        setCubeFace(side);
    }

    const handleNavPageChange = (event, toggleAnimate) => {
        event.preventDefault();
        const newNavState = !navState
        setNavState(newNavState);

        if (!animateNavPage && !toggleAnimate) setAnimateNavPageState(true);
        if (toggleAnimate) setAnimateNavPageState(false);
    }

    return (
        <main className="site-cube">
            <NavPageContext.Provider value={{ navState, handleNavPageChange, animateNavPage }}>
                {/* Rotates cube based on class name and state of cube */}
                <CubeFaceContext.Provider value={{ cubeFace, handleCubeFaceChange }}>
                    <NavPage />
                    <div className={cubeFace ? "cube " + cubeFace : "cube"}>
                        <Home />
                        <AboutMe />
                        <Portfolio />
                    </div>
                </CubeFaceContext.Provider>
            </NavPageContext.Provider>
        </main>
    )
}

export default Cube;