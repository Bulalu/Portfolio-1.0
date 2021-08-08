import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import dp from "../img/dp2.JPG";

function Navigation() {
  return (
    <NavigationStyle>
      <div className="avatar">
        <img src={dp} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active" exact>
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active" exact>
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 My Portfolio Website</p>
      </footer>
    </NavigationStyle>
  );
}

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--boarder-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--boarder-color);
    text-align: center;
    padding: 1rem 0;
    img {
      object-fit: contain;
      width: 60%;
      border-radius: 70%;
      border: 4px solid var(--boarder-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.2rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
        }

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: 3;
          opacity: 0.21;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--boarder-color);
    width: 100%;
    p {
      padding: 1rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
