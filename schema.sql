DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	id INTEGER AUTO_INCREMENT NOT NULL,
	productName VARCHAR(100) NOT NULL,
	departmentName VARCHAR(100) NOT NULL,
	price DECIMAL NOT NULL,
	stockQuantity INTEGER NOT NULL,
	PRIMARY KEY (id)
);

Select * FROM Products;

INSERT INTO Products (productName, departmentName, price, stockQuantity) 
VALUES ("MODS 40 Foot Tiny Home", "Home and Garden", 36000.00, 1),
	("1500 Live Ladybugs", "Pets", 17.00, 15),
       ("Uranium Ore", "Science and Technology", 40.00, 92),
       ("Organic Mushroom Farm Grow Kit", "Home and Garden", 17.00, 10),
       ("Cat Butt Tissue Holder", "Home and Garden", 36.00, 10),
       ("Artificial Human Finger Bones", "Oddities and Ends", 15.00, 10),
       ("PB & Jelly of the Month Club", "Prepared Foods", 269.00, 1),  
       ("Bacon Scented Mustache", "Personal Hygiene", 4.00, 77),      
       ("Godzilla Lawn Gnome", "Home and Garden", 22.00, 54), 
       ("Dr. Pickle Lip Balm", "Personal Hygiene", 12.00, 11)      

UPDATE products SET stockQuantity = 100 WHERE id=1;
UPDATE products SET stockQuantity = 100 WHERE id=2;
UPDATE products SET stockQuantity = 100 WHERE id=3;
UPDATE products SET stockQuantity = 100 WHERE id=4;
UPDATE products SET stockQuantity = 100 WHERE id=5;
UPDATE products SET stockQuantity = 100 WHERE id=6;
UPDATE products SET stockQuantity = 100 WHERE id=7;
UPDATE products SET stockQuantity = 100 WHERE id=8;
UPDATE products SET stockQuantity = 100 WHERE id=9;
UPDATE products SET stockQuantity = 100 WHERE id=10;