

// read in the file 
// split by the new line and split by the comma
// make it into object


/*

const fs = require('fs')
var parse = require('csv-parse')
fs.readFile(inputPath, function (err, fileData) {
  parse(fileData, {columns: false, trim: true}, function(err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
  })
})



*/



d3.csv("../static/wineDF.csv").then(function (data){
    var wines = data;
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click",runEnter);
    form.on("submit",runEnter);   




function runEnter() {


    /*  This line of code selects the <tbody> from the html and clears it.
    If this is not used, then the results would appear on top of the previous result.
    */
    d3.select("tbody").html("")
 
    event.preventDefault(); 
    //This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id.
    //It will get the value and store it in our inputValue variable
    
    var inputValue = d3.select("#user-input").property("value");
   
    
    var filteredWines = wines.filter(wines => wines.country.includes(inputValue));
    
 
    
    
    var output = _.sortBy(filteredWines, 'points').reverse()
   
    

    for (var i = 0; i < filteredWines.length; i++)
        {d3.select("tbody").insert("tr").html(
            "<td>" + [i+1] + "</td>" + 
            "<td>" + (output[i]['country'])+"</a>"+"</td>"+
            "<td>" + (output[i]['description'])+"</td>"+
            "<td>" + (output[i]['points'])+"</td>"+
            "<td>" + (output[i]['price'])+"</td>")}
    }; 

});
    

