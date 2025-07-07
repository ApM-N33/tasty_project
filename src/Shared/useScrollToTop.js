import { useEffect, useState } from "react"

function useScrollToTop() {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const showScrollBtn = () => {
      let scrollY = window.scrollY
      scrollY > 300 ? setVisible(true) : setVisible(false)
    }
    window.addEventListener("scroll", showScrollBtn)
    return () => window.removeEventListener("scroll", showScrollBtn)
  }, [])

  const scrollToTop = () => window.scrollTo(0, 0)

  return {
    isVisible,
    scrollToTop,
  }
}

export default useScrollToTop
