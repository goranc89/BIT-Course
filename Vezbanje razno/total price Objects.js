function totalPrice(groceries) {
  let sum = 0;

  for (let i = 0; i < groceries.length; i++) {
    sum += groceries[i].quantity * groceries[i].price;
  }

  return `The sum of groceries is: ${sum}`;
}

console.log(
  totalPrice([
    {
      product: "Milk",
      quantity: 1,
      price: 1.5,
    },
    {
      product: "Bread",
      quantity: 2,
      price: 1.2,
    },
    {
      product: "Eggs",
      quantity: 20,
      price: 0.2,
    },
  ])
);
