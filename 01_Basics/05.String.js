const name = "hitesh"//string variable
const repoCount = 50//its just a constant variable

// console.log(name + repoCount + " Value");
//insted of writting this we use better format like this written below
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc-com')
//we can apply various string method like this
console.log(gameName[0]);//h
console.log(gameName.__proto__);//{} =>object prototype but no own property just with one  inherited  method
console.log(gameName.length);//13
console.log(gameName.toUpperCase());//HITESH-HC-COM
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0, 4)
console.log(newString);//hite

const anotherString = gameName.slice(-8, 4)//start = -8 → converted to length + (-8) = 13 - 8 = 5. and end is 4 so it return empty
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);//with spaces
console.log(newStringOne.trim());//remove spacese

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//replace %20 with -

console.log(url.includes('sundar'))//return boolean value T or F

console.log(gameName.split('-'));//return array (i js array is a special kind of object with numeric value)