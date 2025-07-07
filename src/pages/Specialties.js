import React from "react"
import Main from "../components/Main/Main"
import specialtiesItems from "../data/specialties-items.json"
import Instargram from "../components/Main/InstragramSection/Instargram"
import SpecialtiesHeroSection from "../components/Main/HeroSection/SpecialtiesHeroSection"
import OurSpecialtiesSpecialties from "../components/Main/OurSpecialtiesSection/OurSpecialtiesSpecialties"

function Specialties({ showModalItem, modalsRef }) {
  return (
    <Main>
      <SpecialtiesHeroSection />
      <OurSpecialtiesSpecialties specialtiesItems={specialtiesItems} />
      <Instargram showModalItem={showModalItem} modalsRef={modalsRef} />
    </Main>
  )
}

export default Specialties
