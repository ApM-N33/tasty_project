import React from "react"

function ContactUsMap() {
  return (
    <div className="col-12 contact-map" data-aos="flip-up">
      <iframe
        className="contact-iframe w-100 h-100"
        title="Google Maps location of 198 W 21st Street"
        src="https://www.google.com/maps/embed?pb=..."
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default ContactUsMap
