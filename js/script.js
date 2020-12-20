var vehicles = document.querySelector('#vehicles');
var button =  document.querySelector('#button');
var buttonDown =  document.querySelector('#buttonDown');
var buttonUp =  document.querySelector('#buttonUp');

button.addEventListener('click', function (){
	vehicles.style.display = 'block';
	vehicles.style.width = '100%';
});

buttonDown.addEventListener('click', function (){
	vehicles.style.display = 'block';
	vehicles.style.width = '100%';
});

buttonUp.addEventListener('click', function (){
	vehicles.style.display = 'none';
});

// validation
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validationName (){
	var name = document.getElementById('name');
	var nameValue = name.value;

	if(nameValue != ''){
		name.style.border = '1px solid #00ff00'
	}
	else{
		name.style.border = '1px solid #ddd'
	}
}

function validationEmail (){	
	var email = document.getElementById('email');
	var emailValue = email.value;

	if(emailValue.match(pattern)){
		email.style.border = '1px solid #00ff00';
	}
	else{
		email.style.border = '1px solid #ff0000';
	}

	if(emailValue == ''){
		email.style.border = '1px solid #ddd';
	}
}


