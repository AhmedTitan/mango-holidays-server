'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class property extends Model {
    static associate(models) {
      // define association hee
      property.hasMany(models.room, {
        foreignKey: "propertyId",
        onDelete: "CASCADE",
      });
    }
  };
  property.init({
    propertyName: DataTypes.STRING,
    place: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'property',
  });
  return property;
};