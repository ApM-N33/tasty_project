import React from "react"

function BlogPaginate() {
  return (
    <div className="row">
      <nav className="col-12">
        <ul className="paginate d-flex flex-wrap gap-2 justify-content-center list-unstyled">
          <li className="page-item">
            <button className="page-link">{"<"}</button>
          </li>
          {[...Array(5)].map((_, i) => (
            <li key={i} className="page-item">
              <button className={`page-link ${i === 0 ? "active" : ""}`}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link">{">"}</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default BlogPaginate
