const express = require('express');
const userrouters = require('./routers/userrouters');
const songrouters = require("./routers/songrouter");
const playlistrouters = require("./routers/playlistrouters");

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
 
app.use(express.urlencoded({extended:true}));

app.use('/users', userrouters);

app.use('/songs',songrouters);

app.use('/playlist',playlistrouters);

app.listen(4000, () => console.log('listening to 4000...'));