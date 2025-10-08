/**
 * 格式化日期，确保服务器端和客户端的一致性
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  // 使用固定的格式，避免 locale 差异
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  return `${year}/${month}/${day}`;
}

/**
 * 格式化日期为 ISO 字符串，用于 dateTime 属性
 */
export function formatDateTime(dateString: string): string {
  return new Date(dateString).toISOString();
}
