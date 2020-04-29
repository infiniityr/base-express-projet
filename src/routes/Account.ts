// eslint-disable-next-line no-unused-vars
import express from 'express'
import AccountController from '../controllers/Account'
import { BaseRouter } from './BaseRouter'

export default class Account extends BaseRouter {
    private accountController: AccountController

    constructor () {
        super()
        this.accountController = new AccountController()
        this.buildRoutes()
    }

    getAccount (req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const account = this.accountController.getAccount()
            res.json(account)
        } catch (error) {
            next(error)
        }
    }

    buildRoutes () {
        this.router.get('/', this.getAccount.bind(this))
    }
}
