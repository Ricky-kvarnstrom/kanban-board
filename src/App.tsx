import React from "react";
import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Board />
    </div>
  );
}
