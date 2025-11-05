import express from 'express'
import cors from 'cors'
import pkg from 'pg'
import si from 'systeminformation'

const { Pool } = pkg

// Crear servidor Express
const app = express()
app.use(cors())
app.use(express.json())

// DB connection (ajusta si ya tienes credenciales)
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'admin',
  database: 'observabilidad',
  port: 5432,
})

/* ============================
   HEALTH CHECK SERVICE
============================ */
app.get('/health', async (req, res) => {
  const result = { api: true, db: false, cache: false }

  try {
    await pool.query('SELECT 1')
    result.db = true
  } catch {
    result.db = false
  }

  // Fake cache status
  result.cache = Math.random() > 0.2

  res.json(result)
})

/* ============================
   SYSTEM METRICS
============================ */
app.get('/system', async (req, res) => {
  try {
    const [cpu, mem, time] = await Promise.all([si.currentLoad(), si.mem(), si.time()])

    res.json({
      cpu: cpu.currentLoad.toFixed(2), // %
      ram_used: ((mem.active / mem.total) * 100).toFixed(2), // %
      uptime: time.uptime, // seconds
    })
  } catch (error) {
    res.json({ error: 'system info failed' })
  }
})

/* ============================
   SERVER START
============================ */
app.listen(3001, () => {
  console.log('✅ Backend running → http://localhost:3001')
})

// Logs simulados
app.get('/logs', (req, res) => {
  const logs = [
    { ts: new Date().toISOString(), level: 'INFO', msg: 'Servicio iniciado correctamente.' },
    { ts: new Date().toISOString(), level: 'WARN', msg: 'Respuesta lenta desde base de datos.' },
    { ts: new Date().toISOString(), level: 'ERROR', msg: 'Fallo al conectar con API externa.' },
  ]

  res.json(logs)
})
