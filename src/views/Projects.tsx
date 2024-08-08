import React from "react";
import projects from "../config/projects.json";
import "./styles/projects.scss";
import Pill from '../components/Pill/Pill.tsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FadeInSection from '../components/FadeInSection.tsx';

function Projects() {
    return (
        <section id="projects">
            <div id="projects-container">
                <div id="projects-title">
                    <h2>PROJECTS</h2>
                </div>
                <div id="projects-table-container">
                    <FadeInSection fadeIn="1.25s" floatUp="1.25s">
                        <table id="projects-table">
                            <thead id="projects-table-head">
                                <tr>
                                    <th className="projects-table-cell-name">Year</th>
                                    <th className="projects-table-cell-project">Project</th>
                                    <th className="projects-table-cell-made-at">Made at</th>
                                    <th className="projects-table-cell-build-with">Built with</th>
                                    <th className="projects-table-cell-link">Link</th>
                                </tr>
                            </thead>
                            <tbody id="projects-table-body">
                                {projects.map(project => {
                                    return (
                                        <tr>
                                            <td className="projects-table-cell-name">{project.year}</td>
                                            <td className="projects-table-cell-project">
                                                <div>
                                                    <div className="projects-table-cell-name-sm-screen">
                                                        <a href={project.link}>{project.project}<FontAwesomeIcon className="project-link-icon" icon={faAnglesRight} /></a>
                                                    </div>
                                                    <div className="projects-table-cell-name-lg-screen">
                                                        {project.project}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="projects-table-cell-made-at">{project.made_at}</td>
                                            <td className="projects-table-cell-build-with">
                                                <div className="projects-table-cell-build-with-pills">{project.built_with.map(tech => {
                                                    return (<Pill text={tech} />)
                                                    })}
                                                </div>
                                            </td>
                                            <td className="projects-table-cell-link">
                                                <a href={project.link} target="_blank">{project.link.includes("github.com") ? <FontAwesomeIcon style={{marginRight: "5px"}} icon={faGithub} /> : "" } {project.link.includes("github.com") ? "GitHub" : project.link.replace(/^https?\:\/\//i, "") }<FontAwesomeIcon className="project-link-icon" icon={faAnglesRight} /></a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
}

export default Projects;