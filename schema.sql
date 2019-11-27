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
VALUES ("MODS 40 Foot Tiny Home", "Home and Garden", 36000.00, 100),
	   ("1500 Live Ladybugs", "Pets", 17.00, 100),
       ("Uranium Ore", "Sporting Goods", 40.00, 100),
       ("Back to the Roots Organic Mushroom Farm Grow Kit", "Home and Garden", 17.00, 100),
       ("Cat Butt Tissue Holder", "Home and Garden", 36.00, 100),
       ("Real Human Finger Bones - Metacarpal", "Oddities and Ends", 15.00, 100),
       ("Gourmet Peanut Butter & Jelly of the Month Club - 12 Months", "Prepared Foods", 269.00, 100),  
       ("Bacon Scented Mustache", "Personal Hygiene", 4.00, 100),      
       ("Godzilla Lawn Gnome", "Home and Garden", 22.00, 100), 
       ("Dr. Pickle Lip Balm", "Personal Hygiene", 12.00, 100)      

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