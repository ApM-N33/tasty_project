import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/normalize.scss"
import "./assets/styles/animation.scss"
import "./assets/styles/darktheme.scss"
import "./assets/styles/mobileMenu.scss"
import "./assets/styles/modals.scss"
import "./assets/styles/global.scss"
import "./assets/styles/media.scss"
import "./assets/styles/app.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
