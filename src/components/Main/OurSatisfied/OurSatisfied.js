import React from "react"
import { usersImages } from "../../../assets/images/data.images"
import { starIcons } from "../../../assets/images/data.images"
import ourGuestsData from "../../../data/our-satisfied.json"
import Slider from "react-slick"
import { satisfiedSliderSettings } from "../../../Shared/slickslider"
import SatisfiedCards from "./SatisfiedCards"

function OurSatisfied() {
  return (
    <section className="our-satisfied">
      <div className="mainContainer">
        <div className="row">
          <div className="col-12 text-center">
            <span className="label-text text-uppercase" data-aos="zoom-in">
              Guests Says
            </span>
            <h2 className="satisfied-title" data-aos="zoom-in">
              Our Satisfied Guests says
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 px-0">
            <Slider {...satisfiedSliderSettings}>
              {ourGuestsData.map((item) => {
                const userImg = usersImages[item.id]
                return (
                  <SatisfiedCards
                    key={item.id}
                    {...item}
                    userImg={userImg}
                    starIcons={starIcons}
                  />
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSatisfied
