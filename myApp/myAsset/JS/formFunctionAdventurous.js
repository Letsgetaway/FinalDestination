//take info from form input then search through fake database to spit out 
//information on the destination

function searchDB (userContinent){
	//take value from dropdown menu in form to 
	var userContinent = document.getElementById('continent').value;

	for (var i = 0; i < dbAdventurous.length; i++) {
	  if (userContinent === dbAdventurous[i].continent){
	  }
	
	
}

	
var path; 

	if(userContinent === 'Asia'){
		path = "../pages/AdventurousResult/resultAsiaAdventurous.html"
	} else if (userContinent === 'Europe'){
		path = "../pages/AdventurousResult/resultEuropeAdventurous.html"
	} else if (userContinent === 'Australia'){
		path = "../pages/AdventurousResult/resultAustraliaAdventurous.html"
	} else if (userContinent === 'North America'){
		path = "../pages/AdventurousResult/resultNorthAmericaAdventurous.html"
	} else if (userContinent === 'South America'){
		path = "../pages/AdventurousResult/resultSouthAmericaAdventurous.html"
	} else if (userContinent === 'Africa'){
		path = "../pages/AdventurousResult/resultAfricaAdventurous.html"
	};

	location.href = path;

	


	
}

