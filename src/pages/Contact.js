import React from "react"
import Main from "../components/Main/Main"
import ContactHeroSection from "../components/Main/HeroSection/ContactHeroSection"
import Instargram from "../components/Main/InstragramSection/Instargram"
import ContactUsSection from "../components/Main/ContactUsSection.js/ContactUsSection"

function Contact({ showModalItem, modalsRef }) {
  return (
    <Main>
      <ContactHeroSection />
      <ContactUsSection />
      <Instargram showModalItem={showModalItem} modalsRef={modalsRef} />
    </Main>
  )
}

export default Contact
