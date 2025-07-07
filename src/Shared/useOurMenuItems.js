import { useEffect, useState } from "react"

function useOurMenuItems(ourMenuData, ourMenuTabs) {
  const [menuList, setMenuList] = useState([])
  const [menuBtns, setMenuBtns] = useState([])

  const changeList = (category) => {
    setMenuList(ourMenuData.filter((item) => category === item.category))
    setMenuBtns(
      ourMenuTabs.map((item) => ({
        ...item,
        isActive: category === item.category,
      }))
    )
  }

  useEffect(() => {
    changeList("main")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    menuList,
    menuBtns,
    changeList,
  }
}

export default useOurMenuItems
