import React from "react"
import chefItems from "../../../data/our_cheff-items.json"
import OurCheffCards from "./OurCheffCards"
import { chefImages } from "../../../assets/images/data.images"

function OurCheff() {
  return (
    <section className="our-cheff">
      <div className="mainContainer">
        <div className="row">
          <div className="col-12 text-center">
            <span className="label-text text-uppercase">Our Chef</span>
            <h2 className="our-title">Our Master Chef</h2>
          </div>
        </div>
        <div className="row row-gap-3">
          {chefItems.map((item) => (
            <OurCheffCards
              key={item.id}
              {...item}
              chefImage={chefImages[item.chefImg]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurCheff
