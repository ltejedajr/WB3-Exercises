"use strict";
// Parsing Dates
// Example 1
// If I have a valid date string, I can use Date.parse() to convert it to milliseconds.
// The example below returns the number of milliseconds between the date and January 1,1970.

// let milliSec = Date.parse("May 1, 2022");

// console.log(milliSec);

// Example 2 
// Use the number of milliseconds to convert it to a Date object.
// let milliSec = Date.parse("May 1,2022");
// let d = new Date(milliSec);

// console.log(d);

// Determining the Difference Between Two Dates
// * Remember that dates are stored in JS as the number of milliseconds that have elapse since January 1, 1970.
// Example 3
// let date1 = new Date("January 15, 2022");
// let date2 = new Date("March 15, 2022");

// Formula for this would be 1000(1 second) * 60(seconds in a minute)
// * 60(minutes in an hour) * 24(hours in a day)
// let msec_per_day = 1000 * 60 * 60 * 24;
// let elapsedMilliseconds = date2.getTime() - date1.getTime();

// let dayDiff = elapsedMilliseconds / msec_per_day;
// let numDays = Math.round(dayDiff);

// console.log("The number of days between dates is " + numDays);

let startDate = new Date ("July 11, 2022");
let endDate = new Date ("November 11, 2022");

let msecPerDay = 1000 * 60 * 60 * 24;
let elapsedMilliseconds = endDate.getTime() - startDate.getTime();

let dayDiff = elapsedMilliseconds / msecPerDay;
let numDays = Math.round(dayDiff);

console.log("The number of days between dates is " + numDays + ".");




