export async function getLogs() {
  try {
    const res = await fetch('http://localhost:3001/logs')
    return await res.json()
  } catch {
    return []
  }
}
