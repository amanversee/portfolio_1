import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Resume from "../../assets/Resume.pdf";

function Nav() {

  const menu = useRef();
  const mobile = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("nav h1", {
      y: -80,
      opacity: 0,
      duration: 0.8,
    });

    tl.from("nav ul li", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
    });
  }, []);

  const closeMenu = () => {
    mobile.current.classList.remove("activemobile");
    menu.current.classList.remove("activeham");
  };

  return (
    <nav>

      {/* LOGO */}
      <Link to="home" smooth duration={500} style={{ cursor: "pointer" }}>
        <h1 className="logo">Aman Mourya</h1>
      </Link>


      {/* DESKTOP MENU */}
      <ul className="desktopmenu">

        <li>
          <Link to="home" activeClass="active" spy smooth duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" activeClass="active" spy smooth duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="projects" activeClass="active" spy smooth duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact" activeClass="active" spy smooth duration={500}>
            Contact
          </Link>
        </li>

        <li>
          <a 
            href="https://www.linkedin.com/in/aman-mourya01/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedinBtn"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a 
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resumeBtn"
          >
            View Resume
          </a>
        </li>

      </ul>


      {/* HAMBURGER MENU */}
      <div
        className="hamburger"
        ref={menu}
        onClick={() => {
          mobile.current.classList.toggle("activemobile");
          menu.current.classList.toggle("activeham");
        }}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>


      {/* MOBILE MENU */}
      <ul className="mobilemenu" ref={mobile}>

        <li>
          <Link onClick={closeMenu} to="home" activeClass="active" spy smooth duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="about" activeClass="active" spy smooth duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="projects" activeClass="active" spy smooth duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="contact" activeClass="active" spy smooth duration={500}>
            Contact
          </Link>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/aman-mourya01/" target="_blank" rel="noopener noreferrer" className="linkedinBtn">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={Resume} download className="resumeBtn">
            Download Resume
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Nav;