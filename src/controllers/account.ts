import { Request, Response } from 'express'

export const getAccount = (req: Request, res: Response) => {
    res.json({
        title: 'Account Management'
    })
}
