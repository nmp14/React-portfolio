import React from "react";
import Header from "../../components/Header";
import "./style.css";

function Resume(props) {
    return (
        <main>
            <Header>
                <nav>
                    <h2>My Resume</h2>
                    <p><a href="/">Go Back</a></p>
                </nav>
            </Header>
            <iframe src="https://drive.google.com/file/d/16Kmnugc5iNHDNC-bq64XLkFhbhowrnWW/preview" title="Resume PDF"></iframe>
        </main>
    )
}

export default Resume;