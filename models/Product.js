module.exports = function (sequelize, DataTypes) {
    let Product = sequelize.define("Product", {
        // The Product model should have each of the following fields:
        // * product_name (Name of product)
        productName: DataTypes.STRING,
        // * price (cost to customer)
        departmentName: DataTypes.STRING,
        // * price (cost to customer)
        price: DataTypes.INTEGER,
        // * stock_quantity (how much of the product is available in stores)
        stockQuantity: DataTypes.INTEGER
    });
    return Product;
};
