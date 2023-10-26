"use strict";

// Remember strings are counted from 0 and on.

// Example 1
// In this example below I use a method that allows me
// to reach into a Date object and extract specific values.
// Below the month was 9 or October:

// let d = new Date();
// console.log(d.getMonth( +1));


// Example 2
// In this example we obtain the month name using an array.
// 
// const months = ["January", "February", "March", "April",
//                 "May", "June", "July", "August", "September",
//                 "October", "November", "December"];

// let d = new Date();
// let monthName = months[d.getMonth()];

// console.log(monthName);

// Example 3
// The code below sets the date to February 9, 1963.

// let d = new Date();
// d.setMonth(1);
// d.setDate(9);
// d.setFullYear(1963);

// console.log(d);

// Example 4
// The code below determines when one yea from today will be.

// let d = new Date();
// d.setFullYear(d.getFullYear() +1);

// console.log(d);

let d = new Date("10/26/2023");

console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toLocaleString());