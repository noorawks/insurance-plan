'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Plans', [
      {
        name: 'Basic Plan',
        price: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Premium Plan',
        price: 499,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'VIP Plan',
        price: 650,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Plans', null, {});
  }
};
