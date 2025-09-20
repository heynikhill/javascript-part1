//we can known the datatypes of variables by two ways (1.simple typeof and 2. typeof method)
let score = "hitesh"
//console.log(typeof score);//=>string
//console.log(typeof(score));//through method//=>string




//for converting into other datatypes JUST WRITE HE DATATYPES NAME(which u want ot convert,STARTING WITH A CAPITAL LETTER) then write variable name
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);=>number
//console.log(valueInNumber);=>!!!!!!!NAN!!!!!!!!{WHEN STRING IS CONVERTEDINTO NUMBER}


// "33" => 33
// "33abc" => NaN(STRING ->NUMBER:NAN)
//  true => 1; false => 0(BOOLEAN -> NUMBER:1/0)




let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);//=>true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true




let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);//=>33
// console.log(typeof stringNumber);//=>string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);//=>hello hitesh

// console.log("1" + 2)//=>12{if starting with string then whole thing is converted into string}
// console.log(1 + "2");//=>{if string is in last then before its all operaton will perform then converted into string}
// console.log("1" + 2 + 2);//=>122
// console.log(1 + 2 + "2");//=>32

// console.log( (3 + 4) * 5 % 3);//not recoommend to use this style in production ,use if require use paranthesis
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

//plus here refer to conversion
console.log(+true);//=>1
console.log(+"");//=>0


//post=>first use then increase
//pre=>first increase then use
let gameCounter = 100
++gameCounter;//=>101
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);//=>101 is use and increase by one so final value is 102.

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion