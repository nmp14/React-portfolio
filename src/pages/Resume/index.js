import React from "react";
import "./style.css";

function Resume(props) {
    return (
        <main className="resume">
            <nav>
                <h2>My Resume</h2>
                <p><a className="resumeNav" href={process.env.PUBLIC_URL + '/'}>Go Back</a></p>
            </nav>
            <iframe src="https://drive.google.com/file/d/16Kmnugc5iNHDNC-bq64XLkFhbhowrnWW/preview" title="Resume PDF"></iframe>
        </main>
    )
}

export default Resume;