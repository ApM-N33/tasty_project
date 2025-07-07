import React from 'react'
import heroSlides from "../../../data/hero_slides.json"
import Slider from "react-slick"
import { heroSliderSettings } from "../../../Shared/slickslider"
import { heroImages } from "../../../assets/images/data.images"
import { Link } from "react-router-dom"
import HeroForm from "./HeroForm"

function HomeHeroSection() {
  return (
    <section className="hero position-relative">
      <Slider {...heroSliderSettings}>
        {heroSlides.map((item) => (
          <div className="hero_bg-wrap">
            <div
              className="hero-bg position-relative d-flex w-100"
              style={{
                backgroundImage: `url(${heroImages[item.heroBgImg]})`,
              }}
            >
              <div className="mainContainer position-relative z-1 d-flex flex-column justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-11 text-center">
                    <h1 className="hero-title">{item.heroTitle}</h1>
                    <Link
                      className="hero-link mt-3 d-inline-block py-3 px-5"
                      to={"/reservation"}
                    >
                      Book a Table
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <HeroForm />
    </section>
  )
}

export default HomeHeroSection
