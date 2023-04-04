// Let's Stream it 
 const fs = require ("fs");
 const http = require ("http");

 const server = http.createServer();

 server.on("request",(req,res)=>{
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString);
    // });

    // Streaming method
    const rstream = fs.createReadStream("input.txt");
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    });
    rstream.on("Error",(err)=>{
        console.log(err);
        res.end("file not found");
    });
 });

 server.listen(8000,"localhost");