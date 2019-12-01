# BAMAZON

Bamazon is an Amazon-like storefront using MySQL and Sequelize. The web app takes in orders from customers and depletes stock from the store's inventory.

## Preview Site

https://limitless-meadow-50947.herokuapp.com/

## Built With

- MySQL
- Sequelize
- Node.js
- Express.js
- JavaScript
- jQuery
- Bootstrap

## Screenshots

### Storefront

The app displays a list of items available along with department, price, and quantity available.
![Screen Shot 2019-12-01 at 10 37 58 AM](https://user-images.githubusercontent.com/20098958/69916265-0e096c00-1427-11ea-91af-b2240997fa4c.png)

### Items added to cart

User selects items and specifies quantity to be added to cart.
![Screen Shot 2019-12-01 at 10 39 33 AM](https://user-images.githubusercontent.com/20098958/69916266-106bc600-1427-11ea-971c-75b7a2a3c1b1.png)

### Insufficient inventory

If user specifies a quantity greater than product available, message is displayed notifying user that not enough product is in stock.
![Screen Shot 2019-12-01 at 10 42 21 AM](https://user-images.githubusercontent.com/20098958/69916289-4c9f2680-1427-11ea-9449-f78f52331ed9.png)

### Items purchased

Modal displays success message when items are purchased.
![Screen Shot 2019-12-01 at 10 39 54 AM](https://user-images.githubusercontent.com/20098958/69916269-12ce2000-1427-11ea-9267-5bda61ade55c.png)

### Inventory reduced

Inventory is reduced by number of items purchased:

- -1 Bacon Scented Mustache
- -4 Godzilla Lawn Gnomes
- -2 Dr. Pickle Dr. Pickle Lip Balms
  ![Screen Shot 2019-12-01 at 10 40 07 AM](https://user-images.githubusercontent.com/20098958/69916270-15c91080-1427-11ea-934f-a34057cd4a18.png)
