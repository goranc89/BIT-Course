// 6.
//a. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// [
//{name: "apples", price: 100},
//{name: "milk", price: 80},
//{name:"bananas", price: 150}
//]

// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.

const shoppingList = [
  { name: "eggs", price: 180 },
  { name: "oranges", price: 120 },
  { name: "avocado", price: 130 },
  { name: "chicken", price: 400 },
  { name: "cereal", price: 150 },
];

const calculateTotalPrice = function (list) {
  const sum = list.reduce(function (acc, el) {
    return acc + el.price;
  }, 0);
  return sum;
};
console.log(calculateTotalPrice(shoppingList));
