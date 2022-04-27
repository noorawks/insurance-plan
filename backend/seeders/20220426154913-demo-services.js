'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Services', [
      {
        name: 'Dental',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Surgery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'General',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Specialist',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Services', null, {});
  }
};
