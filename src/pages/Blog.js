import React from "react"
import Main from "../components/Main/Main"
import BlogHeroSection from "../components/Main/HeroSection/BlogHeroSection"
import Instargram from "../components/Main/InstragramSection/Instargram"
import BlogSection from "../components/Main/BlogSection/BlogSection"

function Blog({ showModalItem, modalsRef }) {
  return (
    <Main>
      <BlogHeroSection />
      <BlogSection />
      <Instargram showModalItem={showModalItem} modalsRef={modalsRef} />
    </Main>
  )
}

export default Blog
