import React, { useState, useEffect } from "react";
import "./style.css";
import Home from "../Home";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";

function Cube(props) {
    const [cubeFace, setCubeFace] = useState("");

    const handleCubeFaceChange = () => {

    }

    return (
        <main className="site-cube">
            {/* Rotates cube based on class name and state of cube */}
            <div className={cubeFace ? "cube " + cubeFace : "cube "}>
                <Home />
                <AboutMe />
                <Portfolio />
            </div>
        </main>
    )
}

export default Cube;