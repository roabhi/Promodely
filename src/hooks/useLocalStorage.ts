import { useState } from 'react'

const useLocalStorage = (key: any, initialValue: any) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  )

  const setValue = (value: any) => {
    // ? check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value

    setLocalStorageValue(value)
    // ? set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}

const getLocalStorageValue = (key: any, initialValue: any) => {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
