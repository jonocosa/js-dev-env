var express = require("express");
var path = require("path");
var open = require("open");

const port = 3000;
let app = express();

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, (err)=>{
  if(err) {
    console.log(err)
  }else {
    open('http://localhost:' + port)
  }
})
