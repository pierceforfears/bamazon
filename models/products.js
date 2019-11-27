"use strict";
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      productName: DataTypes.STRING,
      departmentName: DataTypes.STRING,
      price: DataTypes.INTEGER,
      stockQuantity: DataTypes.INTEGER
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {}
  );
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};
