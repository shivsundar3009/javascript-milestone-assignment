function celsiusToFahrenheit(celsius) {
  // Formula to convert Celsius to Fahrenheit: (Celsius * 9/5) + 32
  return (celsius * 9/5) + 32;
}

// Example usage:
let celsiusTemperature = 20; // Temperature in Celsius
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log("Temperature in Fahrenheit:", fahrenheitTemperature);
