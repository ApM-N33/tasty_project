import React from "react"

function AuthorCard({ author_name, author_lastname, author_desc, cardImg }) {
  return (
    <div className="card author-card">
      <div className="row">
        <div className="col-3 d-flex justify-content-center p-0">
          <img src={cardImg} className="object-fit-cover" alt="..." />
        </div>
        <div className="col-9 p-0">
          <div className="card-body p-0">
            <h3 className="card-title mb-2">
              {author_name} {author_lastname}
            </h3>
            <p className="card-text">{author_desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
