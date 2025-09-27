//compression on same data type
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//compression on different datatypes
// console.log("2" > 1);//true(string are converted into into number then check)
// console.log("02" > 1);//true


//compression on null 
// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true


//compression on undefined
console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false
console.log(undefined <= 0)//false


// === 
console.log("2" === 2);//false (both valuse and datatypes is checked)