export function getAssetPath(path) {
  const baseUrl = import.meta.env.BASE_URL
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${cleanBaseUrl}${normalizedPath}`
}

