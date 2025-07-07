import React from "react"
import reservLeftImg from "../../../assets/images/bg_1.jpg.webp"

function ReservationLeftImg() {
  return (
    <div className="col-md-4 col-12 px-0 left_img-col" data-aos="fade-right">
      <img
        className="w-100 h-100 object-fit-cover"
        src={reservLeftImg}
        alt=""
      />
    </div>
  )
}

export default ReservationLeftImg
