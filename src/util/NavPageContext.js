import React from "react";

const NavPageContext = React.createContext({
    navState: true,
    closeNavPage: () => { }
});

export default NavPageContext;