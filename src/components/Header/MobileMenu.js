import { NavLink } from "react-router-dom"
import useCollapse from "../../Shared/useCollapse"
function MobileMenu() {
  const { mobileMenu } = useCollapse()
  return (
    <div className="mainContainer">
      <div className="mobile-menu accordion" id="mobileMenu">
        <ul
          ref={mobileMenu}
          id="collapseOne"
          className={`mobile_menu-list list-unstyled collapse`}
          data-bs-parent="#mobileMenu"
        >
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/menu"}
            >
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/specialties"}
            >
              Specialties
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/reservation"}
            >
              Reservation
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/blog"}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
