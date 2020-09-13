"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("properties", [
      {
        propertyName: "Mango Sun",
        place: "Galle",
        imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Sea ",
        place: "Colombo",
        imageUrl: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Hills",
        place: "Kandy",
        imageUrl: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
