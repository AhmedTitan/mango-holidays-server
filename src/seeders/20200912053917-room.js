"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("rooms", [
      {
        propertyName: "Mango Sun",
        roomNumber: 1,
        view: "Lake view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Sun",
        roomNumber: 1,
        view: "Lake view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Sun",
        roomNumber: 1,
        view: "Lake view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Sea",
        roomNumber: 2,
        view: "Sea view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Sea",
        roomNumber: 2,
        view: "Sea view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Sea",
        roomNumber: 2,
        view: "Sea view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Hills",
        roomNumber: 3,
        view: "Mountain view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Hills",
        roomNumber: 3,
        view: "Mountain view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Hills",
        roomNumber: 3,
        view: "Mountain view",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
