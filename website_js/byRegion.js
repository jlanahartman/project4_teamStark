

// using a promise to read in our csv
d3.csv("../static/wineDF.csv").then(function (data){
    var wines = data;
    var button = d3.select("#region-button");
    var form = d3.select("#region-form");
    button.on("click",runEnter);
    form.on("submit",runEnter);   




function runEnter() {


    /*  This selects the <tbody> from the html and clears it.
   this prevents results from appearing on top of the previous result.
    */
    d3.select("tbody").html("")
 
    // stops the website from immediately clearing the output
    event.preventDefault(); 


    //This takes user's input from the html <input>
    // since we assigned it the "user-input" id.
    //It will get the value and store it in our inVal variable
    var inVal = d3.select("#region-input").property("value");


    // this capitalizes the first letter if end-user input a region with all lowercase (italy -> Italy)
    var inputValue = inVal.charAt(0).toUpperCase() + inVal.slice(1);
  
    
    
    /*
    This filters the results by looking at the country column. 
   results will be stored when #user-input matches the column value we are querying (i.e., country)
     */
    var filteredWines = wines.filter(wines => wines.country.includes(inputValue));
    console.log(filteredWines);

        




    // this sorts the results by a *different column* (i.e., price)
    var output = _.sortBy(filteredWines, 'price')
   
    
    //finally, utilize the output variable holding the queried info (filteredWines), 
    // loop through each desired column and add them to the table one-by-one

    for (var i = 0; i < filteredWines.length; i++)
        {d3.select("tbody").insert("tr").html(
           // "<td>" + [i+1] + "</td>" + 
            "<td>" + (output[i]['title'])+"</td>"+
            "<td>" + (output[i]['variety'])+"</td>"+
            "<td>" + (output[i]['province'])+"</td>"+
            "<td>" + (output[i]['description'])+"</td>"+
            "<td>" + (output[i]['price'])+"</td>")}
    }; 

});
    


// Source ~ 
// J. Arias,J. (2021) Building a simple website that outputs results from a CSV using user’s input 
// [Article] https://tinyurl.com/js-csv-reader

// Honorable mention to Mr. Arias - We were struggling to import & query a csv this size