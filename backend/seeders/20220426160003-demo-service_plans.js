'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const plans = await queryInterface.sequelize.query(
      `SELECT id FROM plans;`
    );

    const services = await queryInterface.sequelize.query(
      `SELECT id FROM services;`
    );

    let planRows = plans[0];
    let serviceRows = services[0];

    const dataSeed = [];

    

    return await queryInterface.bulkInsert('service_plans', [
      {title: 'Movie 1', description: '...', id: '1', plan_id: planRows[0].id}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
