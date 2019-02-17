'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Siswas', [{
      nama: 'John Doe',
      alamat: 'Jakarta',
      kelas: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Budi',
      alamat: 'Jakarta Selatan',
      kelas: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Siswas', null, {});
  }
};
