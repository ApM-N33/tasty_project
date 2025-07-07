import React from "react"

function HeroForm() {
  return (
    <div className="mainContainer hero_form-container d-none d-md-block position-absolute start-50 translate-middle-x bottom-0">
      <div className="row">
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
    </div>
  )
}

export default HeroForm
