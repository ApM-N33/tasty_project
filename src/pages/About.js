import React from "react"
import Main from "../components/Main/Main"
import AboutHeroSection from "../components/Main/HeroSection/AboutHeroSection"
import Instargram from "../components/Main/InstragramSection/Instargram"
import AboutTastyBlog from "../components/Main/AboutTastySection/AboutTastyBlog"
import OurCheff from "../components/Main/OurCheff/OurCheff"

function About({ showModalItem, modalsRef }) {
  return (
    <Main>
      <AboutHeroSection />
      <AboutTastyBlog />
      <OurCheff />
      <Instargram showModalItem={showModalItem} modalsRef={modalsRef} />
    </Main>
  )
}

export default About
