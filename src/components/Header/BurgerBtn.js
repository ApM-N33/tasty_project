import React, { useState } from "react"
import { MdMenu } from "react-icons/md"

function BurgerBtn() {
  const [isActive, setActive] = useState(false)
  return (
    <button
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseOne"
      className={`burger-btn d-lg-none
      d-flex align-items-center text-uppercase
      ${isActive && "active"}`}
      onClick={() => setActive(!isActive)}
    >
      <MdMenu className="burger_btn-icon" />
      menu
    </button>
  )
}

export default BurgerBtn
