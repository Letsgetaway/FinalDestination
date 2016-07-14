//take info from form input then search through fake database to spit out 
//information on the destination

function searchDB (userContinent){
    //take value from dropdown menu in form to 
    var userContinent = document.getElementById('continent').value;

    for (var i = 0; i < dbScenic.length; i++) {
      if (userContinent === dbScenic[i].continent){
      }
    
    
}

    
var path; 

    if(userContinent === 'Asia'){
        path = "../pages/ScenicResult/resultAsiaScenic.html"
    } else if (userContinent === 'Europe'){
        path = "../pages/ScenicResult/resultEuropeScenic.html"
    } else if (userContinent === 'Australia'){
        path = "../pages/ScenicResult/resultAustraliaScenic.html"
    } else if (userContinent === 'North America'){
        path = "../pages/ScenicResult/resultNorthAmericaScenic.html"
    } else if (userContinent === 'South America'){
        path = "../pages/ScenicResult/resultSouthAmericaScenic.html"
    } else if (userContinent === 'Africa'){
        path = "../pages/ScenicResult/resultAfricaScenic.html"
    };

    location.href = path;

    


    }