import React from "react"
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

function FooterTasty() {
  return (
    <div className="col-md-3 col-sm-6 col-12" data-aos="fade-up">
      <h2 className="footer-title">Tasty</h2>
      <p className="footer-subtitle">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <ul className="social-list d-flex align-items-center list-unstyled">
        <li className="social-item" data-aos="fade-up">
          <button className="social-link">
            <FaTwitter />
          </button>
        </li>
        <li className="social-item" data-aos="fade-up">
          <button className="social-link">
            <FaFacebookF />
          </button>
        </li>
        <li className="social-item" data-aos="fade-up">
          <button className="social-link">
            <FaInstagram />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default FooterTasty
