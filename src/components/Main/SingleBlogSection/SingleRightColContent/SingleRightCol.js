import React from "react"
import SingleRightColForm from "./SingleRightColForm"
import singleRightItems from "../../../../data/single-right-items.json"
import CategoryItems from "./CategoryItems"
import CategoryBtns from "./CategoryBtns"

function SingleRightCol() {
  return (
    <div className="col-md-4 col-12">
      <SingleRightColForm />
      <div className="category_items-wrap">
        <h3 className="category-title" data-aos="fade-up">
          {singleRightItems.categoryTitle}
        </h3>
        <ul className="category-list list-unstyled">
          {singleRightItems.categoryItems.map((item) => (
            <CategoryItems key={item.id} {...item} />
          ))}
        </ul>
        <h3 className="category-title" data-aos="fade-up">
          {singleRightItems.tagCloutText}
        </h3>
        <ul className="category-list d-flex flex-wrap list-unstyled">
          {singleRightItems.categoryBtns.map((item, i) => (
            <CategoryBtns key={i} item={item} />
          ))}
        </ul>
        <h3 className="category-title" data-aos="fade-up">
          {singleRightItems.categorySubtitle}
        </h3>
        <p className="category-desc" data-aos="fade-up">
          {singleRightItems.categoryDesc}
        </p>
      </div>
    </div>
  )
}

export default SingleRightCol
