'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      room.hasMany(models.reservation, {
        foreignKey: "roomId",
        onDelete: "CASCADE",
      });
      room.belongsTo(models.property, { foreignKey: "propertyId" });
    }
  };
  room.init({
    roomName: DataTypes.STRING,
    propertyId: DataTypes.INTEGER,
    amenities: DataTypes.STRING,
    numberOfGuests: DataTypes.INTEGER,
    BB: DataTypes.FLOAT,
    HB: DataTypes.FLOAT,
    FB: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'room',
  });
  return room;
};