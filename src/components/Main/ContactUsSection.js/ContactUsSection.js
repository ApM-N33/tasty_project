import React from "react"
import ContactInformation from "./ContactInformation"
import ContactUsForm from "./ContactUsForm"
import ContactUsMap from "./ContactUsMap"

function ContactUsSection() {
  return (
    <section className="contact-us">
      <div className="mainContainer">
        <div className="row row-gap-3">
          <ContactInformation />
          <ContactUsForm />
          <ContactUsMap />
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
