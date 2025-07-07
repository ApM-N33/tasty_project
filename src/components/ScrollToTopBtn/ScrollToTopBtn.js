import React from "react"
import { IoIosArrowDropup } from "react-icons/io"
import useScrollToTop from "../../Shared/useScrollToTop"

function ScrollToTopBtn() {
  const { isVisible, scrollToTop } = useScrollToTop()
  return (
    <button
      className={`scroll_top-btn ${isVisible ? "active" : ""}`}
      onClick={() => scrollToTop()}
    >
      <IoIosArrowDropup className="btn-icon" />
    </button>
  )
}

export default ScrollToTopBtn
