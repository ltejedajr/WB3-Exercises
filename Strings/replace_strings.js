"use strict";

let message = "Our corporate offices are located in Dallas.";

let newMessage = message.replace("Dallas", "Austin");

console.log(newMessage);

message = "Our corporate offices are located in Dallas.";

newMessage = message.replace("Dallas", /DALLAS/i);

console.log(newMessage);
