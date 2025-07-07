import { FaInstagram } from "react-icons/fa"
import instagramItems from "../../../data/instagram-items.json"
import { instagramImages } from "../../../assets/images/data.images"
import InstagramCards from "./InstagramCards"

function Instargram({ showModalItem, modalsRef }) {
  return (
    <section className="instargram">
      <div className="mainContainer">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <span
              className="instagram-label text-center text-uppercase d-d-inline-block"
              data-aos="fade-right"
            >
              instagram
            </span>
          </div>
        </div>
        <div className="row">
          {instagramItems.map((item, i) => (
            <InstagramCards
              key={item.id}
              {...item}
              instaImg={instagramImages[item.img]}
              FaInstagram={FaInstagram}
              showModalItem={showModalItem}
              modalsRef={(el) => (modalsRef.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instargram
