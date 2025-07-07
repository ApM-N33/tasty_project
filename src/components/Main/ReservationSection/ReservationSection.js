import React from "react"
import ReservationLeftImg from "./ReservationLeftImg"
import ReservationForm from "./ReservationForm"

function ReservationSection() {
  return (
    <section className="reservation">
      <div className="mainContainer">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="reservation-title">Make a Reservation</h2>
          </div>
        </div>
        <div className="row">
          <ReservationLeftImg />
          <ReservationForm />
        </div>
      </div>
    </section>
  )
}

export default ReservationSection
