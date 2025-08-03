import express from 'express'
const app = express()
const port = 3000
import authRouter from './routes/auth.router.js'
import { connection } from './config/dbconnection.js'


app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/auth', authRouter)

app.listen(port, () => {
  connection
  console.log(`Example app listening on port ${port}`)
})
 