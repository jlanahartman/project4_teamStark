/* 

Page is operational - some issues with min & max values returning empty array (e.g., min 40 & max 100) -- 
    need some QA testing here 

*/ 
 d3.csv("../static/wineDF.csv").then(function (data){

      var wines = data;
      var button = d3.select("#price-button");
      var form = d3.select("#price-form");
      button.on("click",runEnter);
      form.on("submit",runEnter); 


function runEnter() {


    d3.select("tbody").html("")
    event.preventDefault();


     var min = d3.select("#min_input").property("value");
     var max = d3.select("#max_input").property("value");

     // need to add $ sign to user input to match csv format 
     var dMin = "$" + min;
     var dMax = "$" + max;

    var theFilter = {
        dMin,
        dMax
    };
    
    
     var budgetWines = wines.filter(wine => wine.price >= theFilter.dMin && wine.price <= theFilter.dMax);
     

     var output = _.sortBy(budgetWines,'price');

     for (var i = 0; i < budgetWines.length; i++)
         {d3.select("tbody").insert("tr").html(
             "<td>" + (output[i]['title'])+"</td>"+
             "<td>" + (output[i]['variety'])+"</td>"+
             "<td>" + (output[i]['country'])+"</td>"+
             "<td>" + (output[i]['description'])+"</td>"+
             "<td>" + (output[i]['price'])+"</td>"
             )};


        console.log(output);



    }});





