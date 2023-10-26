"use strict";

window.onload = init;

    function init() {
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.onclick = submitBtnClicked;
    }

    function submitBtnClicked() {
        const inputDate = document.getElementById("inputDate");
        let dateValue = inputDate.value;
        
        let message = "Today's date is " + dateValue;

        const outputH6 = document.getElementById("outputH6");
        outputH6.innerHTML = message.toString();
    }
   
