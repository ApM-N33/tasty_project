import React from "react"
import { Parallax } from "react-parallax"
import bgImg from "../../../assets/images/bg_3.jpg.webp"
import SpecialtiesCols from "./SpecialtiesCols"

function OurSpecialtiesHome({ specialtiesItems }) {
  return (
    <section className="our-specialties position-relative">
      <div className="paralax-wrap w-100 position-absolute start-0 top-0">
        <Parallax className="w-100 h-100" bgImage={bgImg} strength={400}>
          <div className="specialties-bg position-relative w-100"></div>
        </Parallax>
      </div>
      <div className="mainContainer position-relative z-2">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="specialties-title" data-aos="zoom-in">
              Our Specialties
            </h2>
          </div>
        </div>
        <div className="row mx-0">
          {specialtiesItems.map(
            (item) =>
              item.page === "Home" && (
                <SpecialtiesCols key={item.id} {...item} />
              )
          )}
        </div>
      </div>
    </section>
  )
}

export default OurSpecialtiesHome
