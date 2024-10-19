export const saveLocalStorage = (storageName, value) => {
    localStorage.setItem(storageName, JSON.stringify(value))
}

export const getLocalStorage = (storageName) => {
    const value = localStorage.getItem(storageName)
    return JSON.parse(value)
}