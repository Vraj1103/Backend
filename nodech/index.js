// CRUD operations

const fs = require ("fs");

// Create a new folder
// fs.mkdirSync("Vraj");

// Create a new file
// fs.writeFileSync("Vraj/bio.txt","I'm Vraj");

// Update the records of the file
// fs.appendFileSync("Vraj/bio.txt",", A second year engineering student");

// Read the data 
// const data = fs.readFileSync("Vraj/bio.txt");
// console.log(data);

// Read the data without buffer(data type)
// newdata = data.toString();
// console.log(newdata);

// or
// const data = fs.readFileSync("Vraj/bio.txt","utf-8");
// console.log(data);

// Rename the file
// fs.renameSync("Vraj/bio.txt","Vraj/mybio.txt");

// delete the file
// fs.unlinkSync("Vraj/mybio.txt");

// delete the folder
fs.rmdirSync("Vraj");