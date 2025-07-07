import { tabsIcons } from "../../../assets/images/data.images"
import { ourMenuImages } from "../../../assets/images/data.images"
import ourMenuTabs from "../../../data/our-menu-btns.json"
import ourMenuData from "../../../data/our_menu-items.json"
import OurTabsBtns from "./OurTabsBtns"
import OurMenuCols from "./OurMenuCols"
import useOurMenuItems from "../../../Shared/useOurMenuItems"

function OurMenu({ MakeReservationBtn }) {
  const { menuList, menuBtns, changeList } = useOurMenuItems(
    ourMenuData,
    ourMenuTabs
  )
  return (
    <section className="our-menu">
      <div className="mainContainer">
        <div className="row">
          <div className="col-12 text-center">
            <span className="label-text text-uppercase" data-aos="fade-up">
              Our Menu
            </span>
            <h2 data-aos="fade-up" className="our-title">
              Discover Our Exclusive Menu
            </h2>
          </div>
        </div>
        <div className="row">
          <nav className="col-12 nav--tabs" data-aos="fade-up">
            <ul className="tabs-list d-flex flex-column flex-md-row row-gap-2 justify-content-center align-items-center list-unstyled">
              {menuBtns.map((item) => (
                <OurTabsBtns
                  key={item.id}
                  {...item}
                  Icon={tabsIcons[item.icon]}
                  changeList={changeList}
                />
              ))}
            </ul>
          </nav>
        </div>
        <div className="row">
          {menuList.map((item) => (
            <OurMenuCols
              key={item.id}
              {...item}
              ourMenuImages={ourMenuImages}
            />
          ))}
        </div>
        {MakeReservationBtn && <MakeReservationBtn />}
      </div>
    </section>
  )
}

export default OurMenu
