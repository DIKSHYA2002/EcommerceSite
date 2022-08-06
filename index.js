const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const userroutes = require('./users');
const itemrouters = require('./items');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/admins' ,userroutes);
app.use(itemrouters);


app.listen(4001, ()=>{
    console.log("started at port 4001");
});