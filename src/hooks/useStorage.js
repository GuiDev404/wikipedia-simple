import { useState, useCallback, useEffect } from 'react'
import { getStorage, setStorage } from '../utils/localStorage'

const useStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    return getStorage(key) || defaultValue
  })

  useEffect(() => {
    const handleChanges = e => {
      if (e.key === key) {
        setValue(e.newValue)
        console.log(e.key)
      }
    }

    window.addEventListener('storage', handleChanges)

    return () => {
      window.removeEventListener('storage', handleChanges)
    }
  }, [key])

  const updater = useCallback(
    newValue => {
      setValue(newValue)
      setStorage(key, newValue)
    },
    [key]
  )

  return [value, updater]
}

export default useStorage
