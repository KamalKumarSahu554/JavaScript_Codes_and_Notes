// **********************Numbers****************
const score = 100;
console.log(score);

const banalce = new Number(200);
console.log(banalce);
console.log(typeof banalce);
console.log(banalce.toString()); // methods -> to string
console.log(banalce.toFixed(4));

const otherNum = 252.2447;
console.log(otherNum.toPrecision(5));

const hundreads = 10000000;
console.log(hundreads.toLocaleString("en-IN")); // Add comas as per indian standard

// *********************Maths****************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4)); // Roundup the nujmber
console.log(Math.ceil(4.2)); // Higher number
console.log(Math.floor(4.8)); // Lower number
console.log(Math.sqrt(25)); // square Root
console.log(Math.pow(2, 3)); // Power
console.log(Math.min(6, 3, 6, 2, 4)); // Minimum number
console.log(Math.max(6, 3, 6, 2, 4)); // Maximum Number
console.log(Math.random()); // Generate no. between 0 to 1
console.log(Math.random() * 100); // Generate no. between 0 to 100
console.log(Math.round(Math.random() * 100 + 1)); // 1 to 100 and roundup

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // from 10 to 20
