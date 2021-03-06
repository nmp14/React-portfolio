import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Resume(props) {
    return (
        <main className="resume">
            <nav>
                <h2>My Resume</h2>
                <p><li className="link-li resumeNav"><Link to='/'>Go Back</Link></li></p>
            </nav>
            <iframe src="https://drive.google.com/file/d/104G5oQiftoYR7Q_C-mJCnWCuxxwyTlxW/preview" title="Resume PDF"></iframe>
        </main>
    )
}

export default Resume;