"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      totalAmount: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "payment",
    }
  );
  return payment;
};
