// Define a constructor function for a bank account
function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

// Method to deposit funds into the account
BankAccount.prototype.deposit = function(amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`${amount} deposited into ${this.name}'s account. New balance: ${this.balance}`);
  } else {
    console.log('Invalid amount for deposit.');
  }
}

// Method to withdraw funds from the account
BankAccount.prototype.withdraw = function(amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
    console.log(`${amount} withdrawn from ${this.name}'s account. New balance: ${this.balance}`);
  } else {
    console.log('Insufficient funds or invalid amount for withdrawal.');
  }
}

// Example usage:
const customer1 = new BankAccount('John Doe', 1000);
console.log(customer1); // Output: BankAccount { name: 'John Doe', balance: 1000 }
customer1.deposit(500); // Output: 500 deposited into John Doe's account. New balance: 1500
customer1.withdraw(200); // Output: 200 withdrawn from John Doe's account. New balance: 1300
customer1.withdraw(2000); // Output: Insufficient funds or invalid amount for withdrawal.
