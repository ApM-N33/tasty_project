import React from "react"

function OurTabsBtns({ category, btnText, Icon, isActive, changeList }) {
  return (
    <li className="tab-item px-1">
      <button
        onClick={() => changeList(category)}
        className={`tab-btn p-4 column-gap-2 d-flex justify-content-center align-items-center
        ${isActive ? "active" : ""}`}
      >
        {Icon && <Icon className="tab-icon" />}
        <span className="tab-text">{btnText}</span>
      </button>
    </li>
  )
}

export default OurTabsBtns
