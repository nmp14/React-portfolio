import React from "react";
import Ul from "../Ul";
import ListItem from "../ListItem";

function ProjectDescPage(props) {
    const { title, desc, url, role, techUsed } = props;

    // console.log(props);

    // hides project description
    const exitProjectDescription = (e) => {
        e.preventDefault();

        if (!document.getElementById("projectDescriptions").classList.contains("hidden")) {
            document.getElementById("projectDescriptions").classList.add("hidden");
        }
    }

    return (
        <div id="projectDescriptions" className="project-descriptions hidden">
            <h4 id="projectTitle" className="center-text">{title}</h4>
            <div className="project-description-container">
                <h5>Description: </h5>
                <p id="projectInfo">{desc}</p>

                <h5>Tech / Languages used: </h5>
                <Ul id={"projectTech"}>
                    {techUsed.map(tech => (
                        <ListItem key={tech}>{tech}</ListItem>
                    ))}
                </Ul>

                <h5>Role: </h5>
                <p id="projectRole">{role}</p>

                <div className="custom-flex">
                    <a href={url} id="projectLink" target="_blank" rel="noreferrer">
                        <button>Deployed App or Demo (click here)</button>
                    </a>
                </div>

                <div className="custom-flex">
                    <button onClick={(e) => exitProjectDescription(e)}>Go back</button>
                </div>
            </div>
        </div>

    )
}

export default ProjectDescPage;