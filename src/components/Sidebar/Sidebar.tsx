import { useBoardContext } from "../../context/BoardsContext";
import ProjectsLinks from "../ProjectsLinks/ProjectsLinks";
import "./Sidebar.scss";

type Props = {};

export default function Sidebar({}: Props) {
  const { projects } = useBoardContext();

  return (
    <div className="sidebar">
      <p>ALL BOARDS ( {projects.length} )</p>
      <ProjectsLinks />
    </div>
  );
}
