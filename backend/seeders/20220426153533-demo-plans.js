'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Plans', [
      {
        name: 'Basic Plan',
        price: 300,
        total_service: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Premium Plan',
        price: 499,
        total_service: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'VIP Plan',
        price: 650,
        total_service: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Plans', null, {});
  }
};
