import { useRef, useEffect } from 'react'
import useToggle from './useToggle'

const useClickOutside = ({ includesAnchor = false } = {}) => {
  const [show, toggle, forceToggle] = useToggle(false)

  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      const showAndCurrent = show && ref.current
      const containsClicked = ref.current.contains(e.target)

      if (includesAnchor && e.target.localName === 'a' && showAndCurrent && containsClicked) {
        toggle()
        e.target.click()

        return
      }

      if (showAndCurrent && !containsClicked) {
        toggle()
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [show, includesAnchor])

  // const handleClick = useCallback(e => {
  //   if (e.target.localName === 'a') {
  //     toggle()
  //   }
  // }, [])

  return { isOutside: show, ref, toggle, forceToggle }
}

export default useClickOutside
