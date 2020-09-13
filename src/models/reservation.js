'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reservation.belongsTo(models.room, { foreignKey: "roomId" });
      reservation.belongsTo(models.user, { foreignKey: "userId" });
      reservation.hasOne(models.payment, {
        foreignKey: "reservationId",
        onDelete: "CASCADE",
      });
    }
  };
  reservation.init({
    roomId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    bookingStatus: DataTypes.STRING,
    parkingSlot: DataTypes.BOOLEAN,
    checkInTime: DataTypes.STRING,
    specialNote: DataTypes.STRING,
    pricingOption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reservation',
  });
  return reservation;
};