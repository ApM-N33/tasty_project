import React from "react"
import { Link } from "react-router-dom"

function MakeReservationBtn() {
  return (
    <div className="row">
      <div className="col-12 text-center our_reserv-col" data-aos="flip-down">
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost
        </p>
        <Link className="btn--primary d-inline-block p-3" to={"/reservation"}>
          Make Reservation
        </Link>
      </div>
    </div>
  )
}

export default MakeReservationBtn
