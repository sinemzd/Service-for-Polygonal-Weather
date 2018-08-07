"use strict";

const https = require("https");
const express = require("express");
var SunCalc = require("suncalc");
const app = express();
const fs = require("fs");
let rawdata = fs.readFileSync("city_list.json");
let obj = JSON.parse(rawdata);
var options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
  passphrase: "panda1"
};

function dongu(keyword) {
  var array = new Array();
  for (var i = 0; i < obj.length; i++) {
    var tempObj = obj[i];

    var counter = tempObj.name;
    keyword = keyword.toUpperCase();
    if (counter.toUpperCase().includes(keyword)) {
        if(array.indexOf())
      array.push(tempObj);
    }
  }
  console.log(array);
  return array;
}

app.get("/getname", function(req, res, next) {
  res.send(obj);
});

app.get("/", (req, res) => res.send(obj));

app.get("/getcity/:keyword", function(req, res) {
  var keyword = req.params.keyword;

  res.send(dongu(keyword));
});

app.listen(4100);

https.createServer(options, app).listen(2005);
