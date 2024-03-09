import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <header className="d-flex justify-content-around  pb-3 pt-3 bg-black  ">
      <NavLink to="/" className="nameTag text-decoration-none">
        <p className="blue-gradient_text">KD</p>
      </NavLink>
      <nav className="d-flex gap-4  ">
        <NavLink
          to="/about"
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default navbar;
