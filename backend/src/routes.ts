import express from 'express'
import Login from './controller/Login'
import  {addUser} from './controller/Users'
import passport from 'passport'
import Dashboard from './controller/Dashboard'

const routes = express.Router()


routes.post('/register', addUser)

routes.post('/login', Login)

routes.post('/dashboard', passport.authenticate('jwt',{session: false}), Dashboard)


export default routes 
