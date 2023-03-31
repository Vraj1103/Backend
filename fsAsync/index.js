// Hello world
const fs = require("fs");

// fs.writeFile("read1.txt","What a great day!",(err)=>{
//     console.log("completed");
//     console.log(err);
// });

// fs.appendFile("read1.txt"," Have a nice day!",(err)=>{
//     console.log("Task Completed");
//     console.log(err);
// });

fs.readFile("read1.txt","UTF-8",(err,data)=>{
    console.log("Job Completed");
    console.log(data);
});

// console.log(data);