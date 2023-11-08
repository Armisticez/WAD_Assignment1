var inventoryData = require("../data/InventoryData");
//^Assign as variable instead of const as object will be modified

const getInventoryList = () => {
  console.log(inventoryData);
};

const addItemToInventory = (name, qty) => {

};

const removeItemFromInventory = (name, qty) => {
  //Find Index of Object in the Array 'inventoryData' where the 'itemName' matches the user input item
  //Ignore case sensitivity by converting all characters to lower case
  const existingInventoryIndex = inventoryData.findIndex(
    (item) => item.itemName.toLowerCase() === name.toLowerCase()
  );

  //If item does not exists, value = -1
  if (existingInventoryIndex === -1) {
    console.log(`${name} does not exist in inventory!`);
    return;
  }

  //Get array of the item base on user input

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
    // console.log("=======================");
    // inventoryData.forEach(function (item) {
    //   console.log(item);
    // });
    // console.log("=======================");
    console.log(
      `${existingInventoryItem.itemName} has been removed from the inventory!`
    );
  }
  //Remove a portion of the quantity of the item
  else {
    const updateItem = {
      ...existingInventoryItem,
      qty: existingInventoryItem.qty - qty,
    };
    inventoryData[existingInventoryIndex] = updateItem;
    // console.log(inventoryData[existingInventoryIndex]);
    // console.log("=======================");
    // inventoryData.forEach(function (item) {
    //   console.log(item);
    // });
    // console.log("=======================");
    console.log(`${qty} ${existingInventoryItem.itemName} has been removed from the inventory!`)
    console.log(inventoryData[existingInventoryIndex]);
  }
};

// addItemToInventory("Dirt", 10);
module.exports = {
  getInventoryList,
  addItemToInventory,
  removeItemFromInventory,
};
