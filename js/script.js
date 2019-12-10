console.log('nyeees');

var finalAge = 0;
var finalPostal = '';
var finalPhone = '';

$('#formSubmit').on('click', function(){
	// On click of submit button, store age value entered by the user
	var age = $('#age').val();
	// regular expression to find whether the user has inputted the correct details
	var agePattern = /^[0-9]{2}$/;
	// Test method makes sure that the inputed number matches the age with the agePattern
	// This will return a boolean if the inputted age fits within the pattern
	var ageTested = agePattern.test(age);
	console.log(age);
	console.log(ageTested);
	// If the age has been entered in by the user correctly, sets the global value of the finalAge
	if(ageTested === true){
		finalAge = age; 
	} else{
		alert('enter an age between 10 - 99');
	}

	// NZ postal code pattern
	var postalCode = $('#postal').val();
	var postaPattern = /^[A-Z]|[a-z]{2}[0-9]{1,2} ?[0-9][A-Z]|[a-z]{2}$/;
	var postalTested = postaPattern.test(postalCode);
	console.log(postalCode);
	console.log(postalTested);
	// Displays relevant information whether the user inputs the appropriate details
	if(postalTested === true){
		finalPostal = postalCode;
	} else{
		alert('please enter valid UK post code. e.g: AZ05AZ');
	}

	// Phone number
	var phoneNumber = $('#phone').val();
	// +64(04)384 924 - testing for an nz number like this
	var phonPattern = /^[+]64[(\-][0-9]{2}[)\-][0-9]{3}\s[0-9]{4}$/;
	var phoneTested = phonPattern.test(phoneNumber);
	if(phoneTested === true){
		finalPhone = phoneNumber;
	} else{
		alert('Please enter a correct phone number. e.g. +64(04)384 9624');
	}

	// Prints user's input only if what the user has inputted has been done correctly 
	if((ageTested === true) && (postalTested === true) && (phoneTested === true)){
		printUserInput();
		// clear field after submit is clicked
		clearForm();
	}
});

$('#registerBtn').on('click', function(){
	// Stores inputted user name
	var userName = $('#userName').val();
	// Stores inputted password
	var password = $('#userPassword').val();
	// Stores inputted confirmed password
	var confPassword = $('#confirmPassword').val();

	// Regular expression to find if appropriate user name has been used
	var userPattern = /^\w+$/
	// Checks to see if the login fields have been left blank
	if((userName === '') || (password === '') || (confPassword === '')){
		alert('Please fill in the user name, password and/or confirm password');
	}
});


function clearForm(){
	// Clears the user's inputted age from field
	document.getElementById('age').value = '';
	// Clears the user's inputted postal code from field
	document.getElementById('postal').value = '';
	// Clears the user's inputted phone number from field
	document.getElementById('phone').value = '';
}

function printUserInput(){
	document.getElementById('formOutput').innerHTML = 
	'<h3>User\'s details:</h3>' +
	'<p><b>Age:</b> ' + finalAge + '</p>' +
	'<p><b>Postal Code:</b> ' + finalPostal + '</p>' +
	'<p><b>Phone number:</b> ' + finalPhone + '</p>'; 
}








































