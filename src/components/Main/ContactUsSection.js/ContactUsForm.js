import React from "react"

function ContactUsForm() {
  return (
    <div className="col-md-6 col-12" data-aos="fade-down-left">
      <form className="contact_us-form">
        <div className="input-wrap">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="input-wrap">
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="input-wrap">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="input-wrap">
          <textarea placeholder="Message"></textarea>
        </div>
        <button className="btn--primary" type="submit">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm
