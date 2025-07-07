import React from "react"

function OurMenuCards({ cardImg, menuTitle, menuDesc, menuPrice }) {
  return (
    <div className="card our_menu-card" data-aos="flip-right">
      <div className="row row-cols-md-auto row-cols-1 row-gap-3 align-items-center">
        <div className="col">
          <img src={cardImg} className="img-fluid object-fit-cover" alt="" />
        </div>
        <div className="col">
          <div className="card-body p-0">
            <h5 className="card-title mb-2">{menuTitle}</h5>
            <p className="card-text">{menuDesc}</p>
            <span className="card-price position-absolute">{menuPrice}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMenuCards
