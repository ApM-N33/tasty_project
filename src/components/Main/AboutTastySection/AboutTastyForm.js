import React from "react"

function AboutTastyForm() {
  return (
    <div className="row d-flex d-md-none">
      <div className="col-12 p-5 hero_form-col">
        <form className="w-100 hero-form">
          <div className="row row-gap-2 justify-content-center justify-content-between">
            <div className="col-lg-2 ps-lg-0">
              <input type="text" placeholder="Name" />
            </div>
            <div className="col-lg-2">
              <input type="text" placeholder="Phone" />
            </div>
            <div className="col-lg-2">
              <input type="date" />
            </div>
            <div className="col-lg-2">
              <input type="time" />
            </div>
            <div className="col-lg-2">
              <select>
                <option>Person</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div className="col-auto">
              <button className="hero_sbt-btn" type="submit">
                Book a Table
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AboutTastyForm
