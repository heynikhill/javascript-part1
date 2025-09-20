//so to define the variable it is of either constant(cont) or variable(var ,let)

//to define constant we use const keyword{it value never change}
const accountId = 144553

//to define variable we have 2 ways first either var and second let
//but we use let because in var it doesnot have any scope
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"//another way to define the variable

let accountState;//variable it implement but not define=>dafault value:UNDEFINED

// accountId = 2 // not allowed because it is a constant
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
//insted of writing the console.log for all we can use console Table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])