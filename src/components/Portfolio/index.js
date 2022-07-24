import React, { useState } from "react";
import Header from "../Header";
import ProjectDescPage from "../ProjectDescPage";
import getProject from "../../util/Project";
import Card from "../Card";
import "./style.css";
import Footer from "../Footer";
import Button from "../Button";

function Portfolio() {
    const [projectState, setProjectState] = useState({
        title: "",
        description: "",
        techArr: [1],
        url: "",
        role: "",
        github: ""
    });

    const getProjectDesc = async (e) => {
        const projectInfo = await getProject(e);

        setProjectState({
            title: projectInfo.title,
            description: projectInfo.description,
            techArr: projectInfo.tech,
            url: projectInfo.url,
            role: projectInfo.role,
            github: projectInfo.github
        });

        document.getElementById("projectDescriptions").classList.remove("hidden");
    }

    return (
        <section className="cube-face cube-face-bottom">
            <Header
                h2={"My Portfolio"}
            />

            <ProjectDescPage
                title={projectState.title}
                desc={projectState.description}
                techUsed={projectState.techArr}
                url={projectState.url}
                role={projectState.role}
                github={projectState.github}
            />

            <div className="portfolio">
                <div id="top"></div>
                {/* Description of projects when clicked */}

                <p id="portfolioHeader" className="center-text">Click images for more details!</p>
                {/* Code Pub project */}
                <Card
                    title={"Code Pub"}
                    url={`${process.env.PUBLIC_URL}/Images/Code-pub-min.png`}
                    alt={"Homepage for Code Pub restaurant site"}
                    dataTitle={"code-pub"}
                    getProjectDesc={getProjectDesc}
                />

                {/* Moods project */}
                <Card
                    title={"#Moods"}
                    url={`${process.env.PUBLIC_URL}/Images/moods_page-min.png`}
                    alt={"#Moods app home page. Music social media platform"}
                    dataTitle={"moods"}
                    getProjectDesc={getProjectDesc}
                />

                {/* FSU lab site */}
                <Card
                    title={"Stiegman Lab (FSU)"}
                    url={`${process.env.PUBLIC_URL}/Images/StiegmanLab-min.png`}
                    alt={"#Site for Dr. Stiegman's chemistry lab at FSU"}
                    dataTitle={"stiegman-lab"}
                    getProjectDesc={getProjectDesc}
                />

                {/* AniMoves project */}
                <Card
                    title={"AniMoves"}
                    url={`${process.env.PUBLIC_URL}/Images/animove-min.png`}
                    alt={"#Homepage for animoves app that keeps track of anime and movies"}
                    dataTitle={"ani-moves"}
                    getProjectDesc={getProjectDesc}
                />

                {/* Employee directory react app */}
                <Card
                    title={"Employee Directory"}
                    url={`${process.env.PUBLIC_URL}/Images/employee-directory-min.png`}
                    alt={"Directory of employees sortable and filterable by names"}
                    dataTitle={"employee-directory"}
                    getProjectDesc={getProjectDesc}
                />

                {/* BlogPosts  */}
                <Card
                    title={"BlogPosts"}
                    url={`${process.env.PUBLIC_URL}/Images/tech_blog.png`}
                    alt={"Blog post app"}
                    dataTitle={"blog-posts"}
                    getProjectDesc={getProjectDesc}
                />

                {/*  BudgeGrub */}
                <Card
                    title={"BudgeGrub"}
                    url={`${process.env.PUBLIC_URL}/Images/BudgeGrub.png`}
                    alt={"Budge grub app"}
                    dataTitle={"budge-grub"}
                    getProjectDesc={getProjectDesc}
                />

                <div className="card-end"></div>
            </div>
            <Footer />
        </section>
    )
}

export default Portfolio;