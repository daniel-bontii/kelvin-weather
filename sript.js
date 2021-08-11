//Kelvin temperature for today's forcast
const kelvin = 293;

//celcius is kelvin - 273 and will not change
const celsius = kelvin - 273;

//Farenheit temperature is found by multiplying the Celcius tempearature by (9/5) and adding 32
let fahrenheit = celsius *(9/5) + 32;

//round fahrenheit temperature a whole number lower than or equal the fahrenheit temperature value
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temeparture is ${newton} degrees Newton`);