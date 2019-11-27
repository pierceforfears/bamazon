"use strict";
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      productName: DataTypes.STRING,
      departmentName: DataTypes.STRING,
      price: DataTypes.INTEGER,
      stockQuantity: DataTypes.INTEGER
    },
    {}
  );
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};
