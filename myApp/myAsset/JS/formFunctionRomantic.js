//take info from form input then search through fake database to spit out 
//information on the destination

function searchDB (userContinent){
	//take value from dropdown menu in form to 
	var userContinent = document.getElementById('continent').value;

	// var tar = document.getElementsByClassName("resultBox");
	// var el = document.createElement('p');
	// var r;
	for (var i = 0; i < dbRomantic.length; i++) {
	  if (userContinent === dbRomantic[i].continent){
	  // 	r = dbRomantic[i].country + '\n' + dbRomantic[i].city;
	  // } else {
	  // 	r = null;
	  }
}

	
var path; 

	if(userContinent === 'Asia'){
		path = "../pages/RomanticResult/resultAsiaRomantic.html"
	} else if (userContinent === 'Europe'){
		path = "../pages/RomanticResult/resultEuropeRomantic.html"
	} else if (userContinent === 'Australia'){
		path = "../pages/RomanticResult/resultAustraliaRomantic.html"
	} else if (userContinent === 'North America'){
		path = "../pages/RomanticResult/resultNorthAmericaRomantic.html"
	} else if (userContinent === 'South America'){
		path = "../pages/RomanticResult/resultSouthAmericaRomantic.html"
	} else if (userContinent === 'Africa'){
		path = "../pages/RomanticResult/resultAfricaRomantic.html"
	};

	location.href = path;

}

// el.textContent = r;
// tar.appendChild(el)
	// TODO: figure out how to append the info to result div, and figure out multiple result into multiple div



