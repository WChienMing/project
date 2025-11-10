/**
 * 获取带有 base URL 的静态资源路径
 * @param {string} path - 资源路径（如 '/img/logo.png'）
 * @returns {string} - 包含 base URL 的完整路径
 */
export function getAssetPath(path) {
  const baseUrl = import.meta.env.BASE_URL
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  // 移除 baseUrl 末尾的 /，避免双斜杠
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  return `${cleanBaseUrl}${normalizedPath}`
}

