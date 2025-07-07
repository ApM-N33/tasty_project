import React from "react"
import { Link, NavLink } from "react-router-dom"
import BurgerBtn from "./BurgerBtn"
import DarkThemeBtn from "../DarkThemeBtn/DarkThemeBtn"

function Navbar({ isDarkTheme, toggleTheme }) {
  return (
    <div className="mainContainer position-relative d-flex align-items-center justify-content-between">
      <Link className="navbar-brand me-0" to={"/"}>
        Tasty
      </Link>
      <ul className="navbar d-none d-lg-flex navbar-list list-unstyled">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to={"/menu"}
          >
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to={"/specialties"}
          >
            Specialties
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to={"/reservation"}
          >
            Reservation
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to={"/blog"}
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <DarkThemeBtn isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <BurgerBtn />
    </div>
  )
}

export default Navbar
