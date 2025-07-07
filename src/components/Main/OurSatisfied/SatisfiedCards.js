import React from "react"

function SatisfiedCards({
  userImg,
  full_stars,
  desc,
  first_name,
  last_name,
  user_location,
  starIcons,
}) {
  return (
    <div className="card guestCard align-items-center" data-aos="zoom-in">
      <img src={userImg} className="card-img-top object-fit-cover" alt="" />
      <div className="card-body text-center">
        <ul className="stars-list column-gap-1 d-flex align-items-center justify-content-center list-unstyled">
          {full_stars.map((icon, i) => {
            const Icon = starIcons[icon]
            return <li key={i}>{Icon && <Icon className="star-icon" />}</li>
          })}
        </ul>
        <p className="card-text mt-3 mb-5">{desc}</p>
        <h5 className="card-title">
          {first_name} {last_name}
        </h5>
        <span className="user-location">{user_location}</span>
      </div>
    </div>
  )
}

export default SatisfiedCards
