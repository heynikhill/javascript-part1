// =======================
// 1️⃣ Primitive Data Types
// =======================
// There are 7 primitive types(tyesof return) in JavaScript:
// String(string), Number(number), Boolean(boolean), null(OBJECT), undefined(UNDEFINIED), Symbol(symbol=unique and immutable), BigInt(bignit)

const score = 100;             // Number (integer)
const scoreValue = 100.3;      // Number (floating point)

const isLoggedIn = false;      // Boolean
const outsideTemp = null;      // Null
let userEmail;                 // Undefined (declared but not assigned)

const id = Symbol('123');      
const anotherId = Symbol('123');  

console.log(id === anotherId); // false, each Symbol is unique

// BigInt allows very large integers beyond Number.MAX_SAFE_INTEGER
// const bigNumber = 3456543576654356754n;



// ============================
// 2️⃣ Reference (Non-Primitive)
// ============================
// These store references to objects, not the actual value(same obj no copy is given ,changes originially)
// Changes inside these affect all references to the object

const heros = ["Shaktiman", "Naagraj", "Doga"];   // Array
let myObj = {
    name: "Hitesh",
    age: 22,
};                                               // Object

const myFunction = function() {                 // Function
    console.log("Hello world");
};

console.log(typeof anotherId); // "symbol"

// ============================
// Important Points
// ============================
// 1. Primitives are immutable → cannot change the value, operations create new value.
// 2. Reference types are mutable → modifying an object/array changes the original reference.
// 3. Comparing primitives checks **value**.
// 4. Comparing objects/arrays/functions checks **reference**.
// 5. Symbol values are always unique, even with same description.
// 6. BigInt is used for integers larger than 2^53 - 1.
// 7. `typeof null` returns "object" → historical JavaScript bug, remember it.
// 8. `undefined` indicates a variable has been declared but not assigned.
 

// - `==` (Abstract Equality) → type coercion may happen
// - `===` (Strict Equality) → no type coercion, compares both value and type
// Example:
console.log(5 == "5");   // true  (type coercion)
console.log(5 === "5");  // false (no coercion, types differ)


// MEMORY:
    // Stack: stores primitives, fast, fixed size, immutable(changing a primitive creates a new copy.), stores actual values.##copies independent
    // Heap: stores objects/arrays/functions, slower, dynamic size, mutable(Changing object/array affects all references pointing to it.), stores reference.##copies share data
// MEMORY USED BY DIFFERENT DATATYPES
    // Primitives → stack → immutable
    // Reference types → heap → mutable
    // Copying primitives → creates new value
    // Copying objects/arrays → copies reference, changes affect all references