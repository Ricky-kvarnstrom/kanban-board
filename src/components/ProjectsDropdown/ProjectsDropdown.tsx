import React from "react";
import ProjectsLinks from "../ProjectsLinks/ProjectsLinks";
import "./ProjectsDropdown.scss";
import { X } from "react-feather";

type Props = {
  toggleShowProjectsDropdown: () => void;
};

export default function ProjectsDropdown({
  toggleShowProjectsDropdown,
}: Props) {
  return (
    <div className="model-container">
      <div className="model-card projects-dropdown">
        <div
          className="model-close"
          onClick={() => toggleShowProjectsDropdown()}
        >
          <X />
        </div>
        <h3>All Projects</h3>
        <ProjectsLinks />
      </div>
    </div>
  );
}
