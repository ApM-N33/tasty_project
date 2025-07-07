import { useEffect, useRef, useState } from "react"

function useInstaModals(instagramItems) {
  const [modalItems, setModalItems] = useState(null)
  const count = useRef(null)
  const modalsRef = useRef([])

  const showModalItem = (id) => {
    count.current = instagramItems.findIndex((item) => id === item.id)
    setModalItems(
      instagramItems.map((item) => ({
        ...item,
        isActive: id === item.id,
      }))
    )
  }

  const hideModalItem = () => {
    setModalItems(
      instagramItems.map((item) => ({
        ...item,
        isActive: false,
      }))
    )
  }

  const nextImage = (e) => {
    e.stopPropagation()
    count.current++
    setModalItems(
      instagramItems.map((item, i) => ({
        ...item,
        isActive: count.current % instagramItems.length === i,
      }))
    )
  }

  useEffect(() => {
    const hideAllModals = (e) => {
      if (modalItems !== null)
        setModalItems(
          instagramItems.map((item, i) => ({
            ...item,
            isActive: modalsRef.current[i].contains(e.target),
          }))
        )
    }
    document.addEventListener("click", hideAllModals)
    return () => document.removeEventListener("click", hideAllModals)
  }, [instagramItems, modalItems])

  useEffect(() => {
    let isHidden = false
    if (modalItems !== null)
      for (let item of modalItems) {
        if (item.isActive === true) {
          isHidden = true
          break
        }
      }
    if (isHidden) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
  }, [modalItems])

  return {
    modalItems,
    showModalItem,
    hideModalItem,
    nextImage,
    modalsRef,
  }
}

export default useInstaModals
