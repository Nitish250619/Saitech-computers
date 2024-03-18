import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as HamburgerOpenIcon } from "../../Assets/Navlogo/HamburgerIcon.svg";
import { ReactComponent as HamburgerCloseIcon } from "../../Assets/Navlogo/Close.svg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = (id) => {
    if (id == null) {
      setClick(!click);
    } else {
      setClick(!click);
      const aboutSection = document.getElementById(id);
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Saitech Computers</span>
            <span className="icon">{/* <CodeIcon /> */}</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                onClick={() => {
                  handleClick("home");
                }}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                onClick={() => {
                  handleClick("services");
                }}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                onClick={() => {
                  handleClick("about");
                }}
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                onClick={() => {
                  handleClick("gallery");
                }}
              >
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                onClick={() => {
                  handleClick("testimonial");
                }}
              >
                TESTIMONIALS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-links"
                onClick={() => {
                  handleClick("contact");
                }}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          <div
            className="nav-icon"
            onClick={() => {
              handleClick(null);
            }}
          >
            {click ? (
              <span className="icon">
                <HamburgerCloseIcon />
              </span>
            ) : (
              <span className="icon">
                <HamburgerOpenIcon />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
