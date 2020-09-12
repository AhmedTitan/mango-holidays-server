"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("properties", [
      {
        propertyName: "Mango Sun",
        place: "Galle",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co.uk%2FLocationPhotoDirectLink-g488101-d1103726-i110960755-The_Westin_Turtle_Bay_Resort_Spa_Mauritius-Balaclava.html&psig=AOvVaw0WNnSRzJeb1vRF_d76Cs5U&ust=1599988828736000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCQy4Cl4-sCFQAAAAAdAAAAABBW",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Sea ",
        place: "Colombo",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co.za%2FLocationPhotoDirectLink-g488101-d1103726-i110960745-The_Westin_Turtle_Bay_Resort_Spa_Mauritius-Balaclava.html&psig=AOvVaw0WNnSRzJeb1vRF_d76Cs5U&ust=1599988828736000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCQy4Cl4-sCFQAAAAAdAAAAABAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        propertyName: "Mango Hills",
        place: "Kandy",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com.au%2FLocationPhotoDirectLink-g488101-d1103726-i110960762-The_Westin_Turtle_Bay_Resort_Spa_Mauritius-Balaclava.html&psig=AOvVaw0WNnSRzJeb1vRF_d76Cs5U&ust=1599988828736000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCQy4Cl4-sCFQAAAAAdAAAAABAS",
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
