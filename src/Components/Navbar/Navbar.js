import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillTriangleFill } from "react-icons/bs";
import "./Navbar.css";

export const Navbar = () => {
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      navbarRef.current.classList.add("navbar__scrolled");
    } else {
      navbarRef.current.classList.remove("navbar__scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);

  return (
    <nav ref={navbarRef} className="navbar">
      <Link to="./">
        <BsFillTriangleFill />
        Arctic
      </Link>
      <div>
        <NavLink to="/components">Component</NavLink>
        <NavLink to="/docs/Alert">Docs</NavLink>
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
