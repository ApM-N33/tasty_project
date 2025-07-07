import React from "react"
import singleLeftItems from "../../../../data/single-left-items.json"
import { singleImages } from "../../../../assets/images/data.images"
import ThemesCards from "./ThemesCards"
import CloudBtns from "./CloudBtns"
import AuthorCard from "./AuthorCard"
import CommentsCards from "./CommentsCards"
import CommentForm from "./CommentForm"

function SingleLeftCol() {
  return (
    <div className="col-md-8 col-12">
      {singleLeftItems.leftColItems.map((item) => (
        <ThemesCards
          key={item.id}
          {...item}
          cardImg={singleImages[item.themesImg]}
        />
      ))}
      <ul className="cloud_btn-list my-5 list-unstyled d-flex align-items-center column-gap-2">
        {singleLeftItems.cloud_buttons.map((item, i) => (
          <CloudBtns key={i} item={item} />
        ))}
      </ul>
      {singleLeftItems.author_info.map((item) => (
        <AuthorCard
          key={item.id}
          {...item}
          cardImg={singleImages[item.author_avatar]}
        />
      ))}
      <h3 className="comments-title">
        {singleLeftItems.comments.length} {singleLeftItems.comments_text}
      </h3>
      {singleLeftItems.comments.map((item) => (
        <CommentsCards
          key={item.id}
          {...item}
          cardImg={singleImages[item.author_avatar]}
        />
      ))}
      <CommentForm />
    </div>
  )
}

export default SingleLeftCol
