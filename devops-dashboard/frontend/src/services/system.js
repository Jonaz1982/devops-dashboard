export async function getSystemMetrics() {
  try {
    const res = await fetch('http://localhost:3001/system')
    return await res.json()
  } catch {
    return { error: true }
  }
}
