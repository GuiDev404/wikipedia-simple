import { useEffect, useState } from 'react'

const useDebounce = (value, time = 1000) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value)
    }, time)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, time])

  return debounceValue
}

export default useDebounce
