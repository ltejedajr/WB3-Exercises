"use strict";

window.onload = init;

function init() {
    const justABtn = document.getElementById("justABtn");
    justABtn.onclick = justABtnClicked;
}

function justABtnClicked(){
    const inputDate = document.getElementById("inputDate");
    let dateValue = inputDate.value;
   
    const outputDate = document.getElementById("outputDate");
    outputDate.value = dateValue;

    console.log(outputDate.value.toString());
}