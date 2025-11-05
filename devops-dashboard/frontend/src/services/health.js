export async function getHealth() {
  try {
    const res = await fetch('http://localhost:3001/health')
    return res.json()
  } catch (e) {
    return { api: false, db: false, cache: false }
  }
}
