import React, { useState } from "react";
import "./style.css";
import Wrapper from "../../components/Wrapper";
import Cube from "../../components/Cube";
import NavPage from "../../components/NavPage";
import NavPageContext from "../../util/NavPageContext";

function Home(props) {
    // Change whether the navpage displays or not
    const [navState, setNavState] = useState(true);


    return (
        <Wrapper>
            <NavPageContext.Provider value={navState}>
                <NavPage />
                <Cube />
            </NavPageContext.Provider>
        </Wrapper>
    )
}

export default Home;