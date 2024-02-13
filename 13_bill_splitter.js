function calculateBill(costPerDish, numberOfPeople) {
    // Calculate total bill
    const totalBill = costPerDish.reduce((acc, curr) => acc + curr, 0);

    // Calculate bill per person
    const billPerPerson = totalBill / numberOfPeople;

    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage:
const costPerDish = [25, 15, 20]; // Cost of each dish
const numberOfPeople = 5; // Number of people sharing the bill

const billDetails = calculateBill(costPerDish, numberOfPeople);
console.log(billDetails);
