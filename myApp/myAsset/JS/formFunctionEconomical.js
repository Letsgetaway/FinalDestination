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

	


	var userName = document.getElementById('userName').value;
	var userAge = document.getElementById('userAge').value;
	var userEmail = document.getElementById('userEmail').value;
//create a list
	var userInformation = 
		' Name: ' + userName + ' Age: ' + userAge + ' Email: ' + userEmail
	;
//create a new element
	var newElement = document.createElement ('list');
//assign list to newElement
	newElement.textContent = userInformation;
//create divToAppendTo
	var divToAppendTo = document.getElementById('userInformationDisplay');
//divToAppendTo appending userInformationDisplay
	divToAppendTo.appendChild(newElement);
}

