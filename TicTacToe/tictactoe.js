/* tic tac toe js */

var boxes=document.getElementsByName("box");
boxes[0].onclick=function(){mark(0)};
boxes[1].onclick=function(){mark(1)};
boxes[2].onclick=function(){mark(2)};
boxes[3].onclick=function(){mark(3)};
boxes[4].onclick=function(){mark(4)};
boxes[5].onclick=function(){mark(5)};
boxes[6].onclick=function(){mark(6)};
boxes[7].onclick=function(){mark(7)};
boxes[8].onclick=function(){mark(8)};

var count= 0;
var x_spots = [];
var o_spots = [];

var vert_win_1 = ["11", "21", "31"];
var vert_win_2 = ["12", "22", "32"];
var vert_win_3 = ["13", "23", "33"];

var horz_win_1 = ["11", "12", "13"];
var horz_win_2 = ["21", "22", "23"];
var horz_win_3 = ["31", "32", "33"];

var diag_win_1 = ["11", "22", "33"];
var diag_win_2 = ["31", "22", "13"];

var victory_x = false;
var victory_o = false;

function mark(box){
	if (victory_x||victory_o){
		if (victory_x){
			var winner="X";
		}
		if (victory_o){
			var winner="O";
		}
		alert ("Stop! "+winner+" has already won! Refresh for a new game");
		return
	}

	var spot=boxes[box];
	if (count%2==0){
		mark_X(spot);
	}else{
		mark_O(spot);
	}
	draw();
}

function check(ele){
	var current =ele.value;
	if (current === ""){
		return true;
	}else{
		return false;
	}
}

function mark_X(ele){
	if (check(ele)){
	ele.value="X";
	x_spots.push(ele.id);
	check_Xs();
	count++;
	}
}

function mark_O(ele){
	if (check(ele)){
	ele.value="O";
	o_spots.push(ele.id);
	check_Os();
	count++;
	}
}

function check_Xs(){
	var vert1=0;
	var vert2=0;
	var vert3=0;

	var horz1=0;
	var horz2=0;
	var horz3=0;

	var diag1=0;
	var diag2=0;

	for(var j=0; j<x_spots.length; j++){
		if (vert_win_1.indexOf(x_spots[j])!==-1){
			vert1++;
		}

		if (vert_win_2.indexOf(x_spots[j])!==-1){
			vert2++;
		}

		if (vert_win_3.indexOf(x_spots[j])!==-1){
			vert3++;
		}

		if (horz_win_1.indexOf(x_spots[j])!==-1){
			horz1++;
		}

		if (horz_win_2.indexOf(x_spots[j])!==-1){
			horz2++;
		}

		if (horz_win_3.indexOf(x_spots[j])!==-1){
			horz3++;
		}

		if (diag_win_1.indexOf(x_spots[j])!==-1){
			diag1++;
		}

		if (diag_win_2.indexOf(x_spots[j])!==-1){
			diag2++;
		}
	}

	if (vert1===3||vert2===3||vert3===3||horz1===3||horz2===3||horz3===3||diag1===3||diag2===3){
		alert ("X has won!");
		victory_x = true;
	}

	/*
	vert1tf=0
	ver2tf=0
	etctf=0
	for element in x_spots
		if in vert 1
			vert1tf++
		if in vert 2
			vert2tf++

	if vert1tf==3 or vert2==3...
		x wins!
*/
}

function check_Os(){
	var vert1=0;
	var vert2=0;
	var vert3=0;

	var horz1=0;
	var horz2=0;
	var horz3=0;

	var diag1=0;
	var diag2=0;

	for(var j=0; j<o_spots.length; j++){
		if (vert_win_1.indexOf(o_spots[j])!==-1){
			vert1++;
		}

		if (vert_win_2.indexOf(o_spots[j])!==-1){
			vert2++;
		}

		if (vert_win_3.indexOf(o_spots[j])!==-1){
			vert3++;
		}

		if (horz_win_1.indexOf(o_spots[j])!==-1){
			horz1++;
		}

		if (horz_win_2.indexOf(o_spots[j])!==-1){
			horz2++;
		}

		if (horz_win_3.indexOf(o_spots[j])!==-1){
			horz3++;
		}

		if (diag_win_1.indexOf(o_spots[j])!==-1){
			diag1++;
		}

		if (diag_win_2.indexOf(o_spots[j])!==-1){
			diag2++;
		}
	}

	if (vert1===3||vert2===3||vert3===3||horz1===3||horz2===3||horz3===3||diag1===3||diag2===3){
		alert ("O has won!");
		victory_o = true;
	}
}

function draw(){
	var total = x_spots.length + o_spots.length;
	if ((total===9)&&(victory_x===false)&&(victory_o===false)){
		alert ("Draw! Refresh for a new game");
	}
}

