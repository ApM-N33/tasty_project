import { ImSpinner10 } from "react-icons/im"
import usePreloader from "../../Shared/usePreloader"

function Preloader() {
  const { isHide } = usePreloader()

  return (
    <div className={`preloader ${isHide ? "hide" : ""}`}>
      <h5>Loading...</h5>
      <span>
        <ImSpinner10 className="spinner-icon" />
      </span>
    </div>
  )
}

export default Preloader
