import React from "react"
import OurMenuCards from "./OurMenuCards"

function OurMenuCols({ id, category, menuItems, ourMenuImages }) {
  return (
    <div className={`col-lg-6 col-12 card-col ${category ? "active" : "hide"}`}>
      {menuItems.map((card) => (
        <OurMenuCards
          key={`${id}-${card.id}`}
          {...card}
          cardImg={ourMenuImages[card.menuImg]}
        />
      ))}
    </div>
  )
}

export default OurMenuCols
