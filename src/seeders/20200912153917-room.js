"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("rooms", [
      {
        roomName: "RM1",
        propertyId: 1,
        amenities: "Lake view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 3,
        BB: 27.0,
        HB: 39.0,
        FB: 45.0,
      },
      {
        roomName: "RM2",
        propertyId: 1,
        amenities: "Lake view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 2,
        BB: 22.0,
        HB: 34.0,
        FB: 38.0,
      },
      {
        roomName: "RM3",
        propertyId: 1,
        amenities: "Lake view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 1,
        BB: 15.0,
        HB: 24.0,
        FB: 30.0,
      },
      {
        roomName: "RM4",
        propertyId: 1,
        amenities: "Sea view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 3,
        BB: 27.0,
        HB: 39.0,
        FB: 45.0,
      },
      {
        roomName: "RM5",
        propertyId: 1,
        amenities: "Sea view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 2,
        BB: 22.0,
        HB: 34.0,
        FB: 38.0,
      },
      {
        roomName: "RM6",
        propertyId: 1,
        amenities: "Sea view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 1,
        BB: 15.0,
        HB: 24.0,
        FB: 30.0,
      },
      {
        roomName: "RM7",
        propertyId: 1,
        amenities: "Mountain view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 3,
        BB: 27.0,
        HB: 39.0,
        FB: 45.0,
      },
      {
        roomName: "RM8",
        propertyId: 1,
        amenities: "Mountain view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 2,
        BB: 22.0,
        HB: 34.0,
        FB: 38.0,
      },
      {
        roomName: "RM9",
        propertyId: 1,
        amenities: "Mountain view, Bathtub, Balcony, Floor area(m2), Wifi",
        numberOfGuests: 1,
        BB: 15.0,
        HB: 24.0,
        FB: 30.0,
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
