const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");

app.use("/products", (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/HTML' });
    const src = fs.ReadStream("./index.html");
    src.pipe(res);
});
app.use("/stylekkk", (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/HTML' });
    const src = fs.ReadStream("./index.html");
    src.pipe(res);
});
//console.log(path.join(__dirname,"LAB12","style"));
app.use("/LAB12/style", express.static(path.join(__dirname, "style")));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
})


app.listen(3000, console.log("DONE 3000 ... "));



<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=>, initial-scale=1.0">

<title>Document</title>

<script>window.onload = function(){
    document.getElementById("SWAP").onclick = function(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    let temp = input1.value;
    input1.value = input2.value;
    input2.value = temp ;
    }}</script>
</head><body>
    <input id="input1" name="num1"/>
    <input id="input2" name="num2"/>
    <button id="SWAP" >SWAP</button></body>
</html>