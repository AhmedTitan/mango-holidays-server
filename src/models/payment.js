"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    static associate(models) {
      // define association here
      payment.belongsTo(models.reservation, { foreignKey: "reservationId" });
    }
  }
  payment.init(
    {
      reservationId: DataTypes.INTEGER,
      paymentMethod: DataTypes.STRING,
      cardName: DataTypes.STRING,
      cardNumber: DataTypes.STRING,
      month: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      cvc: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "payment",
    }
  );
  return payment;
};
