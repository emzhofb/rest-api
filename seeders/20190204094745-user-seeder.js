'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync('rahasia', 10);
      return queryInterface.bulkInsert('Users', [{
        username: 'ikhda',
        password: password
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
