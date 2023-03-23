import React from "react";
import { useBoardContext } from "../../context/BoardsContext";
import "./Navbar.scss";

type Props = {
  toogleShowCreateTask: () => void;
};

export default function Navbar({ toogleShowCreateTask }: Props) {
  const { currentProject } = useBoardContext();

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <h1>Kanban</h1>
      </div>
      <div className="navbar-main-container">
        <h4>{currentProject.name}</h4>
        <button className="btn" onClick={() => toogleShowCreateTask()}>
          Add new task
        </button>
      </div>
    </nav>
  );
}
