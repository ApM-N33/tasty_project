import React from "react"
import heroMenuBg from "../../../assets/images/bg_1.jpg.webp"
import { NavLink } from "react-router-dom"
import { Parallax } from "react-parallax"

function BlogHeroSection() {
  return (
    <section className="hero hero-menu position-relative">
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
                    to={"/blog"}
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
              <h1 className="hero-title mb-0">Blog</h1>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default BlogHeroSection
