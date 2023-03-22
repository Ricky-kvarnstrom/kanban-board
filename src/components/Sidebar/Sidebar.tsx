import React, { useState } from "react";
import { Folder, FolderPlus } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";
import "./Sidebar.scss";

type Props = {};

export default function Sidebar({}: Props) {
  const { projects, createProject, currentProject, changeBoard } =
    useBoardContext();
  const [showCreateProject, setshowCreateProject] = useState(false);
  const [projectName, setProjectName] = useState("");

  return (
    <div className="sidebar">
      <p>ALL BOARDS ( 2 )</p>
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
