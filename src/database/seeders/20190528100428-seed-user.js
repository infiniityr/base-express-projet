'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                id: '87cf44fe-cc1f-4fa7-a936-d15dbb122bcc',
                firstname: 'Test',
                lastname: 'Admin',
                mail: 'test.admin@gmail.com',
                createdAt: '1986-07-16 04:05:06',
                updatedAt: '1999-01-08 04:05:06'
            },
            {
                id: '436e49ad-3b04-40d6-b8da-f6d26f45ed17',
                firstname: 'Test',
                lastname: 'Member',
                mail: 'test.member@gmail.com',
                createdAt: '1988-01-08 04:05:06',
                updatedAt: '1999-01-08 04:05:06'
            }], {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('User', null, {})
    }
}
