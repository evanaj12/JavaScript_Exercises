// Mortgage Calculator
// hwk 6
// Evan Johnston

function calculate(){
	var form = document.getElementById("mort_calc");

	var re = /^(\d)+(\.)?(\d)*$/;
	//alert(re.test(form.p.value)+' '+re.test(form.ir.value)+' '+re.test(form.months.value));

	if (re.test(form.p.value)==false){
		alert("Principle Amount is not a number, is negative, or is blank");
		return;
	};

	if (re.test(form.ir.value)==false){
		alert("Yearly % Interest Rate is not a number, is negative, or is blank");
		return;
	};

	if (re.test(form.months.value)==false){
		alert("Loan Term in Months is not a number, is negative, or is blank");
		return;
	};

	var p = parseFloat (form.p.value);
	var irM = (parseFloat (form.ir.value))/1200;
	var term = Math.round( parseFloat (form.months.value));
	var x = Math.pow((1+irM),term)
	var payment = (p*irM)/(1-(1/x));
	
	form.pay_month.value = Math.round(payment*100)/100;
	form.pay_sum.value = Math.round(payment*term*100)/100;
	form.total.value = Math.round((payment*term-p)*100)/100;
};
	 
document.getElementById("mort_calc").calc.onclick = calculate; 
