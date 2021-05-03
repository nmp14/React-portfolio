import React from "react";

const styles = {
    padding: { padding: 0 },
    margin: { margin: 0 },
    width100: { width: "100%" },
    height100: { height: "100%" }
}

function Wrapper(props) {
    return <main style={{ ...styles.margin, ...styles.padding, ...styles.width100, ...styles.height100 }}>{props.children}</main>
}

export default Wrapper;