//take info from form input then search through fake database to spit out 
//information on the destination

function searchDB (userContinent){
	//take value from dropdown menu in form to 
	var userContinent = document.getElementById('continent').value;
	console.log(userContinent);

	for (var i = 0; i < dbRomantic.length; i++) {
	  if (userContinent === dbRomantic[i].continent){
		console.log(dbRomantic[i].country + ': ' +dbRomantic[i].city)
	  }
	
	
}

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

