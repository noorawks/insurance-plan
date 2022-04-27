'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const plans = await queryInterface.sequelize.query(
      `SELECT id, total_service FROM plans;`
    );

    const services = await queryInterface.sequelize.query(
      `SELECT id FROM services;`
    );

    const dataSeed = [];

    plans[0].forEach(element => {
      services[0].slice(0, element['total_service'] - 1).forEach(data => {
        dataSeed.push({
          plan_id: element['id'],
          service_id: data['id'],
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });
    });
    
    return await queryInterface.bulkInsert('service_plans', dataSeed, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('service_plans', null, {});
  }
};
