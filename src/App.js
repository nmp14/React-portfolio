import React from "react";
import { HashRouter as RouterisCool, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App(props) {
    return (
        <RouterisCool basename={process.env.PUBLIC_URL}>
            <Wrapper>
                <Route exact path='/' component={Home} />
                <Route exact path='/Resume' component={Resume} />
            </Wrapper>
        </RouterisCool>
    )
}

export default App;