Tutorial
=============
This program is a clone of roughly how Minecraft inventory works


Steps
=============
Create package.json using 'npm init -y'
    -y will automatically fill in the fields

Explanations
=============
Terminal -> execute 'npm start' -> execute file 'app.js' requires app to be restarted for changes to be updated
    package.json: "scripts": { "start": "node OngZhengXiang_app.js" }
Terminal -> execute 'npm run dev' -> execute file 'app.js' automatically refresh app when changes are made
    package.json: "scripts": { "start": "nodemon OngZhengXiang_app.js" }
-------------
A default storage data (static) is stored in /data folder
All logical functions to manipulate inventory data is stored in /services folder
