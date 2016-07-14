//take info from form input then search through fake database to spit out 
//information on the destination

function searchDB (userContinent){
    //take value from dropdown menu in form to 
    var userContinent = document.getElementById('continent').value;

    for (var i = 0; i < dbLuxurious.length; i++) {
      if (userContinent === dbLuxurious[i].continent){
      }
    
    
}

    
var path; 

    if(userContinent === 'Asia'){
        path = "../pages/LuxuriousResult/resultAsiaLuxurious.html"
    } else if (userContinent === 'Europe'){
        path = "../pages/LuxuriousResult/resultEuropeLuxurious.html"
    } else if (userContinent === 'Australia'){
        path = "../pages/LuxuriousResult/resultAustraliaLuxurious.html"
    } else if (userContinent === 'North America'){
        path = "../pages/LuxuriousResult/resultNorthAmericaLuxurious.html"
    } else if (userContinent === 'South America'){
        path = "../pages/LuxuriousResult/resultSouthAmericaLuxurious.html"
    } else if (userContinent === 'Africa'){
        path = "../pages/LuxuriousResult/resultAfricaLuxurious.html"
    };

    location.href = path;

    


   dChild(newElement);
}

