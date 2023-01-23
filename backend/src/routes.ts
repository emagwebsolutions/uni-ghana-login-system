import express from 'express'
import Login from './controller/login'
import  {addUser} from './controller/Users'

const routes = express.Router()


routes.post('/register', addUser)

routes.post('/login', Login)


export default routes 
