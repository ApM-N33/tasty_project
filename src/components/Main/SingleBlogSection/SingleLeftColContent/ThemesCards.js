import React from "react"

function ThemesCards({
  className,
  themesTitle,
  themesFirstText,
  cardImg,
  themesSecondText,
  themesThirdText,
  themesFourthText,
  themesFifthText,
}) {
  return (
    <div className={`card single_theme-card ${className}`}>
      <div className="card-body p-0">
        <h5 className="card-title mb-3">{themesTitle}</h5>
        <p className="card-text first-text mb-3">{themesFirstText}</p>
        <img
          src={cardImg}
          className="card-img-top object-fit-cover"
          alt="..."
        />
        <p className="card-text second-text my-3">{themesSecondText}</p>
        <p className="card-text third-text my-3">{themesThirdText}</p>
        <p className="card-text fourth-text my-3">{themesFourthText}</p>
        <p className="card-text fifth-text my-3">{themesFifthText}</p>
      </div>
    </div>
  )
}

export default ThemesCards
