const express = require('express');
const app = express();



app.get('/foodapp', (req,res)=>{
       res.send('Hellow world')
});

app.listen(5000,()=>{
  console.log('server started');
})
