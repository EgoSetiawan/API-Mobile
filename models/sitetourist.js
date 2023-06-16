'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteTourist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SiteTourist.init({
    touristSitesId: DataTypes.INTEGER,
    touristSitesName: DataTypes.STRING,
    touristSitesDescription: DataTypes.TEXT,
    photo_url: DataTypes.STRING,
    category: DataTypes.STRING,
    lan: DataTypes.FLOAT,
    lon: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'SiteTourist',
  });
  return SiteTourist;
};