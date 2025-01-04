import React from "react";
import ProjectItems from "./ProjectItems";
import ProjectCard from "./ProjectCard";

function Projects() {
    return(
        <div className="py-5" id="projects">
            <div className="container">
                <h2 className="mb-5">My Projects</h2>
                <div className="row g-4">
                    {
                        ProjectItems.map((project) => <ProjectCard key={project.id} projectImage={project.projectImg}
                        projectTitle={project.projectTitle}
                        projectDesc={project.projectDesc}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;