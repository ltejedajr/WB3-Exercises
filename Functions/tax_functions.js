"use strict"

function getSocSecTax(grossPay) {
    let socSecTax = grossPay * 0.062;
    return socSecTax;
}

let grossPay = 45000;
let socSecTax = getSocSecTax(grossPay);
console.log("The social security tax for a gross pay of $" + grossPay
            + " is $" + socSecTax + "."
);
