// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/api/product", function (req, res) {
        // Write code here to retrieve all of the todos from the database and res.json them
        // back to the user
        db.Product.findAll({}).then(function (results) {
            res.json(results);
        });

    });

    // POST route for saving a new todo. We can create todo with the data in req.body
    app.post("/api/product", function (req, res) {
        // Write code here to create a new todo and save it to the database
        // and then res.json back the new todo to the user
        db.Todo.create({ productName: req.body.productName, departmentName: req.body.departmentName, price: req.body.price, stockQuantity: req.body.stockQuantity }).then(function (results) {
            res.end(results);
        });

    });

    // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/product/:id", function (req, res) {
        db.Todo.destroy({ where: req.params.id }).then(function () {
            res.end();
        });

    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/product", function (req, res) {

    });
};
