import React, { useState } from "react";
import Header from "../Header";
import ProjectDescPage from "../ProjectDescPage";
import getProject from "../../util/Project";
import "./style.css";

function Portfolio() {
    const [projectState, setProjectState] = useState({
        title: "",
        description: "",
        techArr: [1],
        url: "",
        role: ""
    });

    const getProjectDesc = async (e) => {
        const projectInfo = await getProject(e);

        setProjectState({
            title: projectInfo.title,
            description: projectInfo.description,
            techArr: projectInfo.tech,
            url: projectInfo.url,
            role: projectInfo.role
        });

        document.getElementById("projectDescriptions").classList.remove("hidden");
    }

    return (
        <section className="cube-face cube-face-bottom">
            <Header
                h2={"My Portfolio"}
            />

            <div className="portfolio">
                <div id="top"></div>
                {/* Description of projects when clicked */}

                <ProjectDescPage
                    title={projectState.title}
                    desc={projectState.description}
                    techUsed={projectState.techArr}
                    url={projectState.url}
                    role={projectState.role}
                />

                <p id="portfolioHeader" className="center-text">Click images for more details!</p>
                {/* Moods project */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="center-text">#Moods</h3>
                    </div>
                    <div className="card-body">
                        <img onClick={(e) => getProjectDesc(e)} data-title="moods" src="Images/moods_page-min.png"
                            alt="#Moods app home page. Music social media platform." />
                    </div>
                </div>
                {/* FSU lab site */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="center-text">Stiegman Lab (FSU)</h3>
                    </div>
                    <div className="card-body">
                        <img onClick={(e) => getProjectDesc(e)} data-title="stiegman-lab" src="Images/StiegmanLab-min.png"
                            alt="Site for Dr. Stiegman's chemistry lab at FSU" />
                    </div>
                </div>
                {/* AniMoves project */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="center-text">AniMoves</h3>
                    </div>
                    <div className="card-body">
                        <img onClick={(e) => getProjectDesc(e)} data-title="ani-moves" src="Images/animove-min.png"
                            alt="Homepage for animoves app that keeps track of anime and movies" />
                    </div>
                </div>
                {/*  BudgeGrub */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="center-text">BudgeGrub</h3>
                    </div>
                    <div className="card-body">
                        <img onClick={(e) => getProjectDesc(e)} data-title="budge-grub" src="Images/BudgeGrub.png"
                            alt="Budge grub app" />
                    </div>
                </div>
                {/* BlogPosts  */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="center-text">BlogPosts</h3>
                    </div>
                    <div className="card-body">
                        <img onClick={(e) => getProjectDesc(e)} data-title="blog-posts" src="Images/tech_blog.png" alt="Blog post app" />
                    </div>
                </div>
                <div className="card-end"></div>
            </div>
        </section>
    )
}

export default Portfolio;