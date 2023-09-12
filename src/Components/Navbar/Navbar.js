import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link>Arctic</Link>
      <div>
        <NavLink to="/component">Component</NavLink>
        <NavLink to="/docs">Documentation</NavLink>
      </div>
    </nav>
  );
};
