

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


    //This takes user's input from the html <input>
    // since we assigned it the "user-input" id.
    //It will get the value and store it in our inputValue variable
    var inputValue = d3.select("#user-input").property("value");
    
    /*
    This filters the results by looking at the country column. 
   results will be stored when #user-input matches the column value we are querying (i.e., country)
     */
    var filteredWines = wines.filter(wines => wines.country.includes(inputValue));




    // this sorts the results by a *different column* (i.e., price)
    var output = _.sortBy(filteredWines, 'price')
   
    
    //finally, utilize the output variable holding the queried info (filteredWines), loop through each desired column 
    // and add them to the table one-by-one
    for (var i = 0; i < filteredWines.length; i++)
        {d3.select("tbody").insert("tr").html(
           // "<td>" + [i+1] + "</td>" + 
            "<td>" + (output[i]['title'])+"</a>"+"</td>"+
            "<td>" + (output[i]['winery'])+"</td>"+
            "<td>" + (output[i]['province'])+"</td>"+
            "<td>" + (output[i]['description'])+"</td>"+
            "<td>" + (output[i]['price'])+"</td>")}
    }; 

});
    


// Source ~ 
// J. Arias,J. (2021) Building a simple website that outputs results from a CSV using user’s input 
// [Article] https://tinyurl.com/js-csv-d3

// Honorable mention to Mr. Arias - We were at a loss for how to import & query a file this large with D3. 