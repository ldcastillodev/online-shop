export const timeDurationMap = (_: unknown, index: number) => {
  const isOdd = (index + 1) % 2 === 1
  const hourAmount = Math.floor((index + 1) / 2)

  const label = `${index !== 0 ? `${hourAmount} ${hourAmount === 1 ? 'hour' : 'hours'}` : '30 minutes'}${
    isOdd && index !== 0 ? ' and 30 minutes' : ''
  }`
  const value = `${hourAmount}${isOdd ? '.5' : ''}`
  return { label, value }
}

export const timeslotsMap =
  (startTime: number, modifier = 'a.m.') =>
  (_: unknown, i: number) => {
    const add30Minutes = i % 2 !== 0
    const hoursToAdd = Math.floor(i / 2)

    const value = `${startTime + hoursToAdd}:${add30Minutes ? '30' : '00'} ${modifier}`

    return { label: value, value }
  }

export const capacityMap = (_: unknown, i: number) => ({
  label: i === 10 ? '11 or more' : `${i + 1}`,
  value: `${i + 1}`,
})
