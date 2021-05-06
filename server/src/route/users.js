import express from 'express'
import { auth } from '../helper/auth.js'
import usersController from '../controller/UsersControlleur.js'

let router = express.Router()


router.get('/', auth, usersController.loadUsers)

export default router