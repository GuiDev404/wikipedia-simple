import { useState } from 'react'

const useToggle = (value) => {
  const [show, setShow] = useState(value)

  const toggle = () => setShow(prevShow => !prevShow)
  const forceToggle = (v) => setShow(v)

  return [show, toggle, forceToggle]
}

export default useToggle
