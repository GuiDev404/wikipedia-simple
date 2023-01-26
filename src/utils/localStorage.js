export const KEY_GUARDADOS = 'GUARDADOS'

export const getStorage = (key) => JSON.parse(window.localStorage.getItem(key))
export const setStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))
