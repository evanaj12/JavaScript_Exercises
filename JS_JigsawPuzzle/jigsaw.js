// hwk10 javascript
// ################### my code

// function to randomly select which image, and image file, will be used

function which_img(){
	var img_num=Math.ceil(Math.random()*3);
	var img_name="image"+img_num;	
	var img_file="./"+img_name;
	return [img_file,img_num];
}

img = which_img();
var file_name = img[0];
var img_num = img[1];

function random_pieces(img){

	var pic_list = [];
	var idx_list = [1,2,3,4,5,6,7,8,9,10,11,12];
	var order_ids =[];
	for (i=0; i<12; i++){
		var ran_num = Math.floor(Math.random()*idx_list.length);
		
		var pic_name="img"+img_num+"-"+idx_list[ran_num]+".jpg";
		pic_list.push(pic_name);
		idx_list.splice(ran_num,1);
		order_ids.push(ran_num);
	}
	
	var row_1 = document.getElementById("row_1");
	var row_2 = document.getElementById("row_2");
	var row1 =[];
	var row2 =[];
	for (i=0; i<6; i++){
		var pos_left=150+i*160;
		row1.push("<td id=\""+pic_list[i]+"\" "+
			"style = \"position: absolute; top: 750px; left:"+pos_left+"px;\" "+ 
			"onmousedown = \"grabber(event);\"> "+
			"<img src=\"image"+img_num+"/"+pic_list[i]+"\" alt=\"oops!\" width=\"150\" height=\"150\"> "+
			"</td>")
	};	
	for (i=6; i<12; i++){
		var pos_left=150+(i-6)*160;
		row2.push("<td id=\""+pic_list[i]+"\" "+
			"style = \"position: absolute; top: 930px; left:"+pos_left+"px;\" "+
			"onmousedown = \"grabber(event);\"> "+
			"<img src=\"image"+img_num+"/"+pic_list[i]+"\" alt=\"oops!\" width=\"150\" height=\"150\"> "+
			"</td>")
	};
	row_1.innerHTML=row1;
	row_2.innerHTML=row2;
	return pic_list;
};
var pics = random_pieces(img);

// positions of grid boxes L to R, T to B

var grid_xs = [];
for (i=0; i<4; i++){
	grid_xs.push(320+150*i);
};
var grid_ys = [];
for (i=0; i<3; i++){
	grid_ys.push(120+150*i);
};

// function to lock pieces into place

function lock(piece){
	var r_top = piece.offsetTop;
	var r_left = piece.offsetLeft;
	var x_check = false;
	var y_check = false;

	for (i=0; i<4; i++){
		var current_x = grid_xs[i];
		if ((current_x-35<=r_left)&&(r_left<=current_x+35)){
			x_check = true;
			break;
		};
	};
	for (j=0; j<3; j++){
		var current_y = grid_ys[j];
		if ((current_y-35<=r_top)&&(r_top<=current_y+35)){
			y_check = true;
			break;
		};
	};
	
	if ((x_check)&&(y_check)){
		piece.style.top=current_y+"px";
		piece.style.left=current_x+"px";
	};
};

// function to test correctness on submit
// pics are the order generated
// ids of each image need to correspond to their position
// "img"+img_num+"-"+TARGET NUM+".jpg"
// pos keys are: [x1,y1][x2,y1][x3,y1][x4,y1]
//		[x1,y2][x2,y2][x3,y2][x4,y2]
//		[x1,y3][x2,y3][x3,y3][x4,y3]

/* soo close to working but no :'(

var order_key = pics.sort();
var section = order_key.slice(1,4);
order_key.splice(1,3);
order_key.push(section);

var pos_key = [];
for (i=0; i<3; i++){
	for (j=0; j<4; j++){
		var x = grid_xs[j];
		var y = grid_ys[i];
		pos_key.push([x,y]);
	};
};

function get_pos(piece){
	var x = piece.offsetLeft;
	var y = piece.offsetTop;
	return [x,y];
}

var result = document.getElementById("messages");

function check_pieces(){
	var count=0;
	for(i=1; i<13; i++){
		var piece = document.getElementById("img"+img_num+"-"+i+".jpg");
		var coords = get_pos(piece);
		alert(coords);
		alert(pos_key[i-1]);
		if (coords==pos_key[i-1]){
			count++;
		};
	};
	if (count==12){
		result.innerHTML="<h2>Congratulations! You got it</h2>";
	}else{
		result.innerHTML="<h2>Better luck next time</h2>";
	};
};

document.getElementById("enter").onclick=function(){check_pieces()};
*/

/* if x and y coord within range +/- 10 of coords of a box, lock it to box, else nothing 
for submit: check x/y of each piece and see if it matches x/y correct coords (dictionary form?)
	write sucess/fail BELOW DONE
timer: start on load, on sumbit write to document the time taken */ 


/* timer function */

var timer = document.getElementById("timer")

var d = new Date();

var initial= d.getTime();

function end(){
	var e = new Date();
	var final = e.getTime();
	var time = Math.floor((final - initial)/1000);
	var hours = Math.floor(time/3600);
	var mins = Math.floor(time/60)-hours;
	var secs = time-hours-mins;
	if (secs>59){
		var secs_display= secs%60;
	}else{
		var secs_display= secs;
	}
	if (mins>59){
		var mins_display= mins%60;
	}else{
		var mins_display= mins;
	}
	
	document.getElementById("final_time").innerHTML=hours+":"+mins_display+":"+secs_display;
}
document.getElementById("enter").onclick=function(){end()};

//************ Dr. Mitra's Code ************

/*
 Define variables for the values computed by the grabber event
 handler but needed by mover event handler
*/
var diffX, diffY, theElement;

// The event handler function for grabbing the word
function grabber(event) {

// Set the global variable for the element to be moved

  theElement = event.currentTarget;
// Determine the position of the word to be grabbed,
//  first removing the units from left and top

  var posX = parseInt(theElement.style.left);
  var posY = parseInt(theElement.style.top);

// Compute the difference between where it is and
// where the mouse click occurred

  diffX = event.clientX - posX;
  diffY = event.clientY - posY;

// Now register the event handlers for moving and
// dropping the word

  document.addEventListener("mousemove", mover, true);
  document.addEventListener("mouseup", dropper, true);

// Stop propagation of the event and stop any default
// browser action

  event.stopPropagation();
  event.preventDefault();

}  //** end of grabber

// *******************************************************

// The event handler function for moving the word

function mover(event) {
// Compute the new position, add the units, and move the word

  theElement.style.left = (event.clientX - diffX) + "px";
  theElement.style.top = (event.clientY - diffY) + "px";

// Prevent propagation of the event
  event.stopPropagation();
}  //** end of mover

// *********************************************************
// The event handler function for dropping the word

function dropper(event) {

// Unregister the event handlers for mouseup and mousemove

// applies the lock function on drop event
  lock(theElement);

  document.removeEventListener("mouseup", dropper, true);
  document.removeEventListener("mousemove", mover, true);

// Prevent propagation of the event

  event.stopPropagation();
}  //** end of dropper

