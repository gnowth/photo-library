const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month} ${day}, ${year}`
}
