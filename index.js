const os = require("os");
console.log(os.totalmem());

// console.log("Hello");
const http = require("http")
// console.log(http);

const server = http.createServer((req,res)=>{
// console.log("Server is working");

    if(req.url==="/about"){
        res.end("<h1>About page</h1>")
    }
    else if(req.url==="/"){
        res.end("Home page")
    }
    else if(req.url==="/contact"){
        res.end("Contact Page")
    }
    else{
        res.end("Page not found")
    }

});

server.listen(5000,()=>{
    console.log("Server is working");

})