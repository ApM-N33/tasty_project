import React from "react"
import aboutCheffJpg from "../../../assets/images/about-2.jpg.webp"
import AboutTastyForm from "./AboutTastyForm"

function AboutTasty() {
  return (
    <section className="about-tasty">
      <div className="mainContainer">
        <AboutTastyForm />
        <div className="row">
          <div className="col-lg-6 ps-lg-0 px-0 about_img-col">
            <img
              className="w-100 h-100 object-fit-cover"
              src={aboutCheffJpg}
              alt=""
            />
          </div>
          <div className="col-lg-6 about_title-col">
            <span className="label-text text-uppercase">about tasty</span>
            <h3 className="about-title">
              Our chef cooks the most delicious food for you
            </h3>
            <p className="first-desc mb-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p className="second-desc">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTasty
