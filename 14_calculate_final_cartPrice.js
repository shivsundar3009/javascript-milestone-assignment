const calculateTotalCost = (cart) => {
    let totalCost = 0;
    
    cart.forEach(item => {
        totalCost += item.unitPrice * item.quantity;
    });
    
    return totalCost;
};

// Example usage:
const cart = [
    { unitPrice: 10, quantity: 2 },   // Item 1: unit price $10, quantity 2
    { unitPrice: 20, quantity: 1 },   // Item 2: unit price $20, quantity 1
    { unitPrice: 5, quantity: 4 }     // Item 3: unit price $5, quantity 4
];

const finalOrderPrice = calculateTotalCost(cart);
console.log("Final order price:", finalOrderPrice);
