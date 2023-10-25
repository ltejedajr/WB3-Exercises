"use strict";

function getProductSupplier(partCode) {
    let colonPos = partCode.indexOf(":");
    let productSupplier = partCode.substring(0, colonPos);
    
    console.log(partCode);
}

function getProductNo(partCode) {
    let colonPos = partCode.lastIndexOf(":");
    let dashPos = partCode.lastIndexOf("-");
    let productNo = partCode.substring(colonPos + dashPos);
    
    console.log(partCode);
}


function getProductSize(partCode) {
    let dashPos = partCode.lastIndexOf("-");
    let productSize = partCode.substring(dashPos + 1);

    console.log(partCode);
}

getProductSupplier("ACME:123-L");
getProductNo("DI:12345-M");
getProductSize("ACE:1-12");