import React from "react"

function InstagramCards({
  id,
  instaImg,
  FaInstagram,
  showModalItem,
  modalsRef,
}) {
  return (
    <div
      data-aos="flip-left"
      ref={modalsRef}
      className="insta-card p-0 position-relative d-flex justify-content-center align-items-center"
      onClick={() => showModalItem(id)}
    >
      <img src={instaImg} alt="..." />
      <div className="overlay position-absolute d-flex justify-content-center align-items-center">
        <FaInstagram className="insta-logo" />
      </div>
    </div>
  )
}

export default InstagramCards
