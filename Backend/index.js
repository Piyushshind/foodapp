const express = require('express');
// const mongoose=require('mongoose')
const app = express();
const dataBase = require("./db");
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb+srv://foodees:foodees9270@cluster0.zpraavm.mongodb.net/foodees?retryWrites=true&w=majority");
//   console.log('mongo');

// }

dataBase()

app.get('/foodapp', (req, res) => {
  res.send('Hellow world')
});

app.listen(5000, () => {
  console.log('server started');
})
