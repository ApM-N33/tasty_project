import { useEffect, useState } from "react"
function usePreloader() {
  const [isHide, setHide] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setHide(true), 600)
    return () => clearTimeout(timeout)
  }, [])

  return {
    isHide,
  }
}

export default usePreloader
