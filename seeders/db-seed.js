"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Product",
      [
        {
          productName: "MODS 40 Foot Tiny Home",
          departmentName: "Home and Garden",
          price: 36000.0,
          stockQuantity: 100
        },
        {
          productName: "1500 Live Ladybugs",
          departmentName: "Pets",
          price: 17.0,
          stockQuantity: 100
        },
        {
          productName: "Uranium Ore",
          departmentName: "Sporting Goods",
          price: 40.0,
          stockQuantity: 100
        },
        {
          productName: "Organic Mushroom Farm Grow Kit",
          departmentName: "Home and Garden",
          price: 17.0,
          stockQuantity: 100
        },
        {
          productName: "Cat Butt Tissue Holder",
          departmentName: "Home and Garden",
          price: 36.0,
          stockQuantity: 100
        },
        {
          productName: "Fake Human Finger Bones",
          departmentName: "Oddities and Ends",
          price: 15.0,
          stockQuantity: 100
        },
        {
          productName: "PB&J of the Month Club",
          departmentName: "Prepared Foods",
          price: 269.0,
          stockQuantity: 100
        },
        {
          productName: "Bacon Scented Mustache",
          departmentName: "Personal Hygiene",
          price: 4.0,
          stockQuantity: 100
        },
        {
          productName: "Godzilla Lawn Gnome",
          departmentName: "Home and Garden",
          price: 22.0,
          stockQuantity: 100
        },
        {
          productName: "Dr. Pickle Lip Balm",
          departmentName: "Personal Hygiene",
          price: 12.0,
          stockQuantity: 100
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Product");
  }
};
