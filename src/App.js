import { Route, Routes, useLocation } from "react-router-dom"
import AOS from "aos"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Specialties from "./pages/Specialties"
import Reservation from "./pages/Reservation"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import instagramItems from "./data/instagram-items.json"
import { instagramImages } from "./assets/images/data.images"
import InstagramModalItems from "./components/Modals/InstagramModalItems"
import useInstaModals from "./Shared/useInstaModals"
import { useEffect } from "react"
import useDarkTheme from "./Shared/useDarkTheme"
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn"
import Preloader from "./components/Preloader/Preloader"
import SingleBlog from "./pages/SingleBlog"

function App() {
  const { modalItems, showModalItem, hideModalItem, nextImage, modalsRef } =
    useInstaModals(instagramItems)
  const { isDarkTheme, toggleTheme } = useDarkTheme()
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 700,
      anchorPlacement: "top-bottom",
      once: true,
      startEvent: "DOMContentLoaded",
    })
  }, [])

  useEffect(() => {
    const handleResize = () => AOS.refresh()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => AOS.refresh(), 300)
    return () => clearTimeout(timeout)
  }, [location.pathname])

  return (
    <>
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path={"/"}
          element={<Home showModalItem={showModalItem} modalsRef={modalsRef} />}
        />
        <Route
          path={"/menu"}
          element={<Menu showModalItem={showModalItem} modalsRef={modalsRef} />}
        />
        <Route
          path={"/specialties"}
          element={
            <Specialties showModalItem={showModalItem} modalsRef={modalsRef} />
          }
        />
        <Route
          path={"/reservation"}
          element={
            <Reservation showModalItem={showModalItem} modalsRef={modalsRef} />
          }
        />
        <Route
          path={"/blog"}
          element={<Blog showModalItem={showModalItem} modalsRef={modalsRef} />}
        />
        <Route
          path={"/blog/singleblog"}
          element={
            <SingleBlog showModalItem={showModalItem} modalsRef={modalsRef} />
          }
        />
        <Route
          path={"/about"}
          element={
            <About showModalItem={showModalItem} modalsRef={modalsRef} />
          }
        />
        <Route
          path={"/contact"}
          element={
            <Contact showModalItem={showModalItem} modalsRef={modalsRef} />
          }
        />
      </Routes>
      <Footer key={location.pathname} />
      {modalItems !== null &&
        modalItems.map((item, i) => (
          <InstagramModalItems
            key={item.id}
            {...item}
            instaImg={instagramImages[item.img]}
            hideModalItem={hideModalItem}
            nextImage={nextImage}
            totalImages={modalItems.length}
            imgNumber={i + 1}
          />
        ))}
      <ScrollToTopBtn />
      <Preloader />
    </>
  )
}

export default App
