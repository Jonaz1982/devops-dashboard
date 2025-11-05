export async function getCloudflareStatus() {
  const r = await fetch('http://localhost:3001/external-status')
  return r.json()
}
