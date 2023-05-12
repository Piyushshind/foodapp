const express = require('express');
const app = express();
const dataBase = require("./DataBase");


dataBase()

app.get('/foodapp', (req,res)=>{
       res.send('Hellow world')
});

app.listen(5000,()=>{
  console.log('server started');
})
