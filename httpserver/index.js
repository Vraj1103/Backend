// Hello world!

const  http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{

const data =  fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");
const obj = JSON.parse(data);
 if(req.url==="/"){
 res.end("Hello from the other side!");
}
 else if (req.url==="/about"){
    res.end("Hello from the about page");
 }
 else if (req.url==="/contact"){
    res.end("Hello from the contact page");
 }
 else if (req.url==="/userapi"){
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(obj[2].name);
 }
 else{
    res.writeHead(404,{"content-type":"text-html"});
    res.end("<h1>404 Error Page!</h1>");
 }
});

server.listen(8000,"127.0.0.1",()=>{ 
    console.log("listening");
});


// fs.mkdir("UserApi",(err)=>{
//     console.log(err);
// })

// fs.mkdir("UserData",(err)=>{
//     console.log(err);
// })

// fs.writeFile("UserApi/userapi.json","Hello Json",(err)=>{
//     console.log(err);
// })

// fs.writeFile("UserData/index.js","Hello Js",(err)=>{
//     console.log(err);
// })

// fs.rmdir("USerApi",(err)=>{
//     console.log(err);
// })
