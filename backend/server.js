import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5000
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

connectDB()

const app = express()

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Listening on port ${port}`))