const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2); // round off to two decimal places
};

// Example usage:
const originalPrice = 100; // Example original price
const discountedPrice = 80; // Example discounted price
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`The discount percentage is ${discountPercentage}%`);
