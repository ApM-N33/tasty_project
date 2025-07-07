import React from "react"

function InstagramModalItems({
  isActive,
  instaImg,
  hideModalItem,
  nextImage,
  totalImages,
  imgNumber,
}) {
  return (
    <div className={`insta-modal ${isActive ? "active" : "hide"}`}>
      <button className="close_btn" onClick={hideModalItem}>
        X
      </button>
      <span className="total-label">
        {imgNumber} of {totalImages}
      </span>
      <div onClick={nextImage} className="modal_img-wrap">
        <img className="w-100 h-100 object-fit-cover" src={instaImg} alt="" />
      </div>
    </div>
  )
}

export default InstagramModalItems
