export async function getProviderStatus() {
  const urls = ['/status/cloudflare', '/status/github', '/status/google']

  const results = {}

  for (const endpoint of urls) {
    try {
      const res = await fetch(`http://localhost:3001${endpoint}`)
      const data = await res.json()
      results[data.provider] = data.status
    } catch (err) {
      results[endpoint] = 'Error'
    }
  }

  return results
}
