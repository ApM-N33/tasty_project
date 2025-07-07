import React from "react"
import { Link } from "react-router-dom"

function RecentCards({ recentImage, Icon, date, desc, linkText, chatCount }) {
  return (
    <div className="card recent-card" data-aos="zoom-out">
      <Link to={"/blog/singleblog"}>
        <img src={recentImage} className="w-100 object-fit-cover" alt="..." />
      </Link>
      <div className="card-body">
        <p className="card-text date-text">{date}</p>
        <p className="card-text">{desc}</p>
        <div className="d-flex justify-content-between">
          <button className="link--btn">{linkText}</button>
          <span className="d-flex align-items-center column-gap-1">
            {Icon && <Icon className="chat-icon" />} {chatCount}
          </span>
        </div>
      </div>
    </div>
  )
}

export default RecentCards
