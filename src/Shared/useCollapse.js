import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

function useCollapse() {
  const mobileMenu = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (mobileMenu.current.classList.contains("show"))
      mobileMenu.current.classList.replace("show", "collapse")
  }, [location.pathname])

  return {
    mobileMenu,
  }
}

export default useCollapse
