const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");

app.use("/products",(req,res,next)=>{
    res.writeHead(200, { 'Content-Type': 'text/HTML' });
    const src = fs.ReadStream("./index.html");
    src.pipe(res);
});
app.use("/stylekkk",(req,res,next)=>{
    res.writeHead(200, { 'Content-Type': 'text/HTML' });
    const src = fs.ReadStream("./index.html");
    src.pipe(res);
});
//console.log(path.join(__dirname,"LAB12","style"));
app.use("/LAB12/style",express.static(path.join(__dirname,"style")));

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"404.html"));
})


app.listen(3000,console.log("DONE 3000 ... "));