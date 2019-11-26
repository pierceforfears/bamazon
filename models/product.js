'use strict';
module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
        productName: DataTypes.STRING,
        departmentName: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        stockQuantity: DataTypes.STRING
    }, {});
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};