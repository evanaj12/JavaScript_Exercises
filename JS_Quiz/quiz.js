// hwk7 javascript
// grades astronomy quiz and corrects user error
// Evan Johnston
// 17 October 2014

function grade(){
	var quiz=document.getElementById("quiz");
	
	var tf1a= (quiz.tf1a.checked);
	var tf1b= (quiz.tf1b.checked);
	if (tf1a===false & tf1b===false){
		var tf1=true;
	}else{
		var tf1=false;
	};
	
	var tf2a= (quiz.tf2a.checked);
	var tf2b= (quiz.tf2b.checked);
	if (tf2a===false & tf2b===false){
		var tf2=true;
	}else{
		var tf2=false;
	};
	
	var mc1a= (quiz.mc1a.checked);
	var mc1b= (quiz.mc1b.checked);
	var mc1c= (quiz.mc1c.checked);
	var mc1d= (quiz.mc1d.checked);
	if (mc1a===false & mc1b===false & mc1c===false & mc1d===false){
		var mc1=true;
	}else{
		var mc1=false;
	};
	
	var mc2a= (quiz.mc2a.checked);
	var mc2b= (quiz.mc2b.checked);
	var mc2c= (quiz.mc2c.checked);
	var mc2d= (quiz.mc2d.checked);
	if (mc2a===false & mc2b===false & mc2c===false & mc2d===false){
		var mc2=true;
	}else{
		var mc2=false;
	};
	
	var text1= quiz.text1.value;
	var text1_len=text1.length;
	
	var text2= quiz.text2.value;
	var text2_len=text2.length;

	if (tf1 | tf2 | mc1 | mc2 | text1_len===0 | text2_len===0){
		alert("Please complete the quiz before submitting. Try your best!");
		return;
	}else{
		var correct=0;
		if (tf1b){
			correct++;
		};
		if (tf2a){
			correct++;
		};
		if (mc1b & !(mc1a | mc1c | mc1d)){
			correct++;
		};
		if (mc2d & !(mc2a | mc2b | mc2c)){
			correct++;
		};
		if (text1.match(/galaxy/i)){
			correct++;
		};
		if (text2.match(/age/i)){
			correct++;
		};
	};
	if (correct===6){
		alert("Your grade is "+correct+"/6. Awesome job!");
		return;
	};
	if (correct===0){
		alert("Your grade is "+correct+"/6. You may need to study some more...");
	}else{
		alert("Your grade is "+correct+"/6")
	};
};

quiz.submit.onclick=grade;
