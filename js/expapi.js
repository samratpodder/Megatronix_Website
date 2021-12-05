const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/v1/isAlive', (req, res) => res.send('<h1>API is Alive. Jo Bhi kaam hain bolo</h1>'));
app.get('/api/v1/getDir',(req,res)=> {
    const pathtoFiles = path.join(path.resolve(__dirname,".."),"media/members/");
    const f=[];

    // console.log(pathtoFiles);
    fs.readdir(pathtoFiles,(err,files)=>{
        if (err) {
            console.log(err);
        }
        else{
            files.forEach(file=>{
                // console.log(file);
                f.push(path.join(pathtoFiles,file));
            });
        }
        res.send(f);
    });
    
});
    
app.listen(port, () => {
  console.log('Test API app listening on http://localhost:'+port);
});