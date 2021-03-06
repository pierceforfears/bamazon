let cart = [];
//this is the function to render all items in a database.
const renderItems = function(items) {
  items.forEach(function(item) {
    let newProduct = $(` <tr>
          <td class="id">${item.id}</td>
          <td class="productName">${item.productName}</td>
          <td class="departmentName">${item.departmentName}</td>
          <td class="price">${item.price}</td>
          <td class="stockQuantity">${item.stockQuantity}</td>
          <td class="quantity"><input class="buy1" id="input"></td>
          <td><button type="button" class="btn btn-info">Add to Cart</button><td>
        </tr>`);
    $(".tbodypage").append(newProduct);
  });
};

const clearInput = function() {
  $("[id =input]").val("");
};

const validate = function(item) {
  if (item.incart > item.instock) {
    console.log("not in stock");
    $(".alert").removeClass("hide");
    clearInput();
  } else if (isNaN(item.incart)) {
    console.log("not a valid quantity");
    $(".alert").removeClass("hide");
    clearInput();
  } else {
    console.log("in stock");
    cart.push(item);
    clearInput();
  }
};

//this is the document ready function that says to render all the items in the database, to the table.
$(document).ready(() => {
  $.ajax({
    url: "/api/products",
    type: "GET"
  }).then(function(rows) {
    renderItems(rows);
  });
  //this says when the add to cart button is clicked, to then add the data to the array.
  $(".table-body").on("click", ".btn", function() {
    $(".alert").addClass("hide");
    const item = {
      id: $(this)
        .parents("tr")
        .find(".id")
        .text(),
      name: $(this)
        .parents("tr")
        .find(".productName")
        .text(),
      department: $(this)
        .parents("tr")
        .find(".departmentName")
        .text(),
      price: $(this)
        .parents("tr")
        .find(".price")
        .text(),
      instock: $(this)
        .parents("tr")
        .find(".stockQuantity")
        .text(),
      incart: $(this)
        .parents("tr")
        .find(".buy1")
        .val()
    };

    console.log(item);
    validate(item);

    console.table(cart);
    // alert("i've been clicked");
    $(".modal").modal("show");
    $(".modal-body").empty();

    $(".modal-body").append(`  <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Product</th>
          <th scope="col">Department</th>
          <th scope="col">Price</th>
          <th scope="col">Quanity</th>
        </tr>
      </thead>
      <tbody class="tbodymodal table-body"></tbody>
    </table>
    <div class="totalCart"></div>`);
    let totalcost = 0;
    for (let i = 0; i < cart.length; i++) {
      totalcost +=
        parseInt(cart[i].price) * parseInt(cart[i].incart.padStart(3, 0));
      console.log(cart[i]);
      $(".tbodymodal").append(`<tr>
              <td class="cartid">${cart[i].id}</td>
              <td class="cart-productName">${cart[i].name}</td>
              <td class="cart-departmentName">${cart[i].department}</td>
              <td class="cartPrice">$${cart[i].price}</td>
              <td class="cartQuantity">${cart[i].incart}</td>
              </tr>`);
    }
    $(".totalCart").append(`<h4>TOTAL PRICE:   $${totalcost}</h4>`);
  });

  $(".btncart").on("click", function() {
    $(".modal-body").empty();

    $(".modal-body").append(`  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Product</th>
        <th scope="col">Department</th>
        <th scope="col">Price</th>
        <th scope="col">Quanity</th>
      </tr>
    </thead>
    <tbody class="tbodymodal table-body"></tbody>
  </table>
  <div class="totalCart"></div>`);
    let totalcost = 0;
    for (let i = 0; i < cart.length; i++) {
      totalcost +=
        parseInt(cart[i].price) * parseInt(cart[i].incart.padStart(3, 0));
      console.log(cart[i]);
      $(".tbodymodal").append(`<tr>
            <td class="cartid">${cart[i].id}</td>
            <td class="cart-productName">${cart[i].name}</td>
            <td class="cart-departmentName">${cart[i].department}</td>
            <td class="cartPrice">$${cart[i].price}</td>
            <td class="cartQuantity">${cart[i].incart}</td>
            </tr>`);
    }
    $(".totalCart").empty();
    $(".totalCart").append(`<h4>TOTAL PRICE:   $${totalcost}</h4>`);
    $(".modal").modal("show");
  });
});

$(".btnPurchase").on("click", function() {
  for (let i = 0; i < cart.length; i++) {
    const inCartnow = Number.parseInt(cart[i].incart);
    const inStocknow = Number.parseInt(cart[i].instock);
    const newStock = function(a, b) {
      return a - b;
    };
    stockUpdate = newStock(inStocknow, inCartnow);
    $.ajax({
      url: `/api/products/${cart[i].id}`,
      type: "PUT",
      data: `stockQuantity= ${stockUpdate}`
    })
      .then(function(data) {
        $(".tbodypage").empty();
        renderItems(data);
      })
      .catch(function(data) {
        console.log(data);
      });
    $(".modal-body").empty();
    $(".modal-body").append("Weird stuff coming your way!");
    $(".btnPurchase").hide();
  }
  cart = [];
  $(".btnClose").on("click", function() {
    $(".btnPurchase").show();
  });
});
