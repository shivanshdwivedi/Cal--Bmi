//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("https://shivanshdwivedi.github.io/Cal--Bmi/",function(req,res){

res.sendFile(__dirname + "/index.html");

});


app.post("https://shivanshdwivedi.github.io/Cal--Bmi/",function(req,res){

 var height = Number(req.body.num1);
 var weight = Number(req.body.num2);
 var result = weight/(height*height);

 res.send("Your BMI is :" + result);

});

app.listen(3000,function(){

console.log("your server is working on port 3000");

});
