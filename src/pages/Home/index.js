import React, { useState } from "react";
import "./style.css";
import Wrapper from "../../components/Wrapper";
import Cube from "../../components/Cube";
import NavPage from "../../components/NavPage";
import NavPageContext from "../../util/NavPageContext";

function Home(props) {
    // Change whether the navpage displays or not (hidden if true)
    const [navState, setNavState] = useState(true);
    const [animateNavPage, setAnimateNavPageState] = useState(false);

    const handleNavPageChange = (event) => {
        event.preventDefault();
        const newNavState = !navState
        setNavState(newNavState);

        if (!animateNavPage) setAnimateNavPageState(true);
    }

    return (
        <Wrapper>
            <NavPageContext.Provider value={{ navState, handleNavPageChange, animateNavPage }}>
                <NavPage />
                <Cube />
            </NavPageContext.Provider>
        </Wrapper>
    )
}

export default Home;