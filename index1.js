const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/check',(req, res)=>{
   let num=req.query.number;
   let n = parseInt(num);
   let r = n**0.5;
   res.json({'msg':r.toFixed(2)});

     });
app.listen(9000);