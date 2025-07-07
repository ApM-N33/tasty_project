import React from "react"
import { IoIosSunny } from "react-icons/io"
import { FiMoon } from "react-icons/fi"

function DarkThemeBtn({ isDarkTheme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="theme-btn">
      {isDarkTheme ? (
        <IoIosSunny className="theme-icon" />
      ) : (
        <FiMoon className="theme-icon" />
      )}
    </button>
  )
}

export default DarkThemeBtn
