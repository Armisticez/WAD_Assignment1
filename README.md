Introduction
=============
This program is a simple clone of how a Minecraft inventory works.


How to run
=============
Open Terminal through View > Terminal or Ctrl + `

Terminal -> execute 'npm start' -> execute file 'OngZhengXiang_app.js' requires app to be restarted for changes to be updated
    package.json: "scripts": { "start": "node OngZhengXiang_app.js" }

Terminal -> execute 'npm run dev' -> execute file 'OngZhengXiang_app.js' automatically refresh app when changes are made
    package.json: "scripts": { "start": "nodemon OngZhengXiang_app.js" }

Terminal -> execute 'node OngZhengXiang_app.js'/'nodemon OngZhengXiang_app.js'

Functions
=============
  handleInstruction             : Introduction and information of the program

  handleGetInventoryList        : Get array of data containing the information of all stored items

  handleAddItemToInventory      : Add item to inventory. If item exist, add quantity to the existing item. If item does not exist, add the item to the array.
  
  handleRemoveItemFromInventory : Remove item from inventory. If item does not exist/quantity to be removed is more than existing quantity, return error.

  handleMoveItemPosition        : Move item to another slot/position. If item does not exist/slot already contain another item/invalid value, return error.

  handleGetAvailableStorage     : Get all available storage slots that are not in used. Storage has a maximum capacity of 36 slots. Slots are denotated as 'p1'-'p36'.