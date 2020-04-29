// eslint-disable-next-line no-unused-vars
import express from 'express'
import AccountRouter from './Account'

export default class Router {
    public static initializeRoutes (app: express.Express) {
        app.use('/account', new AccountRouter().router)
    }
}
