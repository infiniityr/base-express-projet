import { Sequelize } from 'sequelize-typescript'
import path from 'path'
import glob from 'glob'
import logger from '../util/logger'

export default class Database {
    public sequelize: Sequelize

    constructor (config: any) {
        this.sequelize = new Sequelize(config)
    }

    public initModels () {
        this.sequelize.addModels(this.getModels())
        return this.sequelize.sync({ force: process.env.NODE_ENV === 'test' })
    }

    private getModels (): string[] {
        logger.debug('Models récupérés dans le dossier : ' + path.join(__dirname, '/models/**/*.js') + ' : ' + glob.sync(path.join(__dirname, '/models/**/*.js')).length)
        return glob.sync(path.join(__dirname, '/models/**/*.js'))
    }
}
