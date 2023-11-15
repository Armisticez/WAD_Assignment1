const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// =============== InventoryData
const DUMMY_INVENTORY = [
  {
    id: "i1",
    itemName: "Cobblestone",
    qty: 10,
    position: "p1",
  },
  {
    id: "i2",
    itemName: "Dirt",
    qty: 64,
    position: "p2",
  },
  {
    id: "i3",
    itemName: "Sand",
    qty: 64,
    position: "p3",
  },
];

var inventoryData = DUMMY_INVENTORY;
// =============== InventoryServices
const inventoryCapacity = 36;

//Assigned globally to allow function to be used in 'handleGetAvailableStorage' & 'handleMoveItemPosition'
const handleAvailablePositions = () => {
  let positions = [];
  let unavailablePosition = [];

  //All positions used in inventoryData
  for (let i = 0; i < inventoryData.length; i++) {
    unavailablePosition.push(inventoryData[i].position);
  }
  //All possible positions
  for (let i = 1; i <= inventoryCapacity; i++) {
    positions.push("p" + i);
  }
  //Available positions
  let availablePositions = positions.filter(
    (item) => !unavailablePosition.includes(item)
  );
  return availablePositions;
};

const handleInstruction = () => {
  let instruction =
    "This program is a simple clone of how a Minecraft inventory might function. \n" +
    "In-built are a few items assigned by the program by default. Each item will \n" +
    "be assigned an inventory space, labelled position. The inventory can only \n" +
    "hold up to 36 sets of items.\n" +
    "Please select an option (1-6) to execute the corresponding function";
  console.log(instruction);
};

const handleGetInventoryList = () => {
  console.log(inventoryData);
};

const handleAddItemToInventory = (name, qty) => {
  //Find Index of Object in the Array 'inventoryData' where the 'itemName' matches the user input item
  //Ignore case sensitivity by converting all characters to lower case
  const existingItemIndex = inventoryData.findIndex(
    (item) => item.itemName.toLowerCase() === name.toLowerCase()
  );

  //Add item if item does not exists
  if (existingItemIndex === -1) {
    inventoryData.push({
      id: "i" + (inventoryData.length + 1), // (inventoryData.length + 1) to turn length to int
      itemName: name,
      qty: +qty, //adding '+' converts qty to int
      position: "p" + (inventoryData.length + 1), // (inventoryData.length + 1) to turn length to int
    });
    console.log(`${qty} ${name} has been added into the inventory!`); //Backtick to allow use of both strings and variables
    return;
  } else {
    const existingInventoryItem = inventoryData[existingItemIndex]; //The object of the selected item

    const updateItem = {
      ...existingInventoryItem, //spread operator to use back existing object properties
      qty: existingInventoryItem.qty + +qty,
    };
    inventoryData[existingItemIndex] = updateItem;
    console.log(
      `${qty} ${existingInventoryItem.itemName} has been added from the inventory!`
    );
    console.log(inventoryData);
  }
};

const handleRemoveItemFromInventory = (name, qty) => {
  //Find Index of Object in the Array 'inventoryData' where the 'itemName' matches the user input item
  //Ignore case sensitivity by converting all characters to lower case
  const existingItemIndex = inventoryData.findIndex(
    (item) => item.itemName.toLowerCase() === name.toLowerCase()
  );

  //If item does not exists
  if (existingItemIndex === -1) {
    console.log(`${name} does not exist in inventory!`);
    return;
  }

  //Get array of the item base on user input
  const existingInventoryItem = inventoryData[existingItemIndex];

  //Check if quantity intended to deduct is more than the amount of quantity that exists
  if (existingInventoryItem.qty < qty) {
    console.log(
      `Cannot remove ${qty} ${existingInventoryItem.itemName}! You only have ${existingInventoryItem.qty} ${existingInventoryItem.itemName}`
    );
    return;
  }

  const updateQty = existingInventoryItem.qty - qty;
  //Remove all quantity of the item
  if (updateQty === 0) {
    //Ignore case sensitivity by converting all characters to lower case
    inventoryData = inventoryData.filter(
      (item) => item.itemName.toLowerCase() !== name.toLowerCase()
    );

    console.log(
      `${existingInventoryItem.itemName} has been removed from the inventory!`
    );
  }
  //Remove a portion of the quantity of the item
  else {
    const updateItem = {
      ...existingInventoryItem, //spread operator to use back existing object properties
      qty: existingInventoryItem.qty - qty,
    };
    inventoryData[existingItemIndex] = updateItem;

    console.log(
      `${qty} ${existingInventoryItem.itemName} has been removed from the inventory!`
    );
    console.log(inventoryData[existingItemIndex]);
  }
};

const handleMoveItemPosition = (name, position) => {
  const existingItemIndex = inventoryData.findIndex(
    (item) => item.itemName.toLowerCase() === name.toLowerCase()
  );

  //If item does not exists
  if (existingItemIndex === -1) {
    console.log(`${name} does not exist in inventory!`);
    return;
  }

  const existingPositionIndex = inventoryData.findIndex(
    (item) => item.position.toLowerCase() === position.toLowerCase()
  );
  // console.log(existingPositionIndex);
  //If position already contain an item
  if (existingPositionIndex !== -1) {
    console.log(`Position ${position} already contains an item!`);
    return;
  }

  let availablePositions = handleAvailablePositions();
  let oldPosition = inventoryData[existingItemIndex].position;

  let checkIfPositionValid = availablePositions.indexOf(position);
  // console.log(checkIfPositionValid);
  if (checkIfPositionValid === -1) {
    console.log("Invalid Position!");
    return;
  }

  inventoryData[existingItemIndex].position = position;
  console.log(
    `Moved ${inventoryData[existingItemIndex].itemName}'s to ${position} from ${oldPosition}`
  );
};

const handleGetAvailableStorage = () => {
  console.log(handleAvailablePositions());
};
// ===============

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
      handleInstruction();
      setTimeout(() => {
        rl.question(questions, handleOption);
      }, 1500);
      break;
    case 2:
      handleGetInventoryList();
      setTimeout(() => {
        rl.question(questions, handleOption);
      }, 1500);
      break;
    case 3:
      //Nested callbacks
      rl.question("Please enter item to be added: ", (name) => {
        rl.question("Please enter quantity to be added: ", (qty) => {
          handleAddItemToInventory(name, qty);
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
          handleRemoveItemFromInventory(name, qty);
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
          handleMoveItemPosition(name, qty);
          setTimeout(() => {
            rl.question(questions, handleOption);
          }, 1500);
        });
      });
      break;
    case 6:
      handleGetAvailableStorage();
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
