//take info from form input then search through fake database to spit out 
//information on the destination

function searchDB (userContinent){
	//take value from dropdown menu in form to 
	var userContinent = document.getElementById('continent').value;

	for (var i = 0; i < dbEconomical.length; i++) {
	  if (userContinent === dbEconomical[i].continent){
	  }
	
	
}

	
var path; 

	if(userContinent === 'Asia'){
		path = "../pages/EconomicalResult/resultAsiaEconomical.html"
	} else if (userContinent === 'Europe'){
		path = "../pages/EconomicalResult/resultEuropeEconomical.html"
	} else if (userContinent === 'Australia'){
		path = "../pages/EconomicalResult/resultAustraliaEconomical.html"
	} else if (userContinent === 'North America'){
		path = "../pages/EconomicalResult/resultNorthAmericaEconomical.html"
	} else if (userContinent === 'South America'){
		path = "../pages/EconomicalResult/resultSouthAmericaEconomical.html"
	} else if (userContinent === 'Africa'){
		path = "../pages/EconomicalResult/resultAfricaEconomical.html"
	};

	location.href = path;

	


	
}

