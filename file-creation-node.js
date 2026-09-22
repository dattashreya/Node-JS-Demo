// app2.js

var fs = require('fs');
fs.writeFile('calc2.js', 'console.log("changes done");', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});

// cal2.js
console.log("changes done");
