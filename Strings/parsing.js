"use strict";

function parseAndDisplayName(name) {

let pos = name.indexOf(" ");
let first = name.substring(0, pos);
let last = name.substring(pos + 1);

console.log("Name: " + name);
console.log("First name: " + first);
console.log("Last name: " + last);

}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");













