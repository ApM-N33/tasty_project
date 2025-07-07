import React from "react"
import SpecialtiesCols from "./SpecialtiesCols"

function OurSpecialtiesSpecialties({ specialtiesItems }) {
  return (
    <section className="our-specialties specialties_ position-relative">
      <div className="mainContainer position-relative z-2">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="specialties-title">Our Specialties</h2>
          </div>
        </div>
        <div className="row mx-0">
          {specialtiesItems.map((item) => (
            <SpecialtiesCols key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurSpecialtiesSpecialties
