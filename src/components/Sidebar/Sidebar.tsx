import React from "react";
import { Folder, FolderPlus } from "react-feather";
import { useBoardContext } from "../../context/BoardsContext";
import "./Sidebar.scss";

type Props = {};

export default function Sidebar({}: Props) {
  const boards = useBoardContext();
  console.log(boards);
  return (
    <div className="sidebar">
      <p>ALL BOARDS ( 2 )</p>
      <ul className="sidebar-items">
        <li className="active">
          <Folder />
          Place board
        </li>
        <li>
          <Folder />
          Place board
        </li>
        <li>
          <FolderPlus />
          Create new board
        </li>
      </ul>
    </div>
  );
}
