var moment = require("moment");
console.log("Hello");

console.log(moment().startOf("day").fromNow());
console.log(moment().format("LTS"));

var math = require("mathjs");

console.log("create and manipulate complex numbers");
const a = math.complex(2, 3);
console.log(a); // 2 + 3i

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

console.log(square(2, 4, 7.5, 8, 11.5, 21)); // returns: [4, 16, 56.25, 64, 132.25, 441]
