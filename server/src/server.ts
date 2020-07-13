import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use('/uploads_users', express.static(path.resolve(__dirname, '..', 'uploads_users')))

app.listen(3333)
