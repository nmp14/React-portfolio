import React from "react";
import "./style.css";

function Home() {
    return (
        // Front face of cube
        <section className="cube-face cube-face-front">
            <nav>
                <i className="fas fa-bars"></i>
            </nav>
            <div className="center-me custom-flex flex-align">
                <div>
                    <h1 className="center-text mb-3">Nathan Peek PhD (Chemistry)</h1>
                    <p className="center-text mb-3">Web Developer</p>
                    <p className="center-text mb-3">Email: nmp14fsu@gmail.com</p>

                    {/* Icons */}
                    <div className="icons custom-flex">
                        <a rel="noreferrer" href="https://github.com/nmp14" target="_blank"><i
                            className="fab fa-github-square"></i></a>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/nathan-peek-31b99862/"
                            target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a rel="noreferrer" href="https://www.facebook.com/nathan.peek.9/" target="_blank"><i
                            className="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>

            {/* Down arrow for portfolio */}
            <div className="arrow-container">
                <h2 className="center-text portfolio">Portfolio</h2>
                <div id="downArrow" className="arrow-2">
                    <i className="fa fa-angle-down"></i>
                </div>
            </div>
        </section>
    )
}

export default Home;