import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu"
import useFixedHeader from "../../Shared/useFixedHeader"

function Header({ isDarkTheme, toggleTheme }) {
  const { isFixed, header } = useFixedHeader()
  return (
    <header
      ref={header}
      className={`header py-2 ${isFixed ? "headerFixed" : ""}`}
    >
      <nav className="navbar header-nav p-0 p-lg-2 position-relative navbar-expand-lg d-block">
        <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </nav>
      <MobileMenu />
    </header>
  )
}

export default Header
