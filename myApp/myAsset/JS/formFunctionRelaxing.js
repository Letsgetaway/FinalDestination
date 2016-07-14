//take info from form input then search through fake database to spit out 
//information on the destination

function searchDB (userContinent){
	//take value from dropdown menu in form to 
	var userContinent = document.getElementById('continent').value;

	for (var i = 0; i < dbRelaxing.length; i++) {
	  if (userContinent === dbRelaxing[i].continent){
	  }
	
	
}

	
var path; 

	if(userContinent === 'Asia'){
		path = "../pages/RelaxingResult/resultAsiaRelaxing.html"
	} else if (userContinent === 'Europe'){
		path = "../pages/RelaxingResult/resultEuropeRelaxing.html"
	} else if (userContinent === 'Australia'){
		path = "../pages/RelaxingResult/resultAustraliaRelaxing.html"
	} else if (userContinent === 'North America'){
		path = "../pages/RelaxingResult/resultNorthAmericaRelaxing.html"
	} else if (userContinent === 'South America'){
		path = "../pages/RelaxingResult/resultSouthAmericaRelaxing.html"
	} else if (userContinent === 'Africa'){
		path = "../pages/RelaxingResult/resultAfricaRelaxing.html"
	};

	location.href = path;

	



}

