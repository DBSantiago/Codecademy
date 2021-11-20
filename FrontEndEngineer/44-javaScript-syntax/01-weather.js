// The forecast today is 293 Kelvin.
const kelvin = 293;
// The forecast today is 20 Celsius.
const celsius = kelvin - 273;
// The forecast today in Fahrenheit.
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);