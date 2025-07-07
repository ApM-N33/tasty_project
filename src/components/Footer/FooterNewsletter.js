import React from "react"
import { FaTelegramPlane } from "react-icons/fa"

function FooterNewsletter() {
  return (
    <div className="col-md-3 col-sm-6 col-12" data-aos="fade-up">
      <h2 className="footer-title">Newsletter</h2>
      <p className="footer-subtitle">
        Far far away, behind the word mountains, far from the countries.
      </p>
      <form className="footer-form">
        <div className="input-wrap position-relative">
          <input className="w-100 input" type="text" placeholder="Subscribe" />
          <FaTelegramPlane className="telegram-icon" />
        </div>
      </form>
    </div>
  )
}

export default FooterNewsletter
