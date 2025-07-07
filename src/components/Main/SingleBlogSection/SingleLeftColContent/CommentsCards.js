import React from "react"

function CommentsCards({
  className,
  cardImg,
  author_name,
  author_lastname,
  comment_date,
  comment_text,
  reply_btn,
}) {
  return (
    <div className={`card flex-row comment-card ${className}`}>
      <div>
        <img src={cardImg} className="object-fit-cover" alt="..." />
      </div>
      <div className="card-body p-0">
        <h3 className="card-title">
          {author_name} {author_lastname}
        </h3>
        <p className="date-text text-uppercase">{comment_date}</p>
        <p className="card-text mb-3">{comment_text}</p>
        <button className="reply-btn">{reply_btn}</button>
      </div>
    </div>
  )
}

export default CommentsCards
