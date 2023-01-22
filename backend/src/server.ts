import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connection from './config/connect'
import  routes from './routes'

dotenv.config({ path: path.resolve(__dirname, '../config.env') })

const app = express();

const PORT = process.env.PORT || 8000

connection()

app.use(routes)








app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
