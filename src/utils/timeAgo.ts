export function timeAgo(date: string | Date) {
  const now = new Date()
  const past = new Date(date)
  const diffInSeconds = Math.floor((past.getTime() - now.getTime()) / 1000)

  const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' })

  const divisions: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, 'second'],
    [60, 'minute'],
    [24, 'hour'],
    [7, 'day'],
    [4.34524, 'week'],
    [12, 'month'],
    [Infinity, 'year']
  ]

  let duration = diffInSeconds

  for (const [amount, unit] of divisions) {
    if (Math.abs(duration) < amount) {
      return rtf.format(duration, unit)
    }
    duration = Math.trunc(duration / amount)
  }
}
