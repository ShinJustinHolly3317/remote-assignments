/* Main */
const products = {
  size: 3,
  products: [{
    name: 'Product 1',
    price: 100,
  }, {
    name: 'Product 1',
    price: 700,
  }, {
    name: 'Product 1',
    price: 250,
  }]
}

console.log("Average price is", avg(products)) 


/* Functions */
function avg(priceData) {
  let quantity = priceData.size
  let total = 0
  for (let i = 0; i < quantity; i++) {
    total += priceData.products[i].price
  }
  return total / quantity
}
