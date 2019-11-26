"use strict";
module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define(
    "Product",
    {
      productName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      departmentName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      stockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
