var moment = require("moment");
console.log("Hello");

console.log(moment().startOf("day").fromNow());
console.log(moment().format("LTS"));
