'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('hoangviet99', 6)
    const createdAt = new Date()
    const updatedAt = createdAt
    
    await queryInterface.bulkInsert('users', [
      {
        username: 'thvroyal',
        email: 'thvroyal@gmail.com',
        password: password,
        imageUrl: 'https://imgur.com/RxhDTQU',
        createdAt,
        updatedAt,
      },
      {
        username: 'haiquang',
        email: 'haiquang@gmail.com',
        password: password,
        imageUrl: '',
        createdAt,
        updatedAt,
      },
      {
        username: 'haidang',
        email: 'haidang@gmail.com',
        password: password,
        imageUrl: '',
        createdAt,
        updatedAt,
      },
      {
        username: 'haichanh',
        email: 'haichanh@gmail.com',
        password: password,
        imageUrl: '',
        createdAt,
        updatedAt,
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
