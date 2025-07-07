import React from "react"
import { Parallax } from "react-parallax"
import { NavLink } from "react-router-dom"
import heroMenuBg from "../../../assets/images/bg_1.jpg.webp"

function SpecialtiesHeroSection() {
  return (
    <section className="hero hero-menu hero-specialties position-relative">
      <Parallax className="hero-bg w-100" strength={500} bgImage={heroMenuBg}>
        <div className="mainContainer position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-11 text-center">
              <ul className="navbar column-gap-3 d-inline-flex align-items-center text-uppercase navbar-list list-unstyled">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link p-0 ${isActive ? "active" : ""}`
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link p-0 ${isActive ? "active" : ""}`
                    }
                    to={"/specialties"}
                  >
                    Speacialties
                  </NavLink>
                </li>
              </ul>
              <h1 className="hero-title mb-0">our Specialties</h1>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default SpecialtiesHeroSection
