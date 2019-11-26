const db = require("../models");

const items = [
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
    departmentName: "Home and Garden",
    price: 15.0,
    stockQuantity: 100
  },
  {
    productName: "PB & Jelly of the Month Club",
    departmentName: "Home and Garden",
    price: 269.0,
    stockQuantity: 100
  },
  {
    productName: "Bacon Scented Mustache",
    departmentName: "Home and Garden",
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
    departmentName: "Home and Garden",
    price: 12.0,
    stockQuantity: 100
  }
];

db.sequelize.sync({ force: true }).then(function() {
  db.Product.bulkCreate(items).then(function(rows) {
    db.sequelize.close();
  });
});
