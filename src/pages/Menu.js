import React from "react"
import Main from "../components/Main/Main"
import MenuHeroSection from "../components/Main/HeroSection/MenuHeroSection"
import AboutTastyForm from "../components/Main/AboutTastySection/AboutTastyForm"
import OurMenu from "../components/Main/OurMenuSection/OurMenu"
import Instargram from "../components/Main/InstragramSection/Instargram"

function Menu({ showModalItem, modalsRef }) {
  return (
    <Main>
      <MenuHeroSection />
      <div className="mainContainer d-block d-md-none">
        <AboutTastyForm />
      </div>
      <OurMenu />
      <Instargram showModalItem={showModalItem} modalsRef={modalsRef} />
    </Main>
  )
}

export default Menu
