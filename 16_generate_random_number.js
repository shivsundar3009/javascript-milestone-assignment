const generateRandomNumber = (() => {
    return Math.floor(Math.random() * 100) + 1;
})();

console.log("Random number:", generateRandomNumber);
