import React from "react"

function ReservationForm() {
  return (
    <div
      className="col-md-8 col-12 py-5 px-3 p-md-5 form-col"
      data-aos="fade-left"
    >
      <form className="reservation-form">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="input-wrap">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-wrap">
              <label>Phone</label>
              <input type="text" placeholder="Phone" />
            </div>
            <div className="input-wrap">
              <label>Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="input-wrap">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="input-wrap">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="input-wrap">
              <label>Time</label>
              <select>
                <option>Person</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn--primary" type="submit">
          Make a Reservation
        </button>
      </form>
    </div>
  )
}

export default ReservationForm
