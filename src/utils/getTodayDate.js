export const getTodayDate = () => {
  const today = new Date()

  const year = today.getFullYear()

  const nonZeroCurrentMonth = today.getMonth() + 1
  const month = `${nonZeroCurrentMonth < 10 ? '0' : ''}${nonZeroCurrentMonth}`

  const day = `${today.getDate() < 10 ? '0' : ''}${today.getDate()}`

  return `${year}/${month}/${day}`
}
