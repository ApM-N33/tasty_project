import React from "react"
import recentItems from "../../../data/recent-blog-items.json"
import { recentImages } from "../../../assets/images/data.images"
import RecentCards from "../RecentBlog/RecentCards"
import BlogPaginate from "./BlogPaginate"

function BlogSection() {
  const newCards = recentItems.map((item) => ({
    ...item,
    date: "July 9 2018 Admin",
  }))
  return (
    <section className="recent-blog blog">
      <div className="mainContainer">
        <div className="row row-gap-4">
          {newCards.slice(0, 8).map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-12">
              <RecentCards
                {...item}
                recentImage={recentImages[item.recentImg]}
                Icon={recentImages[item.chatIcon]}
              />
            </div>
          ))}
        </div>
        <BlogPaginate />
      </div>
    </section>
  )
}

export default BlogSection
