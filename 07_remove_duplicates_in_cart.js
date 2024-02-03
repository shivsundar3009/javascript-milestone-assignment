function removeDuplicates(cart) {
  // Use a Set to keep track of unique items
  const uniqueItems = new Set();

  // Filter out duplicates while preserving the order
  const uniqueCart = cart.filter(item => {
    const itemId = item.id;  // Assuming each item has a unique identifier like 'id'
    if (!uniqueItems.has(itemId)) {
      uniqueItems.add(itemId);
      return true;
    }
    return false;
  });

  return uniqueCart;
}

// Example usage:
const customerCartWithDuplicates = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 1, name: 'Product A' },  // Duplicate item
  { id: 3, name: 'Product C' },
  { id: 2, name: 'Product B' },  // Duplicate item
];

const customerCartWithoutDuplicates = removeDuplicates(customerCartWithDuplicates);

console.log(customerCartWithoutDuplicates);
