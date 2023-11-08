const InventoryServices = require("./services/InventoryServices");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let questions = "Instructions:" + "add item";
let questions = "";

let handleOption = function (option) {
  switch (+option) {
    case 1:
      "1";
      break;
    case 2:
      "2";
      break;
  }
  //Executes a default JS function that requires 2 parameters. The first parameter is a function, the second is
  //the duration in seconds
  setTimeout(() => {
    rl.question(questions, handleOption);
  }, 1500);
};

rl.question(questions, handleOption);
InventoryServices.removeItemFromInventory("dirt", 44);
// InventoryServices.getInventoryList();
module.exports = {
  // Explain what function A does
  functionA() {
    return 1 + 2;
  },
  // Explain what function B does
  functionB() {
    console.log("Hello function B");
  },
};
