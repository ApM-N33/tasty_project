import Slider from "react-slick"
import recentItems from "../../../data/recent-blog-items.json"
import { recentImages } from "../../../assets/images/data.images"
import { recentSliderSettings } from "../../../Shared/slickslider"
import RecentCards from "./RecentCards"

function RecentBlog() {
  return (
    <section className="recent-blog">
      <div className="mainContainer">
        <div className="row">
          <div className="col-12 text-center">
            <span className="label-text text-uppercase" data-aos="zoom-out">
              blog
            </span>
            <h2 className="recent-title" data-aos="zoom-out">
              Recent Blog
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 px-0">
            <Slider {...recentSliderSettings}>
              {recentItems.map(
                (item) =>
                  item.page === "home" && (
                    <RecentCards
                      key={item.id}
                      {...item}
                      recentImage={recentImages[item.recentImg]}
                      Icon={recentImages[item.chatIcon]}
                    />
                  )
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentBlog
