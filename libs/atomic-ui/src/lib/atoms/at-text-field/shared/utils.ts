import { FieldFormatterFn, SkipChangeFn } from '../index'

export const notNumber: SkipChangeFn = (value) => /[^0-9+]/g.test(value.replace(/[-()\s]/g, ''))

export const phoneFormatter: FieldFormatterFn = (value) => {
  const raw = value.replace(/[-()\s]/g, '')

  if (/^\+/.test(raw)) return { raw, formatted: raw }

  const formatted = raw.replace(/(^\d{1,3})(\d*)$/g, (_, first, rest) => {
    const end = rest.length > 3 ? `${rest.slice(0, 3)}-${rest.slice(3)}` : rest

    if (!end) return first
    return `(${first}) ${end}`
  })

  return { raw, formatted }
}
