import express from 'express'
import cors from 'cors'
export { default as MyButton } from './MyButton.vue'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API DevOps Dashboard OK')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`✅ API running on port ${PORT}`))
