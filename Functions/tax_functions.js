"use strict"

function getSocSecTax(grossPay) {
    let socSecTax = grossPay * 0.062;
    return socSecTax;
}

function getMedicareTax(grossPay) {
    let medicareTax = grossPay * 0.0145;
    return medicareTax;
}

function getFederalTax(grossPay, withholdingCode) {
    
    let federalTax;

    if (withholdingCode = 0) {
        federalTax = grossPay * .23;
    }
    
    else if (withholdingCode = 1) {
        federalTax = grossPay * .21;
    }
    
    else if (withholdingCode = 2) {
        federalTax = grossPay * .195;
    }
    
    else if (withholdingCode = 3) {
        federalTax = grossPay * .185;
    }
    
    else if (withholdingCode = 4) {
        federalTax = grossPay * .18;
    }
    else if (withholdingCode = 5) {
        federalTax = grossPay * .1750;
    }
    else {
        federalTax = grossPay * .17;
    }
    
    return federalTax;
}

let grossPay = 750;
let withhholdingCode = 0
let socSecTax = getSocSecTax(grossPay);
let medicareTax = getMedicareTax(grossPay);
let federalTax = getFederalTax(grossPay);

console.log("A gross pay of $" + grossPay + " will have a social security tax withholding of $" + socSecTax.toFixed(2) + 
" with a medicare tax withholding of $" + medicareTax.toFixed(2) + " and a federal tax withhholding of "
+ federalTax.toFixed(2) + ".");

grossPay = 1550;
withhholdingCode = 2
socSecTax = getSocSecTax(grossPay);
medicareTax = getMedicareTax(grossPay);
federalTax = getFederalTax(grossPay);

console.log("A gross pay of $" + grossPay + " will have a social security tax withholding of $" + socSecTax.toFixed(2) + 
" with a medicare tax withholding of $" + medicareTax.toFixed(2) + " and a federal tax withhholding of "
+ federalTax.toFixed(2) + ".");

grossPay = 1100;
withhholdingCode = 6
socSecTax = getSocSecTax(grossPay);
medicareTax = getMedicareTax(grossPay);
federalTax = getFederalTax(grossPay);

console.log("A gross pay of $" + grossPay + " will have a social security tax withholding of $" + socSecTax.toFixed(2) + 
" with a medicare tax withholding of $" + medicareTax.toFixed(2) + " and a federal tax withhholding of "
+ federalTax.toFixed(2) + ".");
    
