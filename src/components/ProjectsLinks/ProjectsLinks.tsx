import React from "react";
import { useState } from "react";
import { Folder, FolderPlus } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";
import "./ProjectsLinks.scss";

export default function ProjectsLinks() {
  const { projects, createProject, currentProject, changeBoard } =
    useBoardContext();
  const [showCreateProject, setshowCreateProject] = useState(false);
  const [projectName, setProjectName] = useState("");

  return (
    <div className="projects-links">
      {" "}
      <ul className="sidebar-items">
        {projects.map((project, index) => (
          <li
            className={project.id === currentProject.id ? "active" : ""}
            onClick={() => changeBoard(index)}
          >
            <Folder />
            {project.name}
          </li>
        ))}

        <li onClick={() => setshowCreateProject(!showCreateProject)}>
          <FolderPlus />
          Create new board
        </li>
      </ul>
      {showCreateProject && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProject(projectName);
            setProjectName("");
            setshowCreateProject(false);
          }}
        >
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button className="btn">Create</button>
        </form>
      )}
    </div>
  );
}
