import React from "react"
import SingleLeftCol from "./SingleLeftColContent/SingleLeftCol"
import SingleRightCol from "./SingleRightColContent/SingleRightCol"

function SingleBlogSection() {
  return (
    <section className="single-blog">
      <div className="mainContainer">
        <div className="row">
          <SingleLeftCol />
          <SingleRightCol />
        </div>
      </div>
    </section>
  )
}

export default SingleBlogSection
