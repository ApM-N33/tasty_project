import React from "react"
import Main from "../components/Main/Main"
import HomeHeroSection from "../components/Main/HeroSection/HomeHeroSection"
import AboutTasty from "../components/Main/AboutTastySection/AboutTasty"
import OurMenu from "../components/Main/OurMenuSection/OurMenu"
import MakeReservationBtn from "../components/Main/OurMenuSection/MakeReservationBtn"
import OurSpecialtiesHome from "../components/Main/OurSpecialtiesSection/OurSpecialtiesHome"
import OurSatisfied from "../components/Main/OurSatisfied/OurSatisfied"
import specialtiesItems from "../data/specialties-items.json"
import RecentBlog from "../components/Main/RecentBlog/RecentBlog"
import Instargram from "../components/Main/InstragramSection/Instargram"

function Home({ showModalItem, modalsRef }) {
  return (
    <Main>
      <HomeHeroSection />
      <AboutTasty />
      <OurMenu MakeReservationBtn={MakeReservationBtn} />
      <OurSpecialtiesHome specialtiesItems={specialtiesItems} />
      <OurSatisfied />
      <RecentBlog />
      <Instargram showModalItem={showModalItem} modalsRef={modalsRef} />
    </Main>
  )
}

export default Home
