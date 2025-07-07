import React from "react"
import Main from "../components/Main/Main"
import SingleBlogHeroSection from "../components/Main/HeroSection/SingleBlogHeroSection"
import SingleBlogSection from "../components/Main/SingleBlogSection/SingleBlogSection"
import Instargram from "../components/Main/InstragramSection/Instargram"

function SingleBlog({ showModalItem, modalsRef }) {
  return (
    <Main>
      <SingleBlogHeroSection />
      <SingleBlogSection />
      <Instargram showModalItem={showModalItem} modalsRef={modalsRef} />
    </Main>
  )
}

export default SingleBlog
