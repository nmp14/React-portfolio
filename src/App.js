import React from "react";
import { BrowserRouter as RouterisCool, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App(props) {
    return (
        <RouterisCool>
            <Wrapper>
                <Route exact path="/React-portfolio" component={Home} />
                <Route exact path="/React-portfolio/Resume" component={Resume} />
            </Wrapper>
        </RouterisCool>
    )
}

export default App;