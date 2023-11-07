# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

Steps
-------------
Create package.json using 'npm init -y'
    -y will automatically fill in the fields

Instructions
-------------
Terminal -> execute 'npm start' -> execute file 'app.js' requires app to be restarted for changes to be updated
    package.json: "scripts": { "start": "node OngZhengXiang_app.js" }
Terminal -> execute 'npm run dev' -> execute file 'app.js' automatically refresh app when changes are made
    package.json: "scripts": { "start": "nodemon OngZhengXiang_app.js" }