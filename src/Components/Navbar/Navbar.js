import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="./">Arctic</Link>
      <div>
        <NavLink to="/components">Component</NavLink>
        <NavLink to="/docs">Docs</NavLink>
        <a
          href="https://github.com/ParasArya289/css_component_library"
          target="_blank"
        >
          Github
        </a>
      </div>
    </nav>
  );
};
