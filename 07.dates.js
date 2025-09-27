// =======================
// 1️⃣ Creating Dates
// =======================
let myDate = new Date(); // current date & time
console.log("Current Date:", myDate);

let myCreatedDate1 = new Date(2023, 0, 23);       // Jan 23, 2023 (month 0-indexed)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); // Jan 23, 2023 05:03
let myCreatedDate3 = new Date("2023-01-14");      // ISO format
let myCreatedDate4 = new Date("01-14-2023");      // US date format
console.log("Created Date:", myCreatedDate4);
// Note: Month is 0-indexed in new Date(year, month, ...).
//       Strings like "YYYY-MM-DD" are generally safer (ISO format).

// =======================
// 2️⃣ Timestamps
// =======================
let myTimeStamp = Date.now();          // milliseconds since 1970-01-01
console.log("Current Timestamp:", myTimeStamp);

console.log("Created Date Timestamp:", myCreatedDate4.getTime()); // milliseconds
console.log("Current Time in seconds:", Math.floor(Date.now()/1000));//in seconds upto given date from 1970-01-01 ,we applied floor to remove decimal value
// Date.now() → current timestamp in milliseconds.
// getTime() → timestamp of a specific date.


// =======================
// 3️⃣ Getting Date Parts
// =======================
let newDate = new Date();
console.log("Full Date Object:", newDate);
console.log("Month (1-12):", newDate.getMonth() + 1); // +1 because months start at 0
console.log("Day of Week (0=Sun):", newDate.getDay()); 

console.log("Year:", newDate.getFullYear());
console.log("Date (Day of Month):", newDate.getDate());
console.log("Hours:", newDate.getHours());
console.log("Minutes:", newDate.getMinutes());
console.log("Seconds:", newDate.getSeconds());

// =======================
// 4️⃣ Formatting Dates
// =======================
console.log("toString():", newDate.toString());           // full string
console.log("toDateString():", newDate.toDateString());   // human-readable date
console.log("toLocaleString():", newDate.toLocaleString());// locale-based date & time

// weekday name using locale options
console.log("Weekday Name:", newDate.toLocaleString('default', { weekday: "long" }));

// =======================
// 5️⃣ Quick Points / Notes
// =======================
// 1. JS months start at 0 (Jan=0, Dec=11), days start at 0 (Sun=0, Sat=6)
// 2. Timestamps are in milliseconds
// 3. Use toLocaleString() for readable formatting and localization
// 4. Date.now() is faster than new Date().getTime()
// 5. ISO string format "YYYY-MM-DD" is safest across browsers
