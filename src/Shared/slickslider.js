import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

// ///////////// HERO SLIDER SETTINGS /////////////////////////

const NextArrow = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={{ ...props.style }}
    >
      <IoIosArrowForward className="arrow d-block w-100 h-100" />
    </button>
  )
}

const PrevArrow = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={{ ...props.style }}
    >
      <IoIosArrowBack className="arrow d-block w-100 h-100" />
    </button>
  )
}

const heroSliderSettings = {
  infinite: true,
  fade: true,
  arrows: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      },
    },
  ],
}

//////////////////////////////////////////////////////////////

// ////////// SATISFIED SLIDER SETTINGS ////////////////////

const satisfiedSliderSettings = {
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  centerMode: true,
  centerPadding: "0px",
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerPadding: "170px",
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "120px",
      },
    },

    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ],
}

// //////////////////////////////////////////////////////

///////// RECENT BLOG SLIDES SETTINGS ////////////////

const recentSliderSettings = {
  arrows: true,
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export { heroSliderSettings, satisfiedSliderSettings, recentSliderSettings }
