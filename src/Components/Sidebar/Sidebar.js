import { NavLink } from "react-router-dom";
import { components } from "../../Utils";
import "./Sidebar.css";
export const Sidebar = () => {
  const arra = components;
  return (
    <div className="sidebar">
      {components.map(({ name }) => (
        <NavLink to={"/docs/" + name}>{name}</NavLink>
      ))}
      <NavLink to={"/docs/Heading"}>Heading</NavLink>
      <NavLink to={"/docs/Text"}>Text</NavLink>
    </div>
  );
};
