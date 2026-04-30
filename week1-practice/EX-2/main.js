import Duration from "./Duration.js";

let newDu = new Duration(100);
console.log(newDu.toString());

let dutwo = Duration.fromMinutesAndSeconds(1,10);
newDu.minus(dutwo);
console.log(newDu.toString());