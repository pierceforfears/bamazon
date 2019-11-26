module.exports = function(connection, Sequelize) {
  const Product = connection.define("Product", {
    productName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    departmentName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    stockQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  return Product;
};
