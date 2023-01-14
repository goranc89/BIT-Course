function Product(name, price, expirationDate) {
  this.id = Math.floor(Math.random() * 90000) + 10000;
  this.name = name;
  this.price = price.toFixed(2);
  this.expirationDate = expirationDate;

  this.getInfo = function () {
    return (
      this.name[0] +
      this.name[this.name.length - 1] +
      this.id +
      ", " +
      this.name +
      ", " +
      this.price
    );
  };
}

function ShoppingBag() {
  this.products = [];

  this.addProduct = function (product) {
    if (product.expirationDate > new Date()) {
      this.products.push(product);
    } else {
      console.log(`Product with id ${product.id} has expired`);
    }
  };

  this.averagePrice = function () {
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
      sum += this.products[i].price;
    }
    console.log("Average Price: " + (sum / this.products.length).toFixed(3));
  };

  this.getMostExpensive = function () {
    if (this.products.length === 0) {
      console.log("Shopping bag is empty");
      return;
    }
    let mostExpensive = this.products[0];
    for (let i = 1; i < this.products.length; i++) {
      if (this.products[i].price > mostExpensive.price) {
        mostExpensive = this.products[i];
      }
    }
    console.log(mostExpensive.getInfo());
  };

  this.calculateTotalPrice = function () {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].price;
    }
    return totalPrice;
  };
}

function PaymentCard(balance, status, validUntil) {
  this.balance = balance.toFixed(2);
  this.status = status;
  this.validUntil = validUntil;
}

function checkoutAndBuy(shoppingBag, paymentCard) {
  if (paymentCard.status === "active" && paymentCard.validUntil > new Date()) {
    if (paymentCard.balance >= shoppingBag.calculateTotalPrice()) {
      console.log("Purchase Successful");
    } else {
      console.log(
        "Not enough balance, missing " +
          (shoppingBag.calculateTotalPrice() - paymentCard.balance) +
          " USD"
      );
    }
  } else {
    console.log("Payment card is inactive or expired");
  }
}

let banana1 = new Product("Banana1", 129.31, new Date("2022-12-31"));
let banana2 = new Product("Banana2", 1.31, new Date("2022-12-31"));
let banana3 = new Product("Banana3", 0.31, new Date("2022-12-31"));
let banana4 = new Product("Banana4", 2.31, new Date("2022-12-31"));
let expiredProduct = new Product("Expired", 0.99, new Date("2022-01-01"));
console.log(banana1.getInfo());
console.log(banana2.getInfo());
console.log(banana3.getInfo());
console.log(banana4.getInfo());
console.log(expiredProduct.getInfo());

let myBag = new ShoppingBag();
myBag.addProduct(banana1);
myBag.addProduct(banana2);
myBag.addProduct(banana3);
myBag.addProduct(banana4);
myBag.addProduct(expiredProduct);
myBag.averagePrice();
console.log("Total Price: " + myBag.calculateTotalPrice());
console.log("Most Expensive Product: ");
myBag.getMostExpensive();

let myCard = new PaymentCard(150, "active", new Date("2022-12-31"));
checkoutAndBuy(myBag, myCard);
