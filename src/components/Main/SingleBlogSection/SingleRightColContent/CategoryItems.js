import React from "react"

function CategoryItems({ categoryText, categoryCount }) {
  return (
    <li
      className="category-item d-flex align-items-center justify-content-between"
      data-aos="fade-up"
    >
      {categoryText}
      <span className="category-count">{`(${categoryCount})`}</span>
    </li>
  )
}

export default CategoryItems
