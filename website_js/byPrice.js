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
     var varietal = d3.select("#varietal-input").property("value");
     console.log(varietal);
    //  var filteredCountry = wines.filter(wines => wines.country.includes(country_mod));
    //  console.log(filteredCountry);
     // need to add $ sign to user input to match csv format 
     var dMin = "$" + min;
     var dMax = "$" + max;

    var theFilter = {
        dMin,
        dMax
    };
    
    
     var budgetWines = wines.filter(wine => wine.price >= theFilter.dMin && wine.price <= theFilter.dMax);
     var filteredVarietal = budgetWines.filter(varietalPrice=>varietalPrice.variety.includes(varietal));
    //  console.log(filteredVarietal);
     console.log(filteredVarietal.length);
    

     var output = _.sortBy(budgetWines,'price');
     var output2 = _.sortBy(filteredVarietal,'price');
    console.log(output2);
    console.log(output);

     for (var i = 0; i < budgetWines.length; i++);


     // ~~ !! Some kind of issue with putting together the chart.. 
     // i fear this is somewhat of a janky solution to generating a chart 
     // the console log says we are pulling the values out properly. 
     // just need to figure out how to dynamically display the results 
     // of a query using budget AND varietal 

         if(filteredVarietal.length == 0 ) {
            {d3.select("tbody").insert("tr").html(
                "<td>" + (output2[i]['title'])+"</td>"+
                "<td>" + (output2[i]['variety'])+"</td>"+
                "<td>" + (output2[i]['country'])+"</td>"+
                "<td>" + (output2[i]['description'])+"</td>"+
                "<td>" + (output2[i]['price'])+"</td>")};
             } else if (filteredVarietal.length > 0) {
                
                {d3.select("tbody").insert("tr").html(
                    "<td>" + (output[i]['title'])+"</td>"+
                    "<td>" + (output[i]['variety'])+"</td>"+
                    "<td>" + (output[i]['country'])+"</td>"+
                    "<td>" + (output[i]['description'])+"</td>"+
                    "<td>" + (output[i]['price'])+"</td>")}
            };
                   
 }

});

//  });
        //  {d3.select("tbody").insert("tr").html(
        //      "<td>" + (output[i]['title'])+"</td>"+
        //      "<td>" + (output[i]['variety'])+"</td>"+
        //      "<td>" + (output[i]['country'])+"</td>"+
        //      "<td>" + (output[i]['description'])+"</td>"+
        //      "<td>" + (output[i]['price'])+"</td>"
        //      )};
    // for (var i = 0)


    //     console.log(output);
    //     var filteredCountry = output.filter(output => output.country.includes(country_mod));
    //     console.log(filteredCountry)



    // }});





