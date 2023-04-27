const processPayment = (amount) => {
  console.log(`collecting payment of ${amount}`);
}

const processOrder = (orderId, amount) => {
  console.log(`${orderId} is being processed`);
  processPayment()
  console.log(`${orderId} has been fully processed`);
}

console.log(`Processing orders`);
processOrder(12321, 10.99)
processOrder(12322, 12.99)
processOrder(12323, 15)
console.log('All the orders have been processed');
