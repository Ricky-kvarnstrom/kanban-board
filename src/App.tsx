import React, { useState } from "react";
import Board from "./components/Board/Board";
import CreateTaskModel from "./components/CreateTaskModel/CreateTaskModel";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);

  function toogleShowCreateTask() {
    setShowCreateTask(!showCreateTask);
  }

  return (
    <div className="app">
      <Navbar toogleShowCreateTask={toogleShowCreateTask} />
      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      {showCreateTask && (
        <CreateTaskModel toggleShowCreateTask={toogleShowCreateTask} />
      )}
    </div>
  );
}
