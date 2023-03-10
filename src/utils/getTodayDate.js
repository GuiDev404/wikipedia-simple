export const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = `${today.getMonth() < 10 ? '0' : ''}${today.getMonth() + 1}`
  const day = `${today.getDate() < 10 ? '0' : ''}${today.getDate()}`

  return `${year}/${month}/${day}`
}
