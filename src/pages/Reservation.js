import React from "react"
import Main from "../components/Main/Main"
import ReservationHero from "../components/Main/HeroSection/ReservationHero"
import Instargram from "../components/Main/InstragramSection/Instargram"
import ReservationSection from "../components/Main/ReservationSection/ReservationSection"

function Reservation({ showModalItem, modalsRef }) {
  return (
    <Main>
      <ReservationHero />
      <ReservationSection />
      <Instargram showModalItem={showModalItem} modalsRef={modalsRef} />
    </Main>
  )
}

export default Reservation
