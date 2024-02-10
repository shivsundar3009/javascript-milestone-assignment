function doubleItemQuantities(cart) {
    // Loop through each item in the cart array
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of the current item
        cart[i] *= 2;
    }
    
    return cart; // Return the updated cart array
}

// Example usage:
let cart = [1, 2, 3, 4]; // Sample cart array
cart = doubleItemQuantities(cart); // Correcting the bug by doubling item quantities
console.log(cart); // Output the corrected cart array
