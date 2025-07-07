import { useEffect, useRef, useState } from "react"

function useFixedHeader() {
  const [isFixed, setFixed] = useState(false)
  const header = useRef(null)

  useEffect(() => {
    const fixHeader = () => {
      let scrollY = window.scrollY
      if (scrollY > 100 && scrollY < 150) {
        header.current.style.transform = "translateY(-100px)"
      } else if (scrollY > 300) {
        setTimeout(() => {
          header.current.style.transform = "translateY(0px)"
        }, 550)
        setFixed(true)
      } else if (scrollY === 0) {
        header.current.style.transform = "translateY(0px)"
        setFixed(false)
      }
    }
    window.addEventListener("scroll", fixHeader)
    return () => window.removeEventListener("scroll", fixHeader)
  }, [])

  return {
    isFixed,
    header,
  }
}

export default useFixedHeader
