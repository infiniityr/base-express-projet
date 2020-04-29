
module.exports = {
    /* development: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_PASSWORD || 'database_development',
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: true
    }, */
    development: {
        dialect: 'sqlite',
        storage: 'datas/sqlite.db',
        logging: false
    },
    test: {
        dialect: 'sqlite',
        storage: 'datas/sqlite.db',
        logging: false
    },
    production: {
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: false
    }
}
