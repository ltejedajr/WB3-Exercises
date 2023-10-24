"use strict";

function displayMailingLabel(name, address, city, state, zip) {
    let line1 = name;
    let line2 = address;
    let line3 = `${city}, ${state}  ${zip}`;

    console.log(line1);
    console.log(line2);
    console.log(line3);
}

function addNumbers(num1, num2) {
    let result = num1 + num2;
    let message = `${num1} + ${num2} = ${result}`
    console.log(message);

}

function displayReceipt(totalDue, amountPaid) {
    console.log("Total Due: " + totalDue);
    console.log("Amount Paid: " + amountPaid);
    let changeDue = amountPaid - totalDue;
    changeDue = changeDue.toFixed(2);
    console.log("Change Due: " + changeDue);
}

displayMailingLabel("Big Bird", "123 Seasame Street", "Chicago", "IL", "60000")
displayMailingLabel("Mickey Mouse", "123 Disney Lane", "Orlando", "FL", "70000")

addNumbers(1,2);
addNumbers( 100, 505);

displayReceipt(195.99, 200);