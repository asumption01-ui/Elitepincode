export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function homeHash(hash: string) {
  return `${import.meta.env.BASE_URL}#${hash}`
}
