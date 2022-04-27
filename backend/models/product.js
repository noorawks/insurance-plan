const {DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
  }, {
    tableName: 'products'
  });

  return Product;
}