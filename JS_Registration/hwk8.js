// hwk8 javascript
// user registration
// Evan Johnston
// 20 Oct. 2014

function register(){
	var form = document.getElementById("register");
	
	var user = form.user.value;
	var pw1 = form.pw1.value;
	var pw2 = form.pw2.value;
	
	// check username
	var user_re = /^([a-z]|[A-Z]){1}([a-z]|[A-Z]|[0-9]){5,9}$/
	
	// check pw
	var pw_re = /^\w{6,10}$/

	if (user_re.test(user)){
		if ((pw_re.test(pw1)) & 
		(pw1.search(/[a-z]/)!=-1) & 
		(pw1.search(/[A-Z]/)!=-1) & 
		(pw1.search(/[0-9]/)!=-1)){
			if (pw1===pw2){
				alert("Passed Validation");
				return true;
			}else{
				alert("Invalid Input: Passwords do not match");
				return false;
			};
		}else{	
			alert("Invalid Input: Password");
			return false;
		};
	}else{
		alert("Invalid Input: Username");
		return false;
	};
};

document.getElementById("register").onsubmit=register;
