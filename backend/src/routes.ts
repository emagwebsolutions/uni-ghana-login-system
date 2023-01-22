import express from 'express'
import  {addUser} from './controller/register'

const routes = express.Router()


routes.post('/register', addUser)


export default routes 
