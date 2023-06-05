import { isHoliday, pastWorkingHours, validBusinessDay } from './overrides'

// These would probably be invalid in 2025, since the holiday validator doesn't have dates for that year

test('if holiday is detected correctly', () => {
  const holiday = new Date(2023, 4, 26)
  const notHoliday = new Date(2023, 4, 25)
  expect(isHoliday(holiday)).toBe(true)
  expect(isHoliday(notHoliday)).toBe(false)
})

test('if weekend is set to next monday (not holiday)', () => {
  const weekend = new Date(2023, 4, 20)
  expect(validBusinessDay(weekend).getDay()).toBe(1)
})

test("if on business day that's holiday, returns next day (that is not a holiday)", () => {
  const newYear = new Date(2023, 0, 2)
  expect(validBusinessDay(newYear).getDay()).toBe(2)
})

test('if on holiday wednesday with thursday and friday as holidays, returns next monday', () => {
  const newYear = new Date(2023, 10, 22)
  const newDate = validBusinessDay(newYear)

  expect(newDate.getDay()).toBe(1)
  expect(newDate.getMonth()).toBe(10)
  expect(newDate.getFullYear()).toBe(2023)
})

test('if friday past 5 PM, with monday as holiday, tuesday should be valid business day', () => {
  const friday = new Date(2023, 4, 26, 17, 0)
  expect(validBusinessDay(friday).getDay()).toBe(2)
})

test('if business day under working hours, returns same day', () => {
  const day = new Date(2023, 4, 16)
  expect(validBusinessDay(day).getDate()).toBe(16)
})

test('if past working hours 5 PM', () => {
  const date = new Date(2023, 4, 16, 17, 0)
  expect(pastWorkingHours(date)).toBe(true)
  expect(validBusinessDay(date).getDay()).toBe(3)
})
