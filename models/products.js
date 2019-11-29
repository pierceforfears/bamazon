"use strict";
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      productName: DataTypes.STRING,
      departmentName: DataTypes.STRING,
      price: DataTypes.INTEGER,
      stockQuantity: DataTypes.INTEGER,
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      }
    },
    {}
  );
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};
