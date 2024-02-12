function calculateRentalCost(daysRented, carType) {
  let rentalCostPerDay;
  
  switch (carType.toLowerCase()) {
    case 'economy':
      rentalCostPerDay = 4000; // Rs. 4000 per day
      break;
    case 'midsize':
      rentalCostPerDay = 15000; // Rs. 15000 per day
      break;
    case 'luxury':
      rentalCostPerDay = 20000; // Rs. 20000 per day
      break;
    default:
      return "Invalid car type. Please choose from Economy, Midsize, or Luxury.";
  }
  
  let totalCost = rentalCostPerDay * daysRented;
  return "Total rental cost: Rs. " + totalCost + "/-";
}

// Example usage:
let daysRented = 5;
let carType = 'economy';
console.log(calculateRentalCost(daysRented, carType));
