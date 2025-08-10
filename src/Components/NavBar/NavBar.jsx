import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/template/logo.svg";
import underline from "../../assets/template/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate, useLocation } from "react-router-dom";

import menu_open from "../../assets/template/menu_open.svg";
import menu_close from "../../assets/template/menu_close.svg";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAllProjectsPage = location.pathname === "/allProjects";
  const isProjectPage = location.pathname.startsWith("/projects/");

  return (
    <div className="navbar">
      <div className="nav-left">
        {/* <img src={logo} alt="Logo" /> */}

        {isHomePage && (
          <>
            {/* Fragment.  
        
          Can't put 2 sibling elements directly inside paranthesis without wrapping in a single parent element
          .We can use either a <div> or a React Fragment <> </> 
          Now React sees 1 parent element <> </> with Menu_open and <ul> */}

            {!isMenuOpen && (
              <img
                src={menu_open}
                onClick={openMenu}
                alt="menu open"
                className="nav-mob-open"
              />
            )}
            <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
              {/* If state is not equal to home, then return an empty tag */}
              {/* Remove offset from first anchor link since it's the first one*/}

              <img
                src={menu_close}
                onClick={closeMenu}
                alt="menu close"
                className="nav-mob-close"
              />

              <AnchorLink className="name-title" href="#hero">
                <p onClick={() => setMenu("home")}>ALLISON LEE</p>
              </AnchorLink>

              <li>
                <AnchorLink className="anchor-link" href="#hero">
                  {/* <p onClick={() => setMenu("home")}>About Me</p> */}
                  <p
                    className={menu === "home" ? "active-nav" : ""}
                    onClick={() => setMenu("home")}
                  >
                    About Me
                  </p>
                </AnchorLink>
                {/* {menu === "home" ? <img src={underline} alt="underline" /> : <></>} */}
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#about">
                  <p
                    className={menu === "about" ? "active-nav" : ""}
                    onClick={() => setMenu("about")}
                  >
                    Experience
                  </p>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#banners">
                  <p
                    className={menu === "banners" ? "active-nav" : ""}
                    onClick={() => setMenu("banners")}
                  >
                    Project Highlights
                  </p>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                  <p
                    className={menu === "contact" ? "active-nav" : ""}
                    onClick={() => setMenu("contact")}
                  >
                    Contact
                  </p>
                </AnchorLink>
              </li>
              <li></li>
            </ul>
          </>
        )}
      </div>

      <div className="nav-right">
        {isHomePage && (
          <button
            className="arrow-button right-arrow"
            onClick={() => navigate("/allProjects")}
          >
            <span class="arrow-text">See All Projects</span>
            <span class="arrow-head"></span>
          </button>
        )}

        {isAllProjectsPage && (
          <div className="nav-menu">
            <p className="name-title name-button" onClick={() => navigate("/")}>
              ALLISON LEE
            </p>
            <button
              className="arrow-button left-arrow"
              onClick={() => navigate("/")}
            >
              <span class="arrow-head"></span>
              <span class="arrow-text">Back to Home</span>
            </button>
          </div>
        )}

        {isProjectPage && (
          <div className="nav-menu">
            <p className="name-title name-button" onClick={() => navigate("/")}>
              ALLISON LEE
            </p>
            <button
              className="arrow-button left-arrow"
              onClick={() => navigate("/allProjects")}
            >
              <span class="arrow-head"></span>
              <span class="arrow-text">Back to All Projects</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
