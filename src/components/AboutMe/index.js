import React from "react";
import Header from "../Header";
import "./style.css";
import Footer from "../Footer";

function AboutMe() {
    return (
        <section className="cube-face cube-face-left">
            <Header
                h2={"About me"}
            />

            <div id="aboutMeFlex" className="custom-flex">
                <div className="selfie">
                    <img src="Images/SelfAtWork-min.png" alt="Selfie while at work" />
                </div>
                <div className="info custom-flex flex-align">
                    <div>
                        <h3 className="center-text">Nathan Peek <i>PhD</i> (Chemistry)</h3>
                        <p>
                            An upcoming, enthusiastic web developer based in Florida, that loves
                            problem solving and puzzles. Developed a strong critical-thinking skillset and objective
                            perspective from the chemistry field Successfully graduted from a full-stack focused
                            coding bootcamp hosted by the Unviersity of Miami.
                        </p>
                        <br />
                        <p>
                            Previously graduated from Florida State University (FSU) with my <i>PhD</i>
                            in inorganic chemistry in August, 2019. Researched the
                            spectroscopic properties of silica-supported metal oxide catalysts, specifically The
                            Phillips Catalyst,
                            which accounts for approximately 50% of the world's heigh-density polyethylene
                            (HDPE) production.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hobbies">
                <h4 className="center-text">Hobbies</h4>
                <ul>
                    <li><i className="fas fa-ticket-alt"></i></li>
                    <li><i className="fas fa-wine-glass"></i></li>
                    <li><i className="fas fa-table-tennis"></i></li>
                    <li><i className="fas fa-cat"></i></li>
                    <li><i className="fab fa-playstation"></i></li>
                    <li><i className="fas fa-utensils"></i></li>
                </ul>
            </div>
            <Footer />
        </section>
    )
}

export default AboutMe;