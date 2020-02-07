import express from 'express'
import * as accountController from '../controllers/account'

const router = express.Router()

router.get('/', accountController.getAccount)

export default router
