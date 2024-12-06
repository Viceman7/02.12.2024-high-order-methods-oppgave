// 1. [ ] Use .filter() to extract all products that cost less than 200

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

const lowPrice = products.filter((product) => {
  return product.price < 200;
});
console.log(lowPrice);

//2. [ ] Use .map() to make a list that only contain the product names

const productNames = products.map((product) => {
  return product.name;
});
console.log(productNames);

// 3. [ ] Use a chained combination of .filter() and .map() to list only
// the names of all products in a specific category (e.g. 'electronics')

const productsElectronics = products
  .filter((product) => {
    return product.category == "electronics";
  })
  .map((product) => {
    return product.name;
  });
console.log(productsElectronics);

//4. [ ] Use .some() to check if there are any products that cost more than 1000

console.log(products.some((product) => product.price > 1000));

//5. [ ] Use .reduce() to find the total cost of all the products.

const totalCost = products
  .map((e) => {
    return e.price;
  })
  .reduce((acc, num) => acc + num, 0);

console.log(totalCost);
