"use strict";

let currentDateTime = new Date();

let date = (currentDateTime.getDate());
let month = (currentDateTime.getMonth()+1);
let year = (currentDateTime.getFullYear());

const daysOfTheWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

let weekday = daysOfTheWeek[currentDateTime.getDay()];

console.log(date + "-" + month + "-" + year + " (" + weekday +")");
