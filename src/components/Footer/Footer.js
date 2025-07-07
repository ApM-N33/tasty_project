import React from "react"
import FooterTasty from "./FooterTasty"
import FooterOpeningHours from "./FooterOpeningHours"
import FooterContactInfo from "./FooterContactInfo"
import FooterNewsletter from "./FooterNewsletter"
import { FaHeart } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="mainContainer">
        <div className="row row-gap-3 row-gap-sm-0">
          <FooterTasty />
          <FooterOpeningHours />
          <FooterContactInfo />
          <FooterNewsletter />
        </div>
        <div className="row">
          <div className="col-12 text-center" data-aos="fade-in">
            <p className="footer_bottom-text">
              Copyright ©2025 All rights reserved | This template is made with{" "}
              <span className="d-inline-flex align-items-center">
                <FaHeart className="me-1" />
              </span>
              by Colorlib
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
