import React from "react";
import Board from "./components/Board/Board";
import CreateTaskModel from "./components/CreateTaskModel/CreateTaskModel";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Board />
      </div>
      <CreateTaskModel />
    </div>
  );
}
