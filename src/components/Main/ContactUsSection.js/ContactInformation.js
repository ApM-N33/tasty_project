import React from "react"

function ContactInformation() {
  return (
    <div className="col-md-6 col-12 pe-md-4" data-aos="fade-down-right">
      <h2 className="contact-title">Contact Information</h2>
      <ul className="contact-list d-flex flex-column row-gap-3 list-unstyled">
        <li className="contact-item">
          Address: 198 West 21th Street, Suite 721 New York NY 10016
        </li>
        <li className="contact-item">
          Phone:{" "}
          <a className="contact-link" href="tel:+ 1235 2355 98">
            + 1235 2355 98
          </a>
        </li>
        <li className="contact-item">
          Email:{" "}
          <a className="contact-link" href="mailto:info@yoursite.com">
            info@yoursite.com
          </a>
        </li>
        <li className="contact-item">
          Website:{" "}
          <a className="contact-link" href="https://colorlib.com/">
            our website
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactInformation
