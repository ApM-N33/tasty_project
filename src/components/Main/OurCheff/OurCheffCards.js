import React from "react"

function OurCheffCards({ chefName, chefLastName, chefPosition, chefImage }) {
  return (
    <div className="col-md-4 col-12" data-aos="flip-up">
      <div className="card chef-card flex-column-reverse">
        <img src={chefImage} className="card-img-top object-fit-cover" alt="" />
        <div className="card-body px-0">
          <h5 className="card-title">
            {chefName} {chefLastName}
          </h5>
          <p className="card-text">{chefPosition}</p>
        </div>
      </div>
    </div>
  )
}

export default OurCheffCards
