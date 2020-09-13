'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roomName: {
        type: Sequelize.STRING
      },
      propertyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "properties",
          key: "id",
        },
      },
      amenities: {
        type: Sequelize.STRING
      },
      numberOfGuests: {
        type: Sequelize.INTEGER
      },
      BB: {
        type: Sequelize.FLOAT
      },
      HB: {
        type: Sequelize.FLOAT
      },
      FB: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rooms');
  }
};