import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown"; /*DROPDOWN MENU*/
import styled from "styled-components";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Wrapper>
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          fullerstack
          <i class="fas fa-dna" />
        </Link>
        {/* MENU */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="menu-item-button">
            <Link
              to="/contact"
              className="nav-link-button"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="menu-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/portfolio"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Portfolio <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="menu-item">
            <Link
              to="/testimonials"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Testimonials
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/resume" className="nav-link" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
        </ul>
        {/* SITES */}
        <div className="link-icons">
          <a href="https://www.linkedin.com/in/dbaladi/" target="_blank">
            <i className="fab fa-linkedin-in" />
          </a>

          <a href="https://github.com/davidbaladi" target="_blank">
            <i className="fab fa-github" />
          </a>

          <a
            href="https://stackoverflow.com/users/9970782/goku"
            target="_blank"
          >
            <i className="fab fa-stack-overflow" />
          </a>
        </div>
        {/* MENU BURGER*/}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  * {
    outline: none;
  }
  /*theme*/
  .navbar {
    background: linear-gradient(
      90deg,
      rgb(28, 27, 27) 0%,
      rgb(26, 23, 23) 100%
    );
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }
  /*logo*/
  .navbar-logo {
    position: absolute;
    top: 10px;
    left: 12px;
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;

    .fa-dna {
      position: absolute;
      margin-left: 10px;
      font-size: 1.7rem;
    }
  }
  /*menu*/
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    position: absolute;
    top: 10px;
    margin: 0 auto;
    list-style: none;
    text-align: center;

    .menu-item {
      position: relative; /*necessary for dropdown menu to track*/
      display: flex;
      align-items: center;
      margin: 0 10px;
      letter-spacing: 2px;

      .fa-caret-down {
        margin-left: 6px;
      }

      &:hover {
        text-shadow: 2px 2px 8px #000;
      }
    }

    .menu-item-button {
      display: flex;
      width: 100%;
      align-items: center;
      margin: 0 10px;
      letter-spacing: 1px;

      &:hover {
        text-shadow: 0px -1px 16px rgba(255, 255, 255.5);
      }
    }

    .nav-link {
      color: #fff;
      text-decoration: none;
      padding: 0.3rem 0.7rem 0.4rem 0.7rem;
    }

    .nav-link:hover {
      background-color: #1888ff;
      border-radius: 4px;
      transition: all 0.2s ease-out;
    }

    .nav-link-button {
      padding: 8px 20px;
      border-radius: 4px;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
      background: #1888ff;
      text-decoration: none;
      border: 1px solid #1888ff;
    }

    .nav-link-button:hover {
      background: transparent;
      transition: all 0.3s ease-out;
    }
  }
  /*sites*/
  .link-icons {
    display: flex;
    position: absolute;
    top: 12px;
    right: 50px;
    font-size: 1.5rem;

    a {
      position: relative;
      text-decoration: none;
      color: rgb(28, 25, 25); /*matches bg*/
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 50%;
      width: 2.4rem;
      height: 2.4rem;
      margin: 0 1rem;
      overflow: hidden;
      cursor: pointer;
      border: 1px solid #555;
      &:hover {
        color: #fff;
      }

      .fa-linkedin-in {
        font-size: 1.3rem;
        transform: translate(0.5px, 0.5px);
      }
    }

    a:before {
      content: "";
      width: 100%;
      height: 100%;
      background: #1888ff;
      border-radius: 50%;
      position: absolute;
      right: -100%;
      top: -100%;
    }

    a:hover:before {
      right: 0;
      top: 0;
      transition: all 0.3s ease-out;
    }

    a:after {
      content: "";
      width: 100%;
      height: 100%;
      background: #1888ff;
      border-radius: 50%;
      position: absolute;
      left: -100%;
      bottom: -100%;
    }

    a:hover:after {
      left: 0;
      bottom: 0;
      transition: all 0.3s ease-out;
    }

    i {
      position: relative;
      z-index: 2;
    }
  }
  /*burger*/
  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    /*logo*/
    .navbar-logo {
      top: 8px;
      left: 10px;
      font-size: 0.5rem;

      .fa-dna {
        position: absolute;
        margin-left: 5px;
        font-size: 0.8rem;
      }
    }

    /*render menu*/
    .nav-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh; /*play*/
      position: absolute;
      top: 4rem; /**/
      left: -100%;
      z-index: 1;

      .menu-item-button {
        margin: 1rem;
      }

      .menu-item {
        margin: 1rem;
      }

      .nav-link {
        width: 100%;

        .fa-caret-down {
          display: none;
        }
      }

      .nav-link-button {
        margin: 0 auto;
      }
    }
    /*visible*/
    .nav-menu.active {
      overflow: hidden; /*TRICK*/
      background: #242222;
      left: 0;
      padding-top: auto;
      transition: all 0.5s ease;
    }
    /*burger*/
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      margin: 12px 20px 0 0;
      font-size: 1.5rem;
      cursor: pointer;
      color: #fff;

      &:hover {
        color: #eee;
        transition: all 0.3s ease;
      }

      .fa-times {
        font-size: 1.5rem;

        &:hover {
          color: #ddd;
          transition: all 0.3s ease;
        }
      }
    }
    /*sites*/
    .link-icons {
      right: auto;
      top: 14px;
      font-size: 1.2rem;

      a {
        height: 1.8rem;
        width: 1.8rem;

        .fa-linkedin-in {
          font-size: 1rem;
          transform: translateX(0.5px);
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    /*sites*/
    .link-icons {
      right: auto;
      top: 18px;
      font-size: 0.8rem;

      a {
        height: 1.2rem;
        width: 1.2rem;

        .fa-linkedin-in {
          font-size: 0.7rem;
          transform: translateX(0.5px);
        }
      }
    }
  }
`;
