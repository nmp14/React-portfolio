import React from "react";

const cubeFaceContext = React.createContext({
    cubeFace: "show-front",
    handleCubeFaceChange: () => { }
});

export default cubeFaceContext;