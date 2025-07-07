import { useEffect, useState } from "react"

function useDarkTheme() {
  const [isDarkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("THEME")) || false
  )

  useEffect(() => {
    if (isDarkTheme) document.body.classList.add("dark")
    else document.body.classList.remove("dark")
    localStorage.setItem("THEME", JSON.stringify(isDarkTheme ? "dark" : ""))
  }, [isDarkTheme])

  const toggleTheme = () => setDarkTheme((prev) => !prev)

  return { isDarkTheme, toggleTheme }
}

export default useDarkTheme
