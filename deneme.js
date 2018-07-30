'use strict'; 

const express = require('express');
const app = express();
const fs = require('fs');
let rawdata = fs.readFileSync('city_list.json');
let obj = JSON.parse(rawdata);


function dongu(keyword){
    var array = new Array();
for(var i=0; i<obj.length; i++){
    var tempObj = obj[i];
    var counter = tempObj.name;
    keyword=keyword.toUpperCase();
    if(counter.toUpperCase().includes(keyword)){
        array.push(tempObj);
        
    }
}console.log(array);
return array;

}
        

app.get("/getname",function(req,res,next){
    res.send(obj)
})

app.get('/', (req, res) => res.send(obj));


app.get("/getcity/:keyword",function(req,res){
var keyword = req.params.keyword;
dongu(keyword);
res.send(dongu(keyword));



});


app.listen(3000);