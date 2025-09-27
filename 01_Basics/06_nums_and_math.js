const score = 400//a number primitive.
console.log(score);//400

const balance = new Number(100)//a number object
console.log(balance);//[Number: 100]
console.log(balance.toString().length);//number->string->length
console.log(balance.toFixed(1));//format the number with 1 decimal palces=>100.0

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));//upto 4 siginificance digit=>123.4

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//formats number according to Indian numbering system.





// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.round(4.6));   // 5 → nearest integer
console.log(Math.floor(4.9));   // 4 → always down
console.log(Math.ceil(4.1));    // 5 → always up
console.log(Math.abs(-7));      // 7 → absolute value
console.log(Math.pow(2, 3));    // 8 → power
console.log(Math.sqrt(16));     // 4 → square root
console.log(Math.max(3, 7, 2)); // 7 → max value
console.log(Math.random());     // random number [0,1)


console.log(Math.random());//Returns a decimal number between 0 (inclusive) and 1 (exclusive).
console.log((Math.random()*10) + 1);//betwwen 0 <= x <10  =>plus 1:1 ≤ x < 11
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//(max - min + 1) → total numbers in range (here 11 → 10..20)
// Math.random() * 11 → decimal between 0 and <11
// Math.floor(...) → integer between 0 and 10
// + min → shift → 10 to 20 inclusive