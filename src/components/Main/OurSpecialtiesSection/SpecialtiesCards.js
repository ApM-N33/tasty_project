import React from "react"

function SpecialtiesCards({
  specImg,
  menuTitle,
  menuDesc,
  menuPrice,
  layoutClass,
  ImgColPadding,
  BodyColPadding,
}) {
  return (
    <div className="card spec-card" data-aos="flip-down">
      <div className={`row ${layoutClass ? layoutClass : ""}`}>
        <div className={`col-md-6 col-12 card_img-col ${ImgColPadding}`}>
          <img src={specImg} className="w-100 h-100 object-fit-cover" alt="" />
        </div>
        <div className={`col-md-6 col-12 card_body-col ${BodyColPadding}`}>
          <div className="card-body text-center">
            <h5 className="card-title">{menuTitle}</h5>
            <p className="card-text">{menuDesc}</p>
            <p className="card-price mt-3">{menuPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialtiesCards
