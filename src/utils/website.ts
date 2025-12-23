// utils/website.ts
export function normalizeWebsite(url: string): string {
  if (/^https?:\/\//i.test(url)) {
    return url
  }

  return `https://${url}`
}

export function displayWebsite(url: string): string {
  return url.replace(/^https?:\/\//i, '').replace(/\/$/, '')
}
