// import React from "react";
import { Link } from "react-router-dom";

const navContent = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
  { name: "Profile", path: "/profile"},
];

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "violet",
        color: "white",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <h1>Logo</h1>
      <div>
        <ul style={{ listStyle: "none", display: "flex" }}>
          {navContent.map((content, oj) => (
            <li key={oj} style={{ marginLeft: "20px" }}>
              <Link
                style={{ textDecoration: "none", color: "brown" }}
                to={content.path}
              >
                {content.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
