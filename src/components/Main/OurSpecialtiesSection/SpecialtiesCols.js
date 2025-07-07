import React from "react"
import { specialtiesImages } from "../../../assets/images/data.images"
import SpecialtiesCards from "./SpecialtiesCards"

function SpecialtiesCols({ id, menuItems }) {
  return (
    <div className="col-lg-6 col-12 px-0 card-col">
      {menuItems.map((item) => {
        const specImg = specialtiesImages[item.menuImg]
        return (
          <SpecialtiesCards
            key={`${id}-${item.id}`}
            {...item}
            specImg={specImg}
          />
        )
      })}
    </div>
  )
}

export default SpecialtiesCols
