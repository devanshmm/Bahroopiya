const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const prisma = require('./lib/prisma')
const router = express.Router(); 
const userRoute = require('./routes/userRoute');
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())

// app.get('/health', (req, res) => {
//   res.json({ status: 'ok' })
// })
app.use('/api1', userRoute ); 


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})