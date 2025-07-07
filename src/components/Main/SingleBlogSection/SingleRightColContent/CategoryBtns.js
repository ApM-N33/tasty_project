import React from "react"

function CategoryBtns({ item }) {
  return (
    <li className="tag-item" data-aos="fade-up">
      <button className="cloud-btn text-uppercase">{item}</button>
    </li>
  )
}

export default CategoryBtns
