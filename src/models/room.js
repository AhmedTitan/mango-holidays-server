"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    static associate(models) {
      // define association here
      room.hasMany(models.reservation, {
        foreignKey: "roomId",
        onDelete: "CASCADE",
      });
    }
  }
  room.init(
    {
      propertyName: DataTypes.STRING,
      roomNumber: DataTypes.INTEGER,
      view: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "room",
    }
  );
  return room;
};
