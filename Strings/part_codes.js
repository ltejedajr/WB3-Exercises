"use strict";

let partCode1 = ("ACME:123-L");
let partCode2 = ("DI:12345-M");
let partCode3 = ("ACE:1-12");

    function getProductSupplier(partCode) {
        let colonPos = partCode.indexOf(":");
        let productSupplier = partCode.substring(0, colonPos);
        
        console.log(productSupplier);
    }
    
    function getProductNo(partCode) {
        let colonPos = partCode.lastIndexOf(":");
        let dashPos = partCode.indexOf("-");
        let productNo = partCode.substring(colonPos + 1, dashPos);
        
        console.log(productNo);
    }
    
    function getProductSize(partCode) {
        let dashPos = partCode.lastIndexOf("-");
        let productSize = partCode.substring(dashPos + 1);
        
        console.log(productSize);
       
    }
    
    
getProductSupplier(partCode1)
getProductNo(partCode1);
getProductSize(partCode1);

getProductSupplier(partCode2);
getProductNo(partCode2);
getProductSize(partCode2);

getProductSupplier(partCode3);
getProductNo(partCode3);
getProductSize(partCode3);