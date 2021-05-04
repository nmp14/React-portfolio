import React, { useState } from "react";
import "./style.css";
import Home from "../Home";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import CubeFaceContext from "../../util/cubeFaceContext";

function Cube(props) {
    const [cubeFace, setCubeFace] = useState("");

    const handleCubeFaceChange = (side) => {
        setCubeFace(side);
    }

    return (
        <main className="site-cube">
            {/* Rotates cube based on class name and state of cube */}
            <CubeFaceContext.Provider value={{ cubeFace, handleCubeFaceChange }}>
                <div className={cubeFace ? "cube " + cubeFace : "cube show-front"}>
                    <Home />
                    <AboutMe />
                    <Portfolio />
                </div>
            </CubeFaceContext.Provider>
        </main>
    )
}

export default Cube;