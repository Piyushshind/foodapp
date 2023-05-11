const express = require('express');
const mongoose = require('mongoose');
const app = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
   console.log('mongo connected');
}

app.get('/', (req,res)=>{
       res.send('Hellow world')
});

app.listen(5000,()=>{
  console.log('server started');
})
