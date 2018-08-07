'use strict'; 

const fs = require('fs');
let rawdata = fs.readFileSync('city_list.json');
let obj = JSON.parse(rawdata);
var array = new Array();

function dongu(){
    
for(var i=0; i<obj.length; i++){
    var tempObj = obj[i];
    var key = true;
    var counter_name = tempObj.name;
    var counter_country = tempObj.country;

    
    for(var k=0; k<array.length; k++){
        var tempObj2 = array[k];
    
    if(tempObj2.name == counter_name && tempObj2.country == counter_country){
        key=false;
        break;
    }
    
   }
   if(key){
   array.push(tempObj);
}
   if(i%10000==0){
    console.log(i +". eleman işlendi");
}
    
}
}
dongu();
var json = JSON.stringify(array);
fs.writeFile ("city_list2.json", json, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);