const InventoryServices = require("./services/InventoryServices");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let questions =
  "Choose an option:\n" +
  "1. Instructions\n" +
  "2. Get Inventory items\n" +
  "3. Add an item and its quantity\n" +
  "4. Remove an item and its quantity\n" +
  "5. Move position of an item in the inventory\n" +
  "6. Get available storage positions\n";

let handleOption = function (option) {
  switch (+option) {
    case 1:
      InventoryServices.handleInstruction();
      setTimeout(() => {
        rl.question(questions, handleOption);
      }, 1500);
      break;
    case 2:
      InventoryServices.handleGetInventoryList();
      setTimeout(() => {
        rl.question(questions, handleOption);
      }, 1500);
      break;
    case 3:
      //Nested callbacks
      rl.question("Please enter item to be added: ", (name) => {
        rl.question("Please enter quantity to be added: ", (qty) => {
          InventoryServices.handleAddItemToInventory(name, qty);
          setTimeout(() => {
            rl.question(questions, handleOption);
          }, 1500);
        });
      });

      break;
    case 4:
      //Nested callbacks
      rl.question("Please enter item to be removed: ", (name) => {
        rl.question("Please enter quantity to be removed: ", (qty) => {
          InventoryServices.handleRemoveItemFromInventory(name, qty);
          setTimeout(() => {
            rl.question(questions, handleOption);
          }, 1500);
        });
      });
      break;
    case 5:
      //Nested callbacks
      rl.question("Please enter item to be move: ", (name) => {
        rl.question("Please enter new location: ", (qty) => {
          InventoryServices.handleMoveItemPosition(name, qty);
          setTimeout(() => {
            rl.question(questions, handleOption);
          }, 1500);
        });
      });
      break;
    case 6:
      InventoryServices.handleGetAvailableStorage();
      setTimeout(() => {
        rl.question(questions, handleOption);
      }, 1500);
      break;
  }
  //Executed if 'option' input is not a case
  setTimeout(() => {
    rl.question(questions, handleOption);
  }, 1500);
};

//One time execution when the program runs
rl.question(questions, handleOption);
