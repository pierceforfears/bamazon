"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          productName: "MODS 40 Foot Tiny Home",
          departmentName: "Home and Garden",
          price: 36000.0,
          stockQuantity: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "1500 Live Ladybugs",
          departmentName: "Pets",
          price: 17.0,
          stockQuantity: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Uranium Ore",
          departmentName: "Science and Technology",
          price: 40.0,
          stockQuantity: 92,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Organic Mushroom Farm Grow Kit",
          departmentName: "Home and Garden",
          price: 17.0,
          stockQuantity: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Cat Butt Tissue Holder",
          departmentName: "Home and Garden",
          price: 36.0,
          stockQuantity: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Artificial Human Finger Bones",
          departmentName: "Oddities and Ends",
          price: 15.0,
          stockQuantity: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "PB & Jelly of the Month Club",
          departmentName: "Prepared Foods",
          price: 369.0,
          stockQuantity: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Bacon Scented Mustache",
          departmentName: "Personal Hygiene",
          price: 4.0,
          stockQuantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Godzilla Lawn Gnome",
          departmentName: "Home and Garden",
          price: 22.0,
          stockQuantity: 54,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productName: "Dr. Pickle Lip Balm",
          departmentName: "Personal Hygiene",
          price: 12.0,
          stockQuantity: 99,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Products");
  }
};
