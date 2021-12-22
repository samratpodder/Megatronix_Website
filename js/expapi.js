const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
var results = [];
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/v1/isAlive', (req, res) => res.send('<h1>API is Alive. Jo Bhi kaam hain bolo</h1>'));
app.get('/api/v1/getDir',(req,res)=> {
    results=[];
    fs.createReadStream('js/TeamData.csv')
    .pipe(csv({}))
    .on('data',(data)=>{
      results.push(data)
    })
    .on('end',()=>{
      console.log(results[0]);
      res.send(results);
    });

    
});
    
app.listen(port, () => {
  console.log('Test API app listening on http://localhost:'+port);
});